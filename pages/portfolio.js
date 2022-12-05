import SEO from "../components/Seo";


const portfolio = () => {
  return (
    <div className = "w-fit m-auto text-center">
      <SEO pageTitle="FirstAPP - Portfolio" pageDescription="d" />
      <h1 className="text-4xl text-yellow-200">This is <span className="text-sky-400 font-serif">Portfolio</span> page.</h1>
      <p className="text-xl my-5 text-orange-400">You can see that Tab Title are changed now, <span className="text-sky-400 font-serif">Hurray !</span> 😍</p>
      <p className="text-lg my-3 text-orange-600 opacity-75">Want to see error page then type any random string in  <span className="text-sky-400 font-serif">URL,</span> 😍</p>

    </div>
  )
}

export default portfolio