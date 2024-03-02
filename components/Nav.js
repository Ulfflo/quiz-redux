import Link from "next/link";
import { IoIosMenu } from "react-icons/io";
import AdminModal from "./AdminModal";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import DarkModeButton from "./DarkModeBtn";
import Dropdown from "./Dropdown";

const Header = () => {
  const darkMode = useSelector((state) => state.darkMode);
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
  const [showModal, setShowModal] = useState(false); // Track login modal visibility

  useEffect(() => {
    // Check if user is already logged in from browser storage on component mount
    const loggedIn = localStorage.getItem("isLoggedIn");
    if (loggedIn === "true") {
      setIsLoggedIn(true);
    }
  }, []); // Run only once on component mount

  const handleAdminClick = () => {
    // Check if the user is not logged in
    if (!isLoggedIn) {
      setShowModal(true); // Open the login modal
    } else if (router.pathname === "/admin") {
      // If the user is on the admin page, show the logout modal
      setShowModal(true);
    } else {
      // Redirect to the admin page if logged in and not on admin page
      router.push("/admin");
    }
  

  const handleCloseModal = () => {
    // Close the login modal
    setShowModal(false);
  };

<<<<<<< HEAD
  // ----------- DROPDROWN -------------\\
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  // ----------------------------------- \\

  const isAdminPage = router.pathname === "/admin";

=======
>>>>>>> a471e19cd5ed134af6a7497c4bd252db2448ed3d
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

<<<<<<< HEAD
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
=======
            <button
              onClick={handleAdminClick}
              className="hover:text-gray-300 bg-green-600 border-none text-white no-underline text-xl"
            >
              {isLoggedIn ? "Logout" : "Admin"}
            </button>
          </div>
          <button className="md:hidden text-3xl bg-transparent border-none text-green-50">
            <IoIosMenu />
          </button>
        </nav>
      </div>
      {showModal && (
        <AdminModal
          onClose={handleCloseModal}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
        />
      )}
>>>>>>> a471e19cd5ed134af6a7497c4bd252db2448ed3d
    </header>
  );
};
}
export default Header;
