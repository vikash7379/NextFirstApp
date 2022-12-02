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
    <div className='container'>
      <SEO pageTitle={`FirstAPP - Blogs -${id}`} pageDescription="d" />

      <h1>This is Detailed <span>Blogs</span>.</h1>
      <h2> {id}. {title} </h2>
      <h4 className='bg'>{body}</h4>
    </div>
  )
}

export default BlogsData