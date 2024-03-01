import Layout from "@/components/Layout";
import { StartQuizButton } from "@/components/Button";
import { FaArrowDownLong } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="flex items-center justify-center ">
      <Layout>
        <div className="text-center">
          <h2 className="w-4/5">
            Dare to test your intellect?
            <br />
            <br />
            Take our quiz now and prove what you got!
          </h2>
          <FaArrowDownLong className=" text-8xl m-8" />
        </div>
        <div className="text-center">
          <StartQuizButton>Start Quiz</StartQuizButton>
        </div>
      </Layout>
    </main>
  );
}
