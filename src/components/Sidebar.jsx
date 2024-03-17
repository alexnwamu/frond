"use client";
import Link from "next/link";
import React from "react";
import { logo } from "../../assets";
import Image from "next/image";
import { usePathname } from "next/navigation";
import AvatarMenu from "./AvatarMenu";
const Sidebar = () => {
  const pathname = usePathname();
  function truncateString(str) {
    maxLength = 12;
    if (str.length > maxLength) {
      return str.substring(0, maxLength) + "...";
    } else {
      return str;
    }
  }
  return (
    <div className="  w-[192px] h-screen flex flex-col  justify-between">
      <div className="px-4">




      <Image
        width={61}
        src={logo}
        height={19}
        alt="frond"
        className="mt-[40px] ml-[15px] mb-[200px]"
      />{" "}
      <div>
        <Link href={"/dashboard"}>
          <div
            className={`${pathname === "/dashboard" ? "bg-[#EFFCEF]" : ""} text-[#86BE9C] hover:bg-[#EFFCEF] rounded mb-[10px] py-[15px] pl-[15px] w-full text-[14px]`}
          >
            Schedule
          </div>
        </Link>
     
        <Link href={"/dashboard/patients"}>
          <div
            className={`${pathname === "/dashboard/patients" ? "bg-[#EFFCEF]" : ""} text-[#86BE9C] hover:bg-[#EFFCEF] rounded mb-[10px] py-[15px] pl-[15px] w-full text-[14px]`}
          >
            Patients
          </div>
        </Link>
      </div>
            </div>
            <div className="w-full ">

<AvatarMenu/>

            </div>
    </div>
  );
};

export default Sidebar;
