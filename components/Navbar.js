import Link from  "next/link"


const Navbar = () => {
  return (
    <>
      <nav className="">
        <ul className="flex gap-5 bg-red-50 text-red-600 w-fit mx-auto px-10 py-3 my-10 rounded-full">
          <li >
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
