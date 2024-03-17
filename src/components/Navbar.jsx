import React from "react";
import Link from "next/link";
import Image from "next/image";
import { logo } from "../../assets";
const Navbar = () => {
  return (
    <div className=" justify-between h-[115px]  items-center  px-[7.6%] flex">
      <Image src={logo} width={92} height={30} alt="frond" />{" "}
      <div>
        <Link href="/signup">
          <button className="px-[30px] py-[15px] bg-[#0AAC49] text-white">
            Sign Up
          </button>
        </Link>
        <Link href="/login">
          <button className="px-[30px] py-[15px]">Log In</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
