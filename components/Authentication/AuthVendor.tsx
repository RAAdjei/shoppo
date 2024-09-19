"use client";
import React, { useState } from "react";
import shopping from "../../public/shopping.png";
import Image from "next/image";
import logo from "../../public/logo.png";
import RegisterForm from "@/components/Authentication/RegisterForm";

const Auth: React.FC = () => {
  const [cardType, setCardType] = useState<string>("login");

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="flex md:flex-row bg-white shadow-lg min-h-screen w-full">
        <div className="hidden lg:block relative ml-8 my-6 w-[45%] overflow-hidden rounded-2xl p-6 bg-shopAsh">
          <div className="ml-8 mt-10 space-y-1">
            <p className="text-3xl font-nunito">Find the right product</p>
              <p className="text-3xl font-nunito">at the right price with</p>
              <p className="text-4xl font-extrabold font-nunito">Shoppo</p>
          </div>
    
          <div className="absolute bottom-1">
            <Image
              src={shopping}
              alt="Background"
              className="object-cover rounded-2xl"
            />
          </div>
        </div>
        <div className="w-full items-center lg:w-1/2 md:mt-3">
          <div className="flex md:justify-center">
            <Image
              src={logo}
              alt="Logo"
              height={130}
              width={100}
              className="object-cover mb-4 md:mb-0 md:mr-0 sticky top-0 ml-auto"
            />
          </div>

          <div className="flex justify-center items-center mb-8 mt-4">
            <h2 className="font-bold">Create a new account</h2>
            </div>
          <div className="mx-7">
            <RegisterForm role="USER"/>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Auth;
