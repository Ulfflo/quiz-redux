import Link from "next/link";
import { IoIosMenu } from "react-icons/io";

const Header = () => {
  return (
    <header className="bg-green-600 text-white py-4 mb-10 whitespace-nowrap">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="mb-4 md:mb-0 md:mr-10">
          <Link href="/" className=" text-white no-underline">
            <h1 className="text-2xl font-bold">Apple Quiz</h1>
          </Link>
        </div>
        <nav className="md:space-x-16 space-x-8 md:text-xl hidden md:flex">
          <Link
            href="/quizpage"
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
        </nav>
      </div>
    </header>
  );
};

export default Header;
