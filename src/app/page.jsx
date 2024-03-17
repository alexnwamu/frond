/* eslint-disable react/no-unescaped-entities */
import { care, heroBg } from "../../assets";
import Navbar from "@/components/Navbar";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full h-full ">
        {/* Hero Section  */}
        <section className="flex justify-between items-center px-[7.6%]  mt-[60px]">
          <div className="relative">
            {" "}
            <div className="max-w-[524px] text-[48px] font-extrabold leading-[59px] relative z-50">
              Find the Perfect <br />
              Caregiver for your <br /> Loved Ones.
            </div>
            <div className="gap-[19px] z-10 flex-col  flex absolute left-[26px] top-[30px] inset-0  ">
              <div className="w-[450px] h-[50px] bg-[#A5EEBA] relative"></div>
              <div className="w-[528px] h-[50px] bg-[#A5EEBA] relative"></div>
              <div className="w-[345px] h-[50px] bg-[#A5EEBA] relative"></div>
            </div>
            <p className="mt-[96px] text-[#5f6f81] text-[17px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit,
              sed do eiusmod tempor.
            </p>
            <Link href="/login" >
              <button  className="text-white bg-[#0AAC49] z-[50] relative cursor-pointer px-[49px] py-[19px] mt-[40px] font-semibold ">
                Get Started
              </button>
            </Link>
          </div>

          <div>
            <div className="w-[576px] h-[614px] relative">
              <Image src={heroBg} alt="hero image" layout="" />
            </div>
          </div>
        </section>

        <section className="mt-[235px] mb-[135px] px-[7.6%] ">
          <h1 className="text-center text-6 mb-[65px] "> FEATURES</h1>
          <div className="grid-cols-3 grid gap-[30px] ">
            <div className="px-[30px] py-[65px] bg-[#E1FFED] ">
              <h2 className="text-[36px] font-semibold">Connect</h2>
              <p className="mt-[30px] max-w-[460px] text-[#5F6F81] ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor.Lorem ipsum dolor sit
                Lorem ipsum dolor sit amet, consectetur
              </p>
            </div>{" "}
            <div className="px-[30px] py-[65px] bg-[#E1FFED] ">
              <h2 className="text-[36px] font-semibold">Connect</h2>
              <p className="max-w-[460px] mt-[30px] text-[#5F6F81] ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor.Lorem ipsum dolor sit
                Lorem ipsum dolor sit amet, consectetur
              </p>
            </div>{" "}
            <div className="px-[30px] py-[65px] bg-[#E1FFED] ">
              <h2 className="text-[36px] font-semibold">Connect</h2>
              <p className="max-w-[460px] mt-[30px] text-[#5F6F81] ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor.Lorem ipsum dolor sit
                Lorem ipsum dolor sit amet, consectetur
              </p>
            </div>
          </div>
        </section>
        <section className="w-full bg-[#F8F8F8] mb-[47px] ">
          <div className="px-[7.6%]  flex justify-between  ">
            <div className="relative py-[232px]">
              <div className="text-[#0B0835] relative z-50 text-[56px] font-semibold leading-[69px]">
                Are you a care <br /> Professional
              </div>
              <div className="absolute top-[33.5%] left-[5%]  z-0 ">
                <div className="w-[370px] h-[56px] bg-[#A5EEBA] " />
                <div className="w-[349px] h-[56px] bg-[#A5EEBA]  mt-[13px]" />
              </div>
              <div className="mt-[35px] text-[#5F6F81] mb-[35px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />{" "}
                sed do eiusmod tempor.
              </div>

            <Link href="/login">
              <button className="text-white bg-[#0AAC49] px-[49px] py-[19px] font-semibold ">
                Get Started
              </button>
              </Link>
            </div>{" "}
            <Image src={care} alt="Image" width={739} height={925} />
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
