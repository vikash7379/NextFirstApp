import Head from "next/head";

const SEO = ({ pageTitle, pageDescription }) => (
    <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="icon" type="image/x-icon" href="mlogo.png"></link>
    </Head>
);

export default SEO;