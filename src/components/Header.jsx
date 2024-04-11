import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if page is scrolled more than 50 pixels
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);

    // Clean up function
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`py-2  px-2 ${isScrolled ? 'fixed top-0 left-0 right-0  shadow-md backdrop-blur-xl bg-white/30' : 'relative'}`}>
      <div className="max-w-7/12 mx-auto md:max-w-full">
        <div className="flex justify-between items-center text-black">
          <div className="logo font-bold">WM</div>
          <div className="flex gap-4 text-center text-lg">
            <Link to={"/"} className="hover:underline transition-all">Home</Link>
            <Link to={"/services"} className="hover:underline transition-all">Services</Link>
            <Link to={"/about"} className="hover:underline transition-all">About</Link>
            <Link to={"/contact"} className="hover:underline transition-all">Contact</Link>
          </div>
          <div className="btn flex gap-4">
            <button className="text-sm px-4 py-1 rounded-md text-Black  bg-inherit  border-[1px] border-[#2997ff] font-bold  hover:bg-[#2997ff]  transition duration-300 ease-in-out">Login</button>
            <button className="text-sm px-4 py-1 rounded-md text-Black  bg-inherit  border-[1px] border-[#2997ff] font-bold  hover:bg-[#2997ff]  transition duration-300 ease-in-out">Sign Up</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
