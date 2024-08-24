import React from 'react'
import Navbar from './Navbar'
import shopbg from "../../public/shopbg.png";
import Image from "next/image";

const HomePage = () => {
  return (
    <div>
        <Navbar/>
        <div className='mt-28'>
            <Image
              src={shopbg}
              alt="login"
              height={500}
              // width={40}
              className=""
            />
        </div>
        <div>
          
        </div>
    </div>
  )
}

export default HomePage
