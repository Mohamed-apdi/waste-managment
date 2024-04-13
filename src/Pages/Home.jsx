
import { Button } from "@/components/ui/button";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


function Home() {
  return (
    <>
    
    <section className="bg-[#ffff]">
        <div className="container mx-auto h-screen mt-[-20px] flex justify-between items-center">
          
          <div className="text-center space-x-4">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Streamlining Waste Management for a Greener Tomorrow</h1>
            <p className="leading-7 [&:not(:first-child)]:mt-6">Connecting communities with eco-friendly waste solutions.</p>
           <Link to={"/dashboard"}> <Button className="mt-5 px-8 py-3 bg-black scroll-m-20 text-xl font-semibold tracking-tight text-white border-inherit border-[1.6px] border-[#f4f4f5]  hover:bg-black/80 hover:text-white rounded-xl transition duration-300 ease-in-out">Get Started</Button></Link>
          </div>
        </div>
    </section>

      <section className="py-10 bg-white/60">
        
        <div className="container mx-auto">
          <h2 className="text-5xl text-black  text-center mb-6 scroll-m-20  font-semibold tracking-tight">Our Innovative Feature</h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6 max-w-3xl text-center mx-auto">To revolutionize waste management through technology, connecting households and businesses with reliable waste disposal companies. Our goal is to promote recycling and sustainable practices for a cleaner planet.</p>
          <div className="flex justify-center items-center gap-4 p-4">
            <div className="w-1/4 p-3 bg-white/85] shadow-box text-center rounded-md cursor-pointer">
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Eco-friendly Collections</h3>
              <p className="leading-[22px] [&:not(:first-child)]:mt-6">Optimized routes for reduced emissions, ensuring that every pickup contributes to a healthier planet.</p>
            </div>
            
            <div className="w-1/4 p-3 bg-white/85] shadow-box text-center rounded-md cursor-pointer">
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Real-time Tracking</h3>
              <p className="leading-7 [&:not(:first-child)]:mt-6">Stay informed with live updates on your waste collection status, directly through our mobile app.</p>
            </div>

            <div className="w-1/4 p-3 bg-white/85] shadow-box text-center rounded-md cursor-pointer">
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Digital Payments</h3>
              <p className="leading-7 [&:not(:first-child)]:mt-6">Secure, hassle-free payment options that make managing your services straightforward and convenient.</p>
            </div>

            <div className="w-1/4 p-3 bg-white/85] shadow-box text-center rounded-md cursor-pointer">
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Sustainable Practices</h3>
              <p className="leading-7 [&:not(:first-child)]:mt-6">Committed to sustainability, we promote recycling and responsible waste management solutions.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white/50 py-10">
        <div className="container mx-auto">
        <h2 className="text-5xl text-black  text-center mb-6 scroll-m-20  font-semibold tracking-tight">Why Choose EcoLink Solutions?</h2>
        <div className="flex p-4 gap-4">
        <div className="flex flex-col gap-2 w-1/4">
            <Avatar className="hidden h-9 w-9 sm:flex">
                  <AvatarImage src="/avatars/02.png" alt="Avatar" />
                  <AvatarFallback>1</AvatarFallback>
            </Avatar>
            <h1 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">Innovation</h1>
            <p>Leading the way with cutting-edge technology to improve waste management efficiency.</p>
        </div>

        <div className="flex flex-col gap-2 w-1/4">
            <Avatar className="hidden h-9 w-9 sm:flex">
                  <AvatarImage src="/avatars/02.png" alt="Avatar" />
                  <AvatarFallback>2</AvatarFallback>
            </Avatar>
            <h1 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">Reliability</h1>
            <p>Dependable service you can count on, with structured schedules that prioritize your convenience.</p>
        </div>

        <div className="flex flex-col gap-2 w-1/4">
            <Avatar className="hidden h-9 w-9 sm:flex">
                  <AvatarImage src="/avatars/02.png" alt="Avatar" />
                  <AvatarFallback>3</AvatarFallback>
            </Avatar>
            <h1 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">Eco-Friendly</h1>
            <p>Dedicated to reducing environmental impact through proactive recycling and sustainable practices.</p>
        </div>

        <div className="flex flex-col gap-2 w-1/4">
            <Avatar className="hidden h-9 w-9 sm:flex">
                  <AvatarImage src="/avatars/02.png" alt="Avatar" />
                  <AvatarFallback>4</AvatarFallback>
            </Avatar>
            <h1 className="scroll-m-16 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">Exceptional Support</h1>
            <p>Our customer support team is ready to assist you with any questions or to help tailor your services.</p>
        </div>
        </div>
        </div>
      </section>
    
      <section className="p-3">
        <div className="container mx-auto">
        <h2 className="text-5xl text-black  text-center mb-6 scroll-m-20  font-semibold tracking-tight">Hear From Our Customers</h2>
          <div className="flex justify-center  p-2 gap-4">
        
            <div className="w-1/3 shadow-2xl p-4 rounded-sm">
              <p className="leading-7 text-sm [&:not(:first-child)]:mt-6">EcoLink&apos;s platform has been instrumental in helping us achieve our corporate sustainability goals. Their digital payment system and detailed tracking have streamlined our operations significantly.</p>
              <div className="flex gap-x-3 p-3">
              <Avatar className="hidden h-9 w-9 sm:flex">
                    <AvatarImage src="/avatars/02.png" alt="Avatar" />
                    <AvatarFallback>NA</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
              <h1 className="scroll-m-20 text-xl font-semibold tracking-tight">Nasra Ali</h1>
              <p className="leading-4 text-sm [&:not(:first-child)]:mt-0">Corporate Sustainability Officer</p>
              </div>
              </div>
            </div>

            <div className="w-1/3 shadow-2xl p-4 rounded-sm">
              <p className="leading-7 text-sm [&:not(:first-child)]:mt-6">EcoLink has made recycling and waste management at home so much easier. I love the real-time tracking feature—it&apos;s reassuring to know exactly when our recyclables are being picked up.</p>
              <div className="flex gap-x-3 p-3">
              <Avatar className="hidden h-9 w-9 sm:flex">
                    <AvatarImage src="/avatars/02.png" alt="Avatar" />
                    <AvatarFallback>FX</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
              <h1 className="scroll-m-20 text-xl font-semibold tracking-tight">Fatima Xassan</h1>
              <p className="leading-4 text-sm [&:not(:first-child)]:mt-0">Homeowner</p>
              </div>
              </div>
            </div>

            <div className="w-1/3 shadow-2xl p-4 rounded-sm">
              <p className="leading-7 text-sm [&:not(:first-child)]:mt-6">EcoLink&apos;s platform has been instrumental in helping us achieve our corporate sustainability goals. Their digital payment system and detailed tracking have streamlined our operations significantly.</p>
              <div className="flex gap-x-3 p-3">
              <Avatar className="hidden h-9 w-9 sm:flex">
                    <AvatarImage src="/avatars/02.png" alt="Avatar" />
                    <AvatarFallback>NA</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
              <h1 className="scroll-m-20 text-xl font-semibold tracking-tight">Nasra Ali</h1>
              <p className="leading-4 text-sm [&:not(:first-child)]:mt-0">Corporate Sustainability Officer</p>
              </div>
              </div>
            </div>

            
        
          </div>
        </div>
      </section>
      
      <section className="p-3">
        <div className="container mx-auto max-w-5xl">
        <h2 className="text-5xl text-black  text-center mb-6 scroll-m-20  font-semibold tracking-tight">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>What is waste management?</AccordionTrigger>
        <AccordionContent>
        Waste management refers to the process of treating solid wastes and offers variety of solutions for recycling items that don&apos;t belong to trash.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>How can I reduce my waste?</AccordionTrigger>
        <AccordionContent>
        You can reduce your waste by ensuring you use products that are environmentally friendly and by recycling or composting items instead of disposing of them.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>What materials can I recycle?</AccordionTrigger>
        <AccordionContent>
        Commonly recycled materials include paper, cardboard, plastic containers, glass bottles, and metal cans.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    </div>
      </section>
    </>
  )
}

export default Home
