import Link from "next/link";
import { IoIosMenu } from "react-icons/io";
import { CiApple } from "react-icons/ci";
import { useSelector } from "react-redux";
import DarkModeButton from "./DarkModeBtn";

const Header = () => {
  const darkMode = useSelector((state) => state.darkMode);
  return (
    <header
      className={`py-4 whitespace-nowrap ${
        darkMode ? "bg-teal-900 text-green-100" : "bg-green-600 text-green-50"
      } `}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-3xl ">
          <CiApple />
        </div>
        <div className="my-4 md:mr-10">
          <Link href="/" className=" text-green-50 no-underline">
            <h1 className="text-2xl font-bold">Apple Quiz</h1>
          </Link>
        </div>

        <nav>
          <div className="md:space-x-16 space-x-8 md:text-xl hidden md:flex ">
            <Link
              href="/play"
              className="hover:text-gray-300 text-white no-underline"
            >
              Play
            </Link>
            <Link
              href="/admin"
              className="hover:text-gray-300 text-white no-underline"
            >
              Admin
            </Link>
          </div>
          <button className="md:hidden text-3xl bg-transparent border-none text-green-50">
            <DarkModeButton />
            <IoIosMenu />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
