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
    <header className={`py-2  px-2 ${isScrolled ? 'fixed top-0 left-0 right-0 z-10 shadow-md backdrop-blur-xl bg-white/60' : 'relative'}`}>
      <div className="max-w-7/12 mx-auto md:max-w-full">
        <div className="flex justify-between items-center ">
          <div className="logo font-bold"><img className='w-10' src="../../public/logo/Logo Files/For Web/svg/Black logo - no background.svg" alt="" /></div>
          <div className="flex gap-4 text-center text-lg">
            <Link to={"/"} className="text-sm font-semibold leading-6 text-gray-900 hover:underline">Home</Link>
            <Link to={"/services"} className="text-sm font-semibold leading-6 text-gray-900 hover:underline">Services</Link>
            <Link to={"/about"} className="text-sm font-semibold leading-6 text-gray-900 hover:underline">About</Link>
            <Link to={"/contact"} className="text-sm font-semibold leading-6 text-gray-900 hover:underline">Contact</Link>
            <Link to={"/dashboard"} className="text-sm font-semibold leading-6 text-gray-900 hover:underline">Admin</Link>
            <Link to={"/company-dashbard"} className="text-sm font-semibold leading-6 text-gray-900 hover:underline">Company</Link>
            <Link to={"/customer-dashbard"} className="text-sm font-semibold leading-6 text-gray-900 hover:underline">Customer</Link>
          </div>
          <div className="text-sm font-semibold leading-6 text-gray-900">
            <Link to={"/select-one"}> Log in <span aria-hidden="true">&rarr;</span></Link> 
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
