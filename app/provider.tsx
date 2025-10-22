// "use client"
// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import { useUser } from '@clerk/nextjs';
// import { UserDetailContext } from '@/contex/UserDetailContext'; // Ensure this path is correct

// const UserDetailProvider = ({children,}:Readonly<{
//     children:React.ReactNode;}>) => {

//         const  {user}=useUser();
//         const [userDetail,setUserDetail]=useState<any>();
//         useEffect(()=>{
//           user&&  CreateNewUser()
//         },[user])
  
//     const CreateNewUser= async ()=>{
//         // if user already exist
//         const result=await axios.post('/api/users',{

//         })
//         console.log(result.data);
//         setUserDetail(result.data?.user);

//     }
//     return (
//     <div><UserDetailContext.Provider value={{userDetail,setUserDetail}}>{children}</UserDetailContext.Provider>
      
//     </div>
//   )
// }

// export default UserDetailProvider
"use client"

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useUser } from '@clerk/nextjs'
import { UserDetailContext } from '@/context/UserDetailContext'

const UserDetailProvider = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const { user } = useUser()
  const [userDetail, setUserDetail] = useState<any>({ credits: 0 })

  useEffect(() => {
    if (user) {
      CreateNewUser()
    }
  }, [user])

  const CreateNewUser = async () => {
    const result = await axios.post('/api/users', {})
    console.log(result.data)
    setUserDetail(result.data?.user)
  }

  return (
    <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
      {children}
    </UserDetailContext.Provider>
  )
}

export default UserDetailProvider