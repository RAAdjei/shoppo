import { useRouter } from 'next/navigation';
import React from 'react'
import { ImCancelCircle } from "react-icons/im";

const FormHeader = ({title}: {title: any}) => {
  const router = useRouter()
  return (
    <div className='flex items-center justify-between py-6 px-12 bg-shopAsh rounded-lg shadow-md mb-12'>
            <h2 className='font-semibold text-xl'>{title}</h2>
            <button onClick={() => router.back()}>
            <ImCancelCircle />
            </button>

    </div>
  )
}

export default FormHeader