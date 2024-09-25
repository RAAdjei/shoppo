import React from 'react'
import NewVendorForm from '@/components/Backoffice/NewVendorForm'
import { getData } from '@/lib/getData'

interface PageProps {
  params: {
    id: string;
  };
}

const page = async ({params: {id}}: PageProps) => {
  const user = await getData(`users/${id}`);   
  console.log(user)  
  return (
    <div className='flex flex-col gap-6 p-16'>
        <div className='max-w-4xl p-4 mx-auto'>
            <h2 className='font-nunito font-semibold'>Hello {user?.name}, Tell Us More About Your Business</h2>
        </div>
        <NewVendorForm user={user}/>
    </div>
  )
}

export default page