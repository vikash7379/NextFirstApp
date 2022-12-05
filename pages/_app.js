import '../styles/globals.css'
import Navbar from "../components/Navbar";
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" /></Head>
      <div className='main-container'>
      <Navbar/>
      <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
