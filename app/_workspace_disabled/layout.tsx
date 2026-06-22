// import React from 'react'

// const WorkspaceLayout( {
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <div>
//       {children}
//     </div>
//   )
// }

// export default WorkspaceLayout

import { SidebarProvider } from '@/components/ui/sidebar';
import React from 'react';
import { AppSidebar } from './_components/AppSidebar';
import  AppHeader from './_components/AppHeader';
// import AppSidebar from './_components/AppSidebar';


const WorkspaceLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <SidebarProvider>
        <AppSidebar/>
        <div className='w-full'><AppHeader/>
      {children}workspace
    </div>
    </SidebarProvider>
    
  );
};

export default WorkspaceLayout;