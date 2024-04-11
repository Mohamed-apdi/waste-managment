import { FaFacebook,FaInstagram,FaLinkedin,FaYoutube  } from "react-icons/fa";
import { Link } from "react-router-dom"


function Footer() {
  return (
   <>
  
   <footer className="py-7 bg-[#2196F3] text-white">
    <div className=" max-w-7xl mx-auto ">
      <div className="flex flex-row justify-center mx-10">
        <div className=" w-4/5">
          <h4 className="mb-4 font-bold">Contact Us</h4>
          <div>
            <h1></h1>
            <div className="flex gap-3 mt-2">
              <a href="#"> <FaFacebook className=" text-3xl" /></a>
              <a href="#"> <FaInstagram className=" text-3xl" /></a>
              <a href="#"> <FaLinkedin className=" text-3xl" /></a>
              <a href="#"> <FaYoutube className=" text-3xl" /></a>
            </div>
          </div>
        </div>
        <div className=" w-3/5">
          <h4 className="mb-4 font-bold">Information</h4>
          <div>
            <ul>
            <li><Link className=" hover:underline text-[14px]">Privacy Policy</Link></li>
            <li><Link className=" hover:underline text-[14px]">Refund Policy</Link></li>
            <li><Link className=" hover:underline text-[14px]">Cookie policy</Link></li>
            <li><Link className=" hover:underline text-[14px]">Terms & Conditions</Link></li>
            <li><Link className=" hover:underline text-[14px]">Blogs</Link></li>
            </ul>
          </div>
        </div>
        <div className=" w-3/5">
          <h4 className="mb-4 font-bold">Account</h4>
          <div>
            <ul>
            <li><Link className=" hover:underline text-[14px]">About Us</Link></li>
            <li><Link className=" hover:underline text-[14px]">FAQ</Link></li>
            <li><Link className=" hover:underline text-[14px]">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className=" w-4/5">
          <h4 className="mb-4 font-bold">Quick Links</h4>
          <div>
            <ul>
            <li><Link className=" hover:underline text-[14px]">Laptops</Link></li>
            <li><Link className=" hover:underline text-[14px]">Mobiles</Link></li>
            <li><Link className=" hover:underline text-[14px]">Headphones</Link></li>
            <li><Link className=" hover:underline text-[14px]">Tablets</Link></li>
            <li><Link className=" hover:underline text-[14px]">Smart Watches</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
   </footer>
   <footer className="py-4 bg-[#2196F3] text-white">
    <div className="max-w-7xl mx-auto">
    <div className="flex flex-row">
      <div className=" w-full">
        <p className="text-center mb-0">
          &copy; {new Date().getFullYear()} Powered by codewithmoha
          </p>
      </div>
    </div>
    </div>
   </footer>
   </>
  )
}

export default Footer
