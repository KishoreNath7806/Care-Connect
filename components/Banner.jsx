// import React from "react";
// import { Button } from "./ui/button";

// const Banner = () => {
//     return(
//         <>
//             <div className="bg-[rgba(62,161,255,0.04)] flex p-[50px]">
//                 <div className="py-0 px-[77px] flex flex-col justify-center gap-8px w-full">
//                     <div className="text-[52px]">
//                         <h2>Every good things start with good health</h2>
//                     </div>

//                     <div className="text-[18px] text-[#5C5C5C] font-[500]">
//                         <p>We are here to serve people with patient centered-care to deliver outstanding healthcare for better lives</p>
//                     </div>

//                     <div className="flex gap-[28px] mt-[20px] mr-[0px] mb-[0px] ml-[10px]">
//                         <Button className='bg-[#1560bd] text-[#ffff] py-[20px] px-[40px] cursor-pointer hover:bg-[#0047AB]'>Get Started</Button>
//                         <Button className='bg-[#1560bd] text-[#ffff] py-[20px] px-[40px] cursor-pointer hover:bg-[#0047AB]'>Find Doctors</Button>
//                     </div>

//                 </div>

//                 <div className="relative w-full">
//                     <img src="/images/ellipse.png" alt="ellipse" width="500px"/>
//                     <img src="/DoctorsImage.png" alt="doctor" width='450px' className="absolute top-0 z-10 left-[45px]"/>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Banner;

import React from "react";
import { Button } from "./ui/button";
import { ArrowRight, Stethoscope} from "lucide-react";
import Link from "next/link";

const Banner = () => {
  return (
    <>
      <div className="bg-[rgba(62,161,255,0.04)] flex flex-col md:flex-row p-6 md:p-12 lg:p-18">
        
        {/* Left Side */}
        <div className="px-4 md:px-12 flex flex-col justify-center gap-6 w-full text-center md:text-left order-2 md:order-1">
          
          {/* Heading */}
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            <h2>Every good thing starts with good health</h2>
          </div>

          {/* Description */}
          <div className="text-sm sm:text-base md:text-lg text-[#5C5C5C] font-medium">
            <p>
              We are here to serve people with patient-centered care to deliver
              outstanding healthcare for better lives.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4 sm:mt-6 justify-center md:justify-start">

            <Button className="bg-[#1560bd] text-white py-3 px-6 sm:py-4 sm:px-8 cursor-pointer hover:bg-[#0047AB]">
              <Link href={"/onboarding"} className="flex items-center gap-2">
                <span>Get Started</span>
                <ArrowRight className="ml-2 h-2 w-2"/>
              </Link>
            </Button>

            <Button className="bg-[#1560bd] text-white py-3 px-6 sm:py-4 sm:px-8 cursor-pointer hover:bg-[#0047AB]">
              <Link href={"/onboarding"} className="flex items-center">
                <span>Find Doctors</span>
                <Stethoscope className="ml-2 h-3 w-3"/>
              </Link>            
            </Button>
          </div>
        </div>

        {/* Right Side (Images) */}
        <div className="relative w-full flex justify-center mt-8 md:mt-0 order-1 md:order-2">
          <img
            src="/images/ellipse.png"
            alt="ellipse"
            className="w-48 sm:w-64 md:w-80 lg:w-[500px]"
          />
          <img
            src="/DoctorsImage.png"
            alt="doctor"
            className="absolute top-0 left-1/2 -translate-x-1/2 w-40 sm:w-56 md:w-72 lg:w-[450px] z-10"
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
