import React from "react";
import Service from '../components/Service'

const Services = () => {
    return(
        <>
            <div className="bg-[rgba(62,161,255,0.04)] p-5">
                <h2 className="text-center text-[32px] font-bold mb-4">How It Works</h2>
                <p className="text-center font-semibold text-gray-500 mb-[30px]">Our platform makes healthcare accessible with just a few clicks</p>
                
                <div className="flex gap-[42px] justify-center flex-wrap">
                    <Service />
                </div>
            </div>
        </>
    )
}

export default Services;