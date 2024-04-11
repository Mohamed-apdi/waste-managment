
import { Button } from "@/components/ui/button";
import world from "../assets/Images/container.png";
import smartphone from "../assets/Images/operation.png";
import traking from "../assets/Images/locations.png";
import feedback from "../assets/Images/feedback.png";


function Home() {
  return (
    <>
    <section className=" ">
        <div className="container hone-bg mx-auto h-screen mt-[-20px] flex justify-between items-center">
          <div className="text-center space-x-4">
            <h1 className="text-5xl font-bold text-[#000] leading-snug">Streamlining Waste Management for a Greener Tomorrow</h1>
            <p className="text-lg text-gray-800">Connecting communities with eco-friendly waste solutions.</p>
            <Button className="mt-5 px-8 py-3 bg-inherit text-black border-inherit border-[1px] border-[#2997ff] font-bold  hover:bg-[#2997ff] hover:text-white rounded-xl transition duration-300 ease-in-out">Get Started</Button>
          </div>
        </div>
    </section>

      <section className="py-12 bg-gray-100 feature-bg">
        <div className="container mx-auto">
          <h2 className="text-5xl text-[#2997ff] font-bold text-center mb-6">Our Features</h2>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto text-center mb-8">To revolutionize waste management through technology, connecting households and businesses with reliable waste disposal companies. Our goal is to promote recycling and sustainable practices for a cleaner planet.</p>
          <div className="grid grid-cols-6 gap-10">

            <div className="col-start-3 col-span-2 bg-white feature-sh p-6 rounded-md shadow-md flex flex-col justify-center items-center text-center">
              <p className=" bg-[#2997ff] w-10 p-2 text-white font-bold rounded-full"><img src={world} alt="img" /></p>
              <h1 className="text-3xl text-[#2997ff] font-bold my-2">Eco-Friendly Collections</h1>
              <p className="text-sm text-gray-800">Optimized routes for reduced emissions.</p>
            </div>


            <div className="col-start-2 col-end-4 bg-white feature-sh p-6 rounded-md shadow-md flex flex-col justify-center items-center text-center">
            <p className="bg-[#2997ff] w-10 p-2 text-white font-bold rounded-full"><img src={traking} alt="img" /></p>
              <h1 className="text-3xl text-[#2997ff] font-bold my-2">Real-Time Tracking</h1>
              <p className="text-sm text-gray-800">Know when your waste is picked up.</p>
            </div>


            <div className="col-start-4 col-end-6 bg-white feature-sh p-6 rounded-md shadow-md  flex flex-col justify-center items-center text-center">
            <p className="bg-[#2997ff] w-10 p-2 text-white font-bold rounded-full"><img src={smartphone} alt="img" /></p>
              <h1 className="text-3xl text-[#2997ff] font-bold my-2">Digital Payments</h1>
              <p className="text-sm text-gray-800">Secure and hassle-free transactions.</p>
            </div>


            <div className="col-start-3 col-span-2 bg-white feature-sh p-6 rounded-md shadow-md  flex flex-col justify-center items-center text-center">
            <p className="bg-[#2997ff] w-10 p-2 text-white font-bold rounded-full"><img src={feedback} alt="img" /></p>
              <h1 className="text-3xl text-[#2997ff] font-bold my-2">Feedback System</h1>
              <p className="text-sm text-gray-800">Rate services to help us improve.</p>
            </div>


          </div>
        </div>
      </section>
 
    </>
  )
}

export default Home
