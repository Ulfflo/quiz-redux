import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-green-600 text-white py-4 mb-10 whitespace-nowrap">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 md:mr-10">
          <Link href="/" className="flex-col text-white no-underline">
            <h1 className="text-2xl font-bold">Apple Quiz</h1>
          </Link>
        </div>
        <nav className="md:space-x-16 space-x-8 md:text-xl">
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
        </nav>
      </div>
    </header>
  );
};

export default Header;
