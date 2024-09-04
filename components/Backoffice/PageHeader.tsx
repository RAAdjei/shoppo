import React from 'react'
import Link from 'next/link'
import { FaPlus } from "react-icons/fa6"; 
import Heading from '@/components/Backoffice/Heading'

type PageHeaderProps = {
  heading: any;
  linkTitle: any;
  href: any;
};

const PageHeader = ({heading, linkTitle, href}: PageHeaderProps) => {
  return (
    <div className="flex justify-between">
        <Heading title={heading}/>
        <Link className='flex items-center space-x-3 text-black bg-shopYellow hover:bg-shopYellow/90 focus:ring-4 focus:outline-none focus:ring-shopYellow/50 font-medium rounded-lg text-sm px-5 py-3 text-center dark:focus:ring-shopYellow/55 me-2' href={href}><FaPlus />
        <span>{linkTitle}</span>
        </Link>
      </div>
  )
}

export default PageHeader