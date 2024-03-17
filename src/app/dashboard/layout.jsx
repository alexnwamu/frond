import React from "react";
import SideBar from "@/components/SideBar";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../../lib/auth";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
export default async function DashboardLayout({
  children, // will be a page or nested layout
}) {
  const session = await getServerSession(authOptions);
  if (session?.user) {
    return (
      <main>
        <div className="flex w-full relative ">
          <div className="fixed z-40 bg-white  left-0 ">
            <SideBar />
          </div>
          <div className=" relative pl-[13.3%] z-0 w-full h-full">
            {children}
          </div>
        </div>
      </main>
    );
  }
  return (
    <main>
      {" "}
      <div className="h-screen text-center">
        <h1 className="text-5xl pt-14">You are not logged in</h1>
        <Link
          href={"/login"}
          className="w-[475px] underline text-blue-500 pl-[35px] mt-12 gap-2 inline-flex"
        >
          {" "}
          <ArrowLeft /> Go to Login page
        </Link>
      </div>
    </main>
  );
}
