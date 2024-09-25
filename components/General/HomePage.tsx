import React from 'react'
import Navbar from './Navbar'
import mission1 from "../../public/mission1.jpg";
import mission2 from "../../public/mission2.jpg";
import mission3 from "../../public/mission3.png";
import vision1 from "../../public/vision1.jpg";
import vision2 from "../../public/vision2.png";
import vision3 from "../../public/vision3.jpg";
import shopp2 from "../../public/shopp2.jpg";
import Image from "next/image";

import Footer from './Footer';
import SearchBar from './SearchBar';

const HomePage = () => {
  

  return (
    <div>
        <Navbar/>
        <div className='mt-36 ml-6'>
            <Image
              src={shopp2}
              alt="login"
              height={500}
              // width={40}
              className=""
            />
        </div>
        <div className='-mt-96 ml-32'>
          <SearchBar/> 
        </div>

        <div className="flex justify-between items-center mx-[180px] mt-80">
        <div className="h-[330px] w-[460px] font-nunito">
          <p className="text-4xl font-bold pb-6">Our Mission</p>
          <article className="text-[17px] leading-tight">
            <p>
            To empower consumers by providing real-time access to product availability 
            and pricing across multiple stores, enabling informed purchasing decisions 
            while bridging the gap between online research and in-store shopping. Our 
            platform helps businesses optimize their operations, reach wider audiences, 
            and enhance customer satisfaction through innovative, user-friendly technology.
            </p>
          </article>
        </div>
        <div className="flex flex-col space-y-5">
          <div className="flex space-x-5">
            <Image
              src={mission1}
              alt="missi1"
              className="object-cover hidden h-[178px] w-[216px] lg:block"
            />
            <Image
              src={mission2}
              alt="missi2"
              className="object-cover hidden h-[178px] w-[216px] lg:block"
            />
          </div>
          <Image
            src={mission3}
            alt="missi3"
            className="object-cover hidden h-[180px] w-[452px] lg:block"
          />
        </div>
      </div>

      <div className="flex justify-between items-center mx-[180px] mt-[90px]">
        <div className="flex flex-col space-y-5">
          <div className="flex space-x-5">
            <Image
              src={vision1}
              alt="visi"
              className="object-cover hidden h-[178px] w-[216px] lg:block"
            />

            <Image
              src={vision2}
              alt="visi2"
              className="object-cover hidden h-[178px] w-[216px] lg:block"
            />
          </div>
          <Image
            src={vision3}
            alt="visi3"
            className="object-cover hidden h-[180px] w-[452px] lg:block"
          />
        </div>
        <div className="h-[220px] w-[460px] font-nunito">
          <p className="text-4xl font-bold pb-6">Our Vision</p>
          <article className="text-[17px] leading-tight">
            <p>
            To become the leading platform that transforms the retail 
            experience by seamlessly integrating real-time inventory tracking 
            and geolocation services, fostering a transparent, efficient, and 
            connected marketplace where consumers and businesses thrive together.
            </p>
          </article>
        </div>
      </div>
        <div className='mt-72'>
            <Footer/>
        </div>
    </div>
  )
}

export default HomePage
