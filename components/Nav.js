import Link from "next/link";
import { IoIosMenu } from "react-icons/io";
import AdminModal from "./AdminModal";
import { useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import DarkModeButton from "./DarkModeBtn";
import Dropdown from "./Dropdown";

const Header = () => {
  const darkMode = useSelector((state) => state.darkMode);
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  // ----------- DROPDROWN -------------\\
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  // ----------------------------------- \\

  const isAdminPage = router.pathname === "/admin";

  return (
    <header
      className={`py-4 whitespace-nowrap ${
        darkMode ? "bg-teal-900 text-green-100" : "bg-green-600 text-green-50"
      } `}
    >
      <div className="flex justify-center items-center">
        <div>
          <Link href="/" className="text-xl no-underline">
            <p className="font-bold text-[#b7fc5a]">Quiz</p>{" "}
            <p className="font-bold text-[#dbffc4]">Apple.</p>{" "}
          </Link>
        </div>
        <div>
          <nav className="flex items-center">
            <div className="md:space-x-16 space-x-8 text-[18px] hidden md:flex  ">
              <Link
                href="/"
                className="hover:text-gray-300 text-white no-underline"
              >
                Play
              </Link>
              <Link
                href="/"
                className="hover:text-gray-300 text-white no-underline"
              >
                ScoreBoard{" "}
              </Link>

              <button
                onClick={showModal ? closeModal : toggleModal}
                className={`hover:text-gray-300 border-none text-white no-underline text-[18px] ${
                  darkMode
                    ? "bg-teal-900 text-green-100"
                    : "bg-green-600 text-green-50"
                }`}
              >
                {isAdminPage ? "Close" : "Admin"}
              </button>
              <DarkModeButton />
            </div>
            <div className="md:hidden flex items-center space-x-2">
              <Dropdown
                open={open}
                trigger={
                  <button
                    className=" flex justify-center items-center text-3xl bg-transparent border-none text-green-50"
                    onClick={handleOpen}
                    onBlur={() => setOpen(false)}
                  >
                    <IoIosMenu />
                  </button>
                }
                menu={[
                  <Link
                    className="no-underline text-green-600 hover:font-bold"
                    href="/"
                    passHref
                  >
                    Play
                  </Link>,
                  <Link
                    className="no-underline text-green-600"
                    href="/scoreboard"
                    passHref
                  >
                    ScoreBoard
                  </Link>,
                  <Link
                    className="no-underline text-green-600"
                    href="/admin"
                    passHref
                  >
                    Admin
                  </Link>,
                ]}
              />
              <DarkModeButton />
            </div>
          </nav>
        </div>
      </div>
      {showModal && <AdminModal onClose={closeModal} />}
    </header>
  );
};

export default Header;
