import Link from 'next/link'
import {useRouter} from 'next/router'
import { useEffect } from 'react'

const ErrorPage = () => {

    const router  = useRouter();

    useEffect(()=>{

        setTimeout(()=>{
            router.push("/")
        },5000)

    },[])

  return (
    <>
      <div className="error-parent">
        <div className="err404">404</div>
        <div className="error-page">
          <h1>
            <span>Soory 🥹</span> This Page not found
          </h1>
          <p>This Page is automatically Redirectly go to Home Page in 5 seconds ...</p>
          {/* <button onClick={()=>router.push("/")} >Go Back Home</button> */}
          <Link href="/"><button  >Go Back Home</button></Link>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
