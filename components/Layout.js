import Head from "next/head";
import { useSelector } from "react-redux";

const Layout = ({ children }) => {
  const darkMode = useSelector((state) => state.darkMode);
  return (
    <div
      className={` ${
        darkMode
          ? " bg-slate-950 ring-2 text-teal-100 ring-teal-500 ring-opacity-90"
          : "bg-slate-50"
      } min-h-screen flex items-center justify-center`}
    >
      <Head>
        <title>Apple Quiz</title>
      </Head>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
