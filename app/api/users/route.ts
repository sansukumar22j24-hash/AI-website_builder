import { currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { db } from "@/config/db";
import { usersTable } from "@/config/schema";
import { eq } from "drizzle-orm";
//import { NextResponse } from 'next/server'



export async function POST(req: NextRequest) {
  const user = await currentUser();
    const body = await req.json()

  const userResult=await db.select().from(usersTable).where(eq(usersTable.email,user?.primaryEmailAddress?.emailAddress));


  if (userResult?.length==0) {
    const data={
       name:user?.fullName??'NA',
    email:user?.primaryEmailAddress?.emailAddress??'',
    age:0, // Added a default age as it's a required field in the schema
    credits:2

    }
    
  // Check if user already exists in the database
  const result= await db.insert(usersTable).values({
   ...data
  })
  
    return NextResponse.json({user:data})
   
  }

    return NextResponse.json({ user: userResult[0] })
  
}
