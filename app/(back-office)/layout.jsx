"use client";
import Sidebar from "@/components/Backoffice/Sidebar";
import DashNav from "@/components/General/DashNav";
import { SessionProvider } from "next-auth/react";
import React from 'react'

const layout = ({children}) => {
  return (
    <SessionProvider>
    <div className='flex gap-4'>
        <Sidebar/>
        <div className='w-full'>
            {/* header */}
            <DashNav/>
            <main className="ml-60 p-8 min-h-screen mt-24">{children}</main>
            {/* main */}
        </div>
        {/* main body */}
    </div>
    </SessionProvider>
  )
}

export default layout