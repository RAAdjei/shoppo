"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import HamburgerMenu from "./Hamburger";
import { ProfilePic } from "./Profile";
import { useSession } from "next-auth/react";
import logo from "../../public/logo.png";
import profile from "../../public/profilePic.svg";
import Link from "next/link";

const Navbar = () => {
  const router = useRouter();
  const [activeItem, setActiveItem] = useState<string>("Home");

  const handleItemClick = (item: string) => {
    setActiveItem(item);
    switch (item) {
      case "Home":
        router.push("/");
        break;
      case "About us":
        router.push("/");
        break;
      case "Contact us":
        router.push("/");
        break;
      default:
        router.push("/");
    }
  };

  const { data: session } = useSession();
  const userIsLoggedIn = !!session;

  return (
    <div className="pt-3 fixed top-0 z-50 w-full bg-white pb-[16px]">
      <div className="flex flex-row justify-between w-full h-16 py-2 lg:px-8 px-4 pt-4 ">
        <div className="flex items-center ">
          <Image src={logo} alt="Logo" height={90} width={80} className="object-cover" />
        </div>
        <div className="lg:flex flex-row items-center hidden ">
          <nav>
            <ul className="flex flex-row">
              {["Home", "About us", "Contact us"].map((item) => (
                <li
                  key={item}
                  className={`px-3 font-nunito ${activeItem === item ? "text-[#03045E]" : "text-black"}`}
                  onClick={() => handleItemClick(item)}
                >
                  <Link href={`/${item.toLowerCase().replace(" ", "")}`}>{item}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex flex-row">
          {userIsLoggedIn ? (
            <div className="flex flex-row">
              <ProfilePic />
              {/* <p className="lg:flex hidden items-center px-4 font-nunito">
                {session?.user?.firstName} <span className="text-[20px] pl-3"> &#124;</span>
              </p> */}
            </div>
          ) : (
            <div className="flex flex-row justify-center items-center">
              <Link href="/authVendor">
                <div className="flex mr-4 font-bold hover:text-slate-600 font-nunito">Register Your Business </div>
              </Link>
              <Link href="/auth">
                <Image
                  src={profile}
                  alt="login"
                  height={40}
                  width={40}
                  className="object-cover"
                />
              </Link>
              <Link href="/auth">
                <p className="lg:flex hidden items-center px-4 font-nunito hover:cursor-pointer">
                  Login <span className="text-[20px] pl-3"> &#124;</span>
                </p>
              </Link>
            </div>
          )}

          <div className="lg:flex hidden items-center">
            <Link href="/add-listing">
              <button className="bg-shopYellow text-black hover:bg-yellow-300 font-nunito font-bold text-[13px] px-5 py-3 rounded-[25px] ">
                Sign up
              </button>
            </Link>
          </div>
          <HamburgerMenu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
