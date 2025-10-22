// import { createContext } from "react";
// import { UserDetailContext } from '@/context/UserDetailContext'

// export const UserDetailContext=createContext<any>(null)
// import { UserDetailContext } from '@/context/UserDetailContext'
// Removed incorrect import from './context/UserDetailContext'
//import { UserDetailContext } from '../context/UserDetailContext'

// UserDetailContext.tsx
import { createContext } from "react";

export const UserDetailContext = createContext<any>(null);



// if import { UserDetailContext } from '@/context/UserDetailContext'
// ✅ Use the imported context directly
// or
// import { createContext } from "react";
//export const UserDetailContext = createContext<any>(null);
// ✅ Now it's a clean local declaration
