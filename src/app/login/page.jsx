"use client";
import Link from "next/link";
import React from "react";
import { logo } from "../../../assets";
import Image from "next/image";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast, Bounce } from "react-toastify";
const Login = () => {
  const [data, setData] = useState({ email: "", password: "", name: "" });
  const router = useRouter();
  const loginUser = async (e) => {
    e.preventDefault();
    const signInRes = await signIn("credentials", {
      ...data,
      redirect: false,
    });

    if (signInRes?.error === "CredentialsSignin") {
      toast.error("Invalid credentials", {
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
    } else if (signInRes?.ok) {
      router.push("/dashboard");
    }
  };
  return (
    <main className="w-full h-screen flex flex-col items-center ">
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
        <form onSubmit={loginUser} className="text-[#191F26] w-[384px]">
          <div className="mb-[50px]">
            <h1 className="text-[24px] font-bold ">Log In</h1>
            <p className="text-[#9095A9]">Let’s log you back in</p>
          </div>

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
            placeholder="*********"
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
          <button
            type="submit"
            className=" bg-[#0AAC49] w-full py-[13px] text-white text-[15px] rounded-[7px] mb-[30px]"
          >
            Log In
          </button>
        </form>
        <p className="text-[#9095A9] text-sm text-center">
          Already have an account?
          <Link href="/signup">
            <span className="text-[#0AAC49] font-medium">Sign up</span>
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Login;
