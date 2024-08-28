import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <div className='bg-slate-600 space-y-6 w-60 h-screen p-3 fixed left-0 top-0'>
        <Link href={"/"} className='mb-6'>Logo</Link>
        <div className='flex flex-col space-y-3 text-white'>
            <Link href={"/"}>Dashboard</Link>
            <Link href={"/"}>Vendors</Link>
            <Link href={"/"}>Products</Link>
            <Link href={"/"}>Customers</Link>
        </div>

    </div>
  )
}

export default Sidebar