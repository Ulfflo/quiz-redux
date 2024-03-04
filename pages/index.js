import Layout from "@/components/Layout";
import Image from "next/image";
import AppleLogo from "../public/AppleLogo.png";
import { FaRegCircleCheck } from "react-icons/fa6";
import { setName, selectName } from "@/redux/pointCount";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
Link;
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const dispatch = useDispatch();
  // const name = useSelector((state) => state.pointCount.name);
  const name = useSelector(selectName);

  const handleInputChange = (e) => {
    dispatch(setName(e.target.value));
  };

  const handleStartQuiz = () => {
    if (name) {
      // dispatch(setName(name));
      router.push("/quizpage");
    }
  };

  return (
    <main className="flex items-center justify-center">
      <Layout>
        <div className="flex items-center">
          <div className="flex-col">
            <div className="text-left">
              <h1 className="mb-2 text-[42px]">Dare to test your intellect?</h1>
              <h2 className="mb-6 mt-6 text-[16px] text-gray-500 font-thin">
                {" "}
                Take our quiz now and prove what you got!
              </h2>
            </div>
            <div className="text-left mb-4">
              <input
                placeholder="Enter your name to get started"
                value={name}
                onChange={(e) => handleInputChange(e)}
                className="bg-white border border-green-500 border-solid rounded-lg py-2 px-2 w-[240px] focus: outline-1 focus:outline-green-500 mr-2"
              ></input>
              <Link
                href="/quizpage"
                onClick={() => handleStartQuiz()}
                className="bg-[#40a748] text-white border-none rounded-lg py-3 px-8"
              >
                Start Quiz
              </Link>
            </div>
            <div className="flex-start mt-2 text-[14px]">
              <span className=" text-gray-500 mr-2">
                <FaRegCircleCheck className="text-[#40a748] mr-1" />
                Get 10 common knowledge questions{" "}
              </span>
              <span className=" text-gray-500">
                <FaRegCircleCheck className="mr-1 text-[#40a748]" />
                Go for the highscore{" "}
              </span>
            </div>
          </div>
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
