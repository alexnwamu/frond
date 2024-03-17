"use client";
import Link from "next/link";
import React from "react";
import { logo } from "../../../assets";
import { toast,Bounce, ToastContainer} from "react-toastify";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
const SignUp = () => {
  const [data, setData] = useState({ name: "", email: "", password: "" });
  const router = useRouter();
  const registerUser = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      router.push("/login");
    } else if (res.status === 409) {
      toast.error("Email already exists", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } else if (res.status === 400) {
      toast.error("Please enter all fields", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } else {
      toast.error("Please enter all fields", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };
  return (
    <div className="w-full h-screen flex flex-col items-center ">
      <Link href="/">
        <Image
          src={logo}
          alt="frond"
          className="mt-[30px]"
          width={92}
          height={30}
        />
      </Link>
      <div className="mt-[200px]">
        <form action="" onSubmit={registerUser} className="text-[#191F26] w-[384px]">
          <div className="mb-[50px]">
            <h1 className="text-[24px] font-bold ">Sign Up</h1>
            <p className="text-[#9095A9]">
              Let’s enter your data to continue to use thrive
            </p>
          </div>

          <h1>Name</h1>
          <input
            type="text"
            name="name"
            id="name"
            className="w-full py-[14px] px-[25px] mb-[20px]"
            placeholder="e.g Charles"
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
          <h1>Email</h1>
          <input
            type="email"
            name="email"
            className="w-full py-[14px] mb-[20px] px-[25px]"
            id="email"
            placeholder="email@email.com"
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          <h1>Password</h1>
          <input
            type="password"
            name="password"
            id="password"
            className="w-full py-[14px] px-[25px] mb-[20px]"
            placeholder="Enter your password"
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
          <button className=" bg-[#0AAC49] w-full py-[13px] text-white text-[15px] rounded-[7px] mb-[30px]">
            Sign Up
          </button>
        </form>
        <p className="text-[#9095A9] text-sm text-center">
          Already have an account?
          <Link href="/login">
            <span className="text-[#0AAC49] font-medium">Log in</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
