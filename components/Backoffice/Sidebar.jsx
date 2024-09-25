"use client";

import Link from 'next/link'
import React from 'react'
import logo from "../../public/logo.png";
import Image from "next/image";
import { BiSolidDashboard } from "react-icons/bi";
import { HiUsers } from "react-icons/hi2";
import { FaBuildingUser } from "react-icons/fa6";
import { FaShoppingBag } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { usePathname } from 'next/navigation';
import { IoLogOut } from "react-icons/io5";

const Sidebar = () => {
  const pathname = usePathname()
  const sidebarLinks = [

    {
      title: "Products",
      icon: FaShoppingBag,
      href: "/dashboard/products",  
    },

    {
      title: "Vendors",
      icon: FaBuildingUser,
      href: "/dashboard/vendors",        
    },

    {
      title: "Customers",
      icon: HiUsers,
      href: "/dashboard/customers", 
    },

    {
      title: "Settings",
      icon: IoSettings,
      href: "/dashboard/settings",   
    },
  ]
  return (
    <div className='bg-gray-200 space-y-6 w-60 h-screen fixed top-0'>
        <Link href={"/"} className='mb-6'>
        <Image src={logo} alt="Logo" height={90} width={80} className="object-cover py-4 ml-4" />
        </Link>
        <div className='flex flex-col space-y-3 text-black'>
            <Link href="/dashboard" className={pathname === '/dashboard'?'flex items-center space-x-3 py-2 px-4 border-l-4 border-shopYellow text-yellow-800':
                    'flex items-center space-x-3 py-2 px-4'
                  }>
              <BiSolidDashboard className='size-5'/>
              <span className='font-semibold'>Dashboard</span>
            </Link>
            {
              sidebarLinks.map((item, i)=>{
                const Icon = item.icon
                return (
                  <Link key={i} href={item.href} className={item.href == pathname?'flex items-center space-x-3 py-2 px-4 border-l-4 border-shopYellow text-yellow-800':
                    'flex items-center space-x-3 py-2 px-4'
                  }>
                  <Icon className='size-5'/>
                  <span className='font-semibold'>{item.title}</span>
                </Link>
                )
              })
            }

            <div className='pt-60 px-4 py-2'>
            <button className='bg-shopYellow rounded-md flex items-center space-x-3 py-2 px-6'>
            <IoLogOut className='size-5'/>
              <span>Logout</span>
              </button>
            </div>

        </div>

    </div>
  )
}

export default Sidebar