import Layout from "@/components/Layout";
import Image from "next/image";
import AppleLogo from "../public/AppleLogo.png";
import { FaRegCircleCheck } from "react-icons/fa6";

export default function Home() {
  return (
    <main>
      <Layout>
        <div className="flex items-center">
          {/* container text left */}
          <div className="flex-col justify-center text-center md:text-left md:ml-8">
            <div className="">
              <h1 className="mb-2 text-[48px]">Dare to test your intellect?</h1>
              <h2 className="mb-6 mt-6 text-[16px] font-thin opacity-80">
                {" "}
                Take our quiz now and prove what you got!
              </h2>
            </div>
            <div className="text-center mb-4 md:text-left whitespace-nowrap">
              <input
                placeholder="Enter your name to get started"
                className="bg-white border border-green-500 border-solid rounded-lg py-3 px-2 md:w-[240px] w-[200px] focus: outline-1 focus:outline-green-500 mr-2"
              ></input>
              <button className="bg-[#40a748] text-white border-none rounded-lg py-4 px-8">
                Start Quiz
              </button>
            </div>
            <div className="flex-start mt-2 text-[14px] opacity-80">
              <span className="  mr-2">
                <FaRegCircleCheck className="text-[#40a748] mr-1" />
                Get 10 common knowledge questions{" "}
              </span>
              <span className=" ">
                <FaRegCircleCheck className="mr-1 text-[#40a748]" />
                Go for the highscore{" "}
              </span>
            </div>
          </div>
          {/* container apple image right */}
          <div className="w-1/2 hidden md:flex">
            <Image
              className="h-auto w-[400px]"
              src={AppleLogo}
              style={{ objectFit: "contain" }}
            ></Image>
          </div>
        </div>
      </Layout>
    </main>
  );
}
