import SEO from "../components/Seo";


const contact = () => {
  return (
    <div className="text-center">
      <SEO pageTitle="FirstAPP - Contact" pageDescription="d" />

      <h1 className="text-4xl text-yellow-200">This is <span className="text-sky-400 font-serif">Contact</span> page</h1>
      <p className="text-xl my-5 text-orange-400">Gmail : <span className="text-sky-400 font-serif">jaichaurasia90@gmail.com</span></p>
      <p className="text-xl my-5 text-orange-400">Now you see Tab title change and you can type any <span>falshy</span> string in Url so you can redirect to the <span>Error page.</span></p>
    </div>
  )
}

export default contact