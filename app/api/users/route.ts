// import { currentUser } from "@clerk/nextjs/server";
// import { NextRequest, NextResponse } from "next/server";
// import { db } from "@/config/db";
// import { usersTable } from "@/config/schema";
// import { eq } from "drizzle-orm";
// //import { NextResponse } from 'next/server'



// export async function POST(req: NextRequest) {
//   const user = await currentUser();
//     const body = await req.json();

//     // Only proceed if user has a valid email
//     const userEmail = user?.primaryEmailAddress?.emailAddress;
//     if (!userEmail) {
//       return NextResponse.json({ error: "User email not found." }, { status: 400 });
//     }
//     let userResult;
//     try {
//       userResult = await db
//         .select()
//         .from(usersTable)
//         .where(eq(usersTable.email, userEmail));
//     } catch (error) {
//       console.error("Database query error:", error);
//       return NextResponse.json({ error: "Internal server error" }, { status: 500 });
//     }

//     if (!userResult || userResult.length === 0) {
//       const data = {
//        name:user?.fullName??'NA',
//     email:user?.primaryEmailAddress?.emailAddress??'',
//     age:0, // Added a default age as it's a required field in the schema
//     credits:2

//     }
    
//   // Check if user already exists in the database
//   const result= await db.insert(usersTable).values({
//    ...data
//   })
  
//     return NextResponse.json({user:data})
   
//   }

//     return NextResponse.json({ user: userResult[0] })
// // Removed duplicate POST function and closing brace for lint fix

//     const userEmail = user?.primaryEmailAddress?.emailAddress;
//     if (!userEmail) {
//       return NextResponse.json({ error: "User email not found." }, { status: 400 });
//     }

//     const userResult = await db
//       .select()
//       .from(usersTable)
//       .where(
//         eq(usersTable.email, userEmail ?? "")
//       );

//     if (!userResult || userResult.length === 0) {
//       const data = {
//         name: user?.fullName ?? "NA",
//         email: userEmail,
//         age: 0,
//         credits: 2,
//       };

//       await db.insert(usersTable).values(data);
//       return NextResponse.json({ user: data });
//     }

//     return NextResponse.json({ user: userResult[0] });
//   } catch (error) {
//     console.error("User POST error:", error);
//     return NextResponse.json({ error: "Internal server error" }, { status: 500 });
//   }
// }

// // Only proceed if user has a valid email
// const userEmail = user?.primaryEmailAddress?.emailAddress;
// if (!userEmail) {
//   return NextResponse.json({ error: "User email not found." }, { status: 400 });
// }

// const userResult = await db
//   .select()
//   .from(usersTable)
//   .where(eq(usersTable.email, userEmail));

// if (!userResult || userResult.length === 0) {
//   const data = {
//    name:user?.fullName??'NA',
// email:user?.primaryEmailAddress?.emailAddress??'',
// age:0, // Added a default age as it's a required field in the schema
// credits:2

// // }
// import { currentUser } from "@clerk/nextjs/server";
// import { NextRequest, NextResponse } from "next/server";
// import { db } from "@/config/db";
// import { usersTable } from "@/config/schema";
// import { eq } from "drizzle-orm";

// export async function POST(req: NextRequest) {
//   try {
//     const user = await currentUser();
//     const body = await req.json();

//     const userEmail = user?.primaryEmailAddress?.emailAddress;
//     if (!userEmail) {
//       return NextResponse.json({ error: "User email not found." }, { status: 400 });
//     }

//     const userResult = await db
//       .select()
//       .from(usersTable)
//       .where(eq(usersTable.email, userEmail));

//     if (!userResult || userResult.length === 0) {
//       const data = {
//         name: user?.fullName ?? "NA",
//         email: userEmail,
//         age: 0,
//         credits: 2,
//       };

//       await db.insert(usersTable).values(data);
//       return NextResponse.json({ user: data });
//     }

//     return NextResponse.json({ user: userResult[0] });
//   } catch (error) {
//     console.error("User POST error:", error);
//     return NextResponse.json({ error: "Internal server error" }, { status: 500 });
//   }
// }
// import { currentUser } from "@clerk/nextjs/server";
// import { NextRequest, NextResponse } from "next/server";
// import { db } from "@/config/db";
// import { usersTable } from "@/config/schema";
// import { eq } from "drizzle-orm";
// //import { NextResponse } from 'next/server'



// export async function POST(req: NextRequest) {
//   const user = await currentUser();
//     const body = await req.json()

//   const userResult=await db.select().from(usersTable).where(eq(usersTable.email,user?.primaryEmailAddress?.emailAddress));


//   if (userResult?.length==0) {
//     const data={
//        name:user?.fullName??'NA',
//     email:user?.primaryEmailAddress?.emailAddress??'',
//     age:0, // Added a default age as it's a required field in the schema
//     credits:2

//     }
    
//   // Check if user already exists in the database
//   const result= await db.insert(usersTable).values({
//    ...data
//   })
  
//     return NextResponse.json({user:data})
   
//   }

//     return NextResponse.json({ user: userResult[0] })
  
// }
import { currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { db } from "@/config/db";
import { usersTable } from "@/config/schema";
import { eq } from "drizzle-orm";


// export async function POST(req: NextRequest) {
//   const user = await currentUser();
//   const body = await req.json();
//   //const userId = body.id;
//   const url = new URL(req.url);
// //const param = url.searchParams.get("yourParam");


//   if (!user || !user.primaryEmailAddress?.emailAddress) {
//     return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
//   }

//   const email = user.primaryEmailAddress.emailAddress;

//   // Check if user already exists
//   const existingUsers = await db
//     .select()
//     .from(usersTable)
//     .where(eq(usersTable.email, email));

//   if (existingUsers.length === 0) {
//     const newUser = {
//       name: user.fullName ?? "NA",
//       email,
//       age: 0,
//       credits: 2,
//     };

//     await db.insert(usersTable).values(newUser);

//     return NextResponse.json({ user: newUser }, { status: 201 });
//   }

//   return NextResponse.json({ user: existingUsers[0] });
// }
export async function POST(req: NextRequest) {
  try {
    const user = await currentUser();
    const body = await req.json();

    if (!user || !user.primaryEmailAddress?.emailAddress) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const email = user.primaryEmailAddress.emailAddress;

    const existingUsers = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.email, email));

    if (existingUsers.length === 0) {
      const newUser = {
        name: user.fullName ?? "NA",
        email,
        age: 0,
        credits: 2,
      };

      await db.insert(usersTable).values(newUser);
      return NextResponse.json({ user: newUser }, { status: 201 });
    }

    return NextResponse.json({ user: existingUsers[0] }, { status: 200 });
  } catch (error) {
    console.error("User POST error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
export async function GET() {
  return NextResponse.json({ message: "API route is working!" });
}
