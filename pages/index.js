// import Head from 'next/head';
import SEO from "../components/Seo";
import Image from "next/image";

const index = () => {
  return (
    <>
      <SEO pageTitle="FirstAPP  |  Home" pageDescription="d" />
      <div className="w-fit text-center m-auto">
        <Image
          src="/mlogo.png"
          alt="logo"
          width={200}
          height={240}
          className="m-auto mb-6"
        />
        <h1 className="text-center text-yellow-400">
          Hello, This is my first{" "}
          <span className="text-sky-500 tracking-wider font-serif">NEXT.js</span> App
        </h1>
        <style jsx>
          {`
            h1 {
              font-size: 2.3rem;
              font-weight: 400;
            }
          `}
        </style>
        <h1 className="text-red-400">
          I am using <span className="text-sky-500 font-serif tracking-wider ">
            Tailwind
          </span> css in this Project.
        </h1>
        <p className="text-lg text-opacity-40 text-purple-600">
          This is better than Bootstrap css.
        </p>
      </div>
    </>
  );
};

export default index;
