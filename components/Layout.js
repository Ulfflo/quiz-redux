import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <Head>
        <title>Apple Quiz</title>
      </Head>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
