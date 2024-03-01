const Footer = () => {
  return (
    <footer className="bg-slate-50 text-white w-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        style={{ display: "block" }}
      >
        <path
          fill="#16A34A"
          fill-opacity="1"
          d="M0,128L34.3,122.7C68.6,117,137,107,206,128C274.3,149,343,203,411,208C480,213,549,171,617,128C685.7,85,754,43,823,42.7C891.4,43,960,85,1029,117.3C1097.1,149,1166,171,1234,170.7C1302.9,171,1371,149,1406,138.7L1440,128L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        ></path>
      </svg>
      <div className="mx-auto bg-green-600 text-white">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4">
            <h2 className="text-lg mb-4 font-serif">About</h2>
            <p className="font-serif">
              We're a group of students embarking on our first quiz adventure!
              🚀 Join us on this exciting journey!
            </p>
          </div>
          <div className="w-full md:w-1/4">
            <ul className="text-sm list-none">
              <li>
                <h2 className="text-lg mb-4 font-serif">Contact</h2>
              </li>
              <li className="font-serif">Phone: 123-456-789</li>
              <li className="font-serif">Email: info@apple.se</li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <ul className="text-sm list-none">
              <li>
                <h2 className="text-lg mb-4 font-serif">Links</h2>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-green-800 no-underline font-serif"
                >
                  Quiz
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-green-800 no-underline font-serif"
                >
                  Admin
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-green-800 no-underline font-serif"
                >
                  Contact developers
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <ul className="text-sm list-none">
              <li>
                <h2 className="text-lg mb-4 font-serif">Follow us</h2>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-green-800 no-underline font-serif"
                >
                  Linkedin
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-green-800 no-underline font-serif"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-green-800 no-underline font-serif"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-6 border-green-800" />
        <div className="text-center text-sm font-serif">
          &copy; {new Date().getFullYear()} Emelie, Karolina, Josh, Åsa & Ulf:
          Apple Group. All rights reserved. ✌️
        </div>
      </div>
    </footer>
  );
};
export default Footer;
