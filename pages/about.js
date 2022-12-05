import SEO from "../components/Seo";



const About = () => {
    return (
      <div className="w-fit m-auto text-center">
        <SEO pageTitle="FirstAPP | About" pageDescription="d" />
        <h1 className="text-4xl text-red-400">This is <span className="text-sky-500 font-serif tracking-wider">About</span> page</h1>
        <div className="my-10 shadow-lg shadow-cyan-300/50 flex font-sans bg-slate-100 text-black rounded-lg">
          <div className="flex-none w-64">
            <img src="https://cdni.iconscout.com/illustration/premium/thumb/man-coder-programming-on-computer-6353865-5264782.png" alt="dp" className="w-80 h-60 object-cover" loading="lazy"/>
          </div>
          <div className="flex-auto flex-col justify-center p-5 text-start font-semibold opacity-80">
            <h1 className="text-2xl my-2 text-cyan-600 ">My name is Vikash Chaurasia</h1>
            <h4 className="text-red-800 text-lg font-serif">I am a frontend developer </h4>
            <div className="flex align-middle text-2xl gap-4 my-3 text-green-800">
              <h1 className="text-xl text-red-600">Skills</h1>
              <i class="fa-brands fa-react"></i>
              <i class="fa-brands fa-html5"></i>
              <i class="fa-brands fa-css3-alt"></i>
              <i class="fa-brands fa-node-js"></i>
              <i class="fa-brands fa-bootstrap"></i>
            </div>
            <div>
              <button className="hover:bg-green-700 hover:text-black  h-10 my-2 px-5 rounded-md bg-black text-white mr-5"> <i class="fa-regular fa-envelope text-red-200 mr-1"></i>   Email me </button>
              <button className="hover:bg-cyan-200 h-10  px-6 rounded-md border border-slate-400"> <i class="fa-brands fa-github mr-1"></i> Github</button>
            </div>
            <p className="border-l-red-200 opacity-70">Feel free to contact me</p>
          </div>
        </div>
        <p className="text-xl mt-8 opacity-70">You can see that Tab Title are changed now, <span className="text-sky-500 font-serif tracking-wider">Hurray !</span> 😍</p>
        <p></p>
      </div>
    )
  }

  export default About