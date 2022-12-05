import React from 'react'
import SEO from "../../components/Seo";


export const getStaticPaths = async() => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  const paths = data.map((curElem) => {
    return{
      params : {
        pageNo : curElem.id.toString()
      },
    }
  })

  return{
    paths,
    fallback : false,
  }
};
export const getStaticProps = async(context) => {

  const id = context.params.pageNo;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  // const data = JSON.parse(JSON.stringify(res));
  const data = await res.json();

  return {
    props : {
      data,
    },
  }
}

const BlogsData = ({data}) => {

  const {id,title,body} = data;

  return (
    <div className='w-2/3 text-center m-auto'>
      <SEO pageTitle={`FirstAPP - Blogs -${id}`} pageDescription="d" />

      <h1 className='text-3xl mb-5 text-orange-400'>This is Detailed <span className='text-sky-500'>Blogs.</span></h1>
      <h2 className='text-xl text-start mb-5 text-purple-400'> {id}. {title} </h2>
      <h4 className='text-start text-2xl font-serif text-sky-500'> About</h4>
      <h4 className='bg text-start text-rose-500 text-lg'>{body}</h4>
    </div>
  )
}

export default BlogsData