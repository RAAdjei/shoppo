"use client";
import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { RxEnvelopeClosed } from "react-icons/rx";

const Footer = () => {
  return (
    <div className="flex items-center justify-center">
      {/* Page */}

      <footer className="bg-[#00010F] w-screen text-white py-12 md:px-6 font-nunito text-sm">
        <div className="lg:mx-32 text-left justify-start flex-col px-4 sm:px-3 lg:px-8">
          {/* FIrst line */}
          <div className="flex flex-col md:flex-row justify-between my-10">
            <div className="flex-row justify-between">
              <Image className="pb-4" src="/shoppo.png" alt="Logo" height={90} width={126} />
              <p className=" text-[14px] text-gray-400">
                We are a dedicated to making your <br />shopping experience 
                seamless <br /> and hasel free.
              </p>
            </div>
            {/* Second line */}
            <div className="w-full md:w-6/12">
              <h1 className="my-4 pb-2 mt-4 text-2xl md:text-3xl">Subscribe to our newsletter</h1>
              <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:items-center">
                <input
                  type="email"
                  className="flex lg:w-full mr-4 md:w-4/6 h-16 bg-inherit border-2 rounded-3xl
                     py-2 px-4 text-white focus:ring-shopYellow"
                  placeholder="enter your email address"
                />
                <button
                  className="bg-terrablue hover:bg-shopYellow text-white w-2/5 rounded-3xl ml-1 px-10 h-16 focus:outline-none focus:ring-2 focus:ring-shopYellow lg:w-3/12 md:w-2/6 py-0.5 text-lg flex items-center justify-center"
                  type="submit"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* 2nd grid */}
          <div className="grid grid-cols-2 gap-y-8 md:space-x-10 md:grid-cols-3 border-t-2 pt-12">
            {/* Menu */}
            <div className="">
              <h3 className="text-lg font-bold pb-7">Menu</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-gray-400 hover:text-shopYellow text-[18px]">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-shopYellow text-[18px]">
                    Search
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-shopYellow text-[18px]">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-shopYellow text-[18px]">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Socials */}
            <div>
              <h3 className="text-lg font-bold pb-7">Social</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-gray-400 hover:text-shopYellow text-[18px]">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-shopYellow text-[18px]">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-shopYellow text-[18px]">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-shopYellow text-[18px]">
                    Youtube
                  </a>
                </li>
              </ul>
            </div>
            {/* Contact */}
            <div className="lg:my-0">
              <h3 className="text-lg font-bold pb-7">Contact</h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="mailto:info@example.com"
                    className="text-gray-400 hover:text-shopYellow flex text-[18px]"
                  >
                    <RxEnvelopeClosed className="mr-2" />
                    admin@shoppo.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+15551234567"
                    className="text-gray-400 hover:text-shopYellow flex text-[18px]"
                  >
                    <FiPhone className="mr-2" />
                    +233544726002
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-shopYellow flex text-[18px]">
                    <CiLocationOn className="mr-2" /> East Legon, Accra
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
