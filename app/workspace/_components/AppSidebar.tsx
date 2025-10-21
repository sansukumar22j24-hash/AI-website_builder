// "use client"

// import Image from "next/image"
// import {
//   Sidebar,
//   SidebarContent,
//   SidebarFooter,
//   SidebarGroup,
//   SidebarGroupLabel,
//   SidebarHeader,
// } from "@/components/ui/sidebar"
// import { Button } from "@/components/ui/button"
// import Link from "next/link"
// import React from "react"
// import { UserDetailContext } from "@/contex/UserDetailContext"
// //import React, { useContext } from 'react';
// const { userDetail, setUserDetail } = useContext(UserDetailContext);
// //import { Button } from "react-day-picker"

// export function AppSidebar() {
// const [projectList,setProjecList]=React.useState([]);

// const { userDetail, setUserDetail } = useContext(UserDetailContext);
//   return (
//     <Sidebar>
//       <SidebarHeader className="p-5">
//         <div className=" flex items-center gap-2">
//             <Image src={'/logo.svg'} alt="logo " width={35} height={25}/>
//             <h2 className="font-bold text-xl">Ai Website Builder</h2>
//         </div>
//         <Link href={'/workspace'} className="mt-5 w-full">
//         <Button className="w-full">
//           +Add New Project
//         </Button>
//         </Link>
//         </SidebarHeader>
//       <SidebarContent>
//         <SidebarGroup className="p-5"
//         >
//           <SidebarGroupLabel className="">Projects</SidebarGroupLabel>
//           {projectList.length==0&&<h2 className="text-sm px-2 text-gray-500">No Project Found</h2>}
//         </SidebarGroup>
//         <SidebarGroup />
//       </SidebarContent>
//       <SidebarFooter >

//         <div>
//           <h2>Remaining Credits <span className="font-bold">{userDetail.credits}</span></h2>
//         </div>
//       </SidebarFooter>
//     </Sidebar>
//   )
// }
// function useContext(UserDetailContext: React.Context<any>): { userDetail: any; setUserDetail: any } {
//   throw new Error("Function not implemented.")
// }

"use client"

import Image from "next/image"
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupLabel, SidebarHeader } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import React, { useContext,useState } from "react"
import { UserDetailContext } from "@/contex/UserDetailContext"
import { Progress } from "@radix-ui/react-progress"
//import { UserDetailContext } from "@/contex/UserDetailContext"
//import { UserDetailContext } from "@/context/UserDetailContext"


export function AppSidebar() {
  const [projectList, setProjecList] = React.useState([]);
  
  const { userDetail, setUserDetail } = useContext(UserDetailContext)

  if (!userDetail) {
    return null; // Or a loading spinner
  }

  return (
    <Sidebar>
      <SidebarHeader className="p-5">
        <div className="flex items-center gap-2">
          <Image src={'/logo.svg'} alt="logo" width={35} height={25} />
          <h2 className="font-bold text-xl">Ai Website Builder</h2>
        </div>
        <Link href={'/workspace'} className="mt-5 w-full">
          <Button className="w-full">+Add New Project</Button>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup className="p-5">
          <SidebarGroupLabel>Projects</SidebarGroupLabel>
          {projectList.length === 0 && <h2 className="text-sm px-2 text-gray-500">No Project Found</h2>}
        </SidebarGroup>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter>
        <div>
          <h2>Remaining Credits <span className=" flex justify-between font-bold">{userDetail.credits}</span></h2>
          <Progress value={33}/>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
