import React from "react";
import services from "@/assets/services";

const Service = () => {
  return (
    <>
      {/* {services.map((service, index) => (
        // <div key={index} className="flex flex-col bg-[#FFF] gap-[16px] p-[34px] rounded-xl cursor-pointer transition-all duration-300 ease-out hover:bg-[#174db26e] hover:transition-all hover:duration-300 hover:ease-out hover:scale-110 hover:[transform:translateZ(0)">
        //   <div className="">
        //     <img src={service.image} alt="service-icon" />
        //   </div>

        //   <div>
        //     <h5 className="text-[22px] font-semibold">{service.name}</h5>
        //   </div>

        //   <div>
        //     <p className="text-[16px] w-[15vw] text-[#5C5C5C]">{service.body}</p>
        //   </div>
        // </div>
      ))} */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-10">
  {services.map((service, index) => (
    <div
      key={index}
      className="flex flex-col bg-white gap-4 p-6 rounded-xl cursor-pointer 
                 transition-all duration-300 ease-out 
                 hover:bg-[#174db26e] hover:scale-110 hover:[transform:translateZ(0)]"
    >
      <div>
        <img src={service.image} alt="service-icon" className="w-12 h-12" />
      </div>

      <div>
        <h5 className="text-lg md:text-xl font-semibold">{service.name}</h5>
      </div>

      <div>
        <p className="text-sm md:text-base text-[#5C5C5C]">
          {service.body}
        </p>
      </div>
    </div>
  ))}
</div>

    </>
  );
};

export default Service;
