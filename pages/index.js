// import Head from 'next/head';
import SEO from "../components/Seo";

const index = () => {
  return (
    <div className="maian-container">
      <SEO pageTitle="FirstAPP - Home" pageDescription="d" />
      <div className="container">
        <img src="mlogo.png" alt="logo" />
        <h1>Hello, This is my first <span>NEXT.js</span>  App</h1>
        <style jsx>

          {`
            h1 {
              font-size: 2.3rem;
              font-weight: 400;
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default index;
