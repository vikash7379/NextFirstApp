import Link from 'next/link'
import SEO from "../../components/Seo";


export const getStaticProps = async() => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return {
    props : {
      data,
    },
  }
}

const BlogPage = ({data}) => {
    return (

      <div  style={{alignItems:"flex-start",width:"fit-content",margin:"auto" }}>
      <SEO pageTitle="FirstAPP - Blogs" pageDescription="d" />

      <h1 className='text-4xl text-emerald-400' style={{width:"fit-content",margin:" 0 auto 1rem"}}>This is <span className='text-sky-400 font-serif'>Blogs Api</span> Page.</h1>
      <h2 className='opacity-75 text-lg mb-5'>This is demo Api from json
        placeholder You can <u className='text-purple-500 cursor-pointer'>Click</u> on the blog to redirect Details
        page of Blogs.
      </h2>
      {data.slice(0,5).map((curEle)=>{
          return(
            <div key={curEle.id} style={{color:"cyan"}}>
              <Link href={`blog/${curEle.id}`}><h2 className='mb-5 text-lg'>{curEle.id}. {curEle.title}</h2></Link>
            </div>
          )
        })
      }
      </div>
    )
  }

  export default BlogPage