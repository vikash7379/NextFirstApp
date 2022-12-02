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

      <div className='container' style={{alignItems:"flex-start",width:"fit-content",margin:"auto" }}>
      <SEO pageTitle="FirstAPP - Blogs" pageDescription="d" />

      <h1 style={{width:"fit-content",margin:" 0 auto 1rem"}}>This is <span>Blogs</span> Page.</h1>
      <span>This is demo Api from json
        placeholder You can <u>Click</u> on the blog to redirect Details
        page of Blogs.
      </span>
      {data.slice(0,5).map((curEle)=>{
          return(
            <div key={curEle.id} style={{color:"cyan"}}>
              <Link href={`blog/${curEle.id}`}><h2>{curEle.id}. {curEle.title}</h2></Link>
            </div>
          )
        })
      }
      </div>
    )
  }

  export default BlogPage