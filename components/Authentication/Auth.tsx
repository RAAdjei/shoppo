"use client";
import React, { useState } from "react";
import shopping from "../../public/shopping.png";
import Image from "next/image";
import logo from "../../public/logo.png";
import LoginCard from "./LoginCard";
import SignupCard from "./SignupCard";

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
          <div className="nav w-[50%] lg:w-[40%] -mt-10 h-12 bg-shopAsh flex items-center rounded-full justify-between px-5 mb-5 mx-auto">
            <button
              type="button"
              className={`${cardType === "login" ? " bg-shopYellow rounded-full" : ""} w-1/2 h-2/3 font-nunito`}
              onClick={() => setCardType("login")}
            >
              <p
                className={`${cardType === "login" ? "text-black" : "text-black"} font-nunito font-bold`}
              >
                Login
              </p>
            </button>

            <button
              type="button"
              className={`${cardType === "signup" ? " bg-shopYellow rounded-full" : ""} w-2/3 md:w-1/2 h-2/3 font-nunito`}
              onClick={() => setCardType("signup")}
            >
              <p
                className={`${cardType === "signup" ? "text-black" : "text-black"} font-nunito font-bold`} 
              >
                Register
              </p>
            </button>
          </div>
          <div className="w-5/6 lg:w-full font-nunito mx-auto">
            {cardType === "login" ? <LoginCard /> : <SignupCard />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
