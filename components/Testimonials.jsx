import React from "react";
import { Card, CardContent } from "./ui/card";
import { testimonials } from "@/lib/data";
import { Star } from "lucide-react";

const StarRating = ({ rating }) => {
  return (
    <div className="flex gap-1 mb-2">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          size={16}
          className={`${
            index < rating 
              ? "fill-[#FFD700] text-[#FFD700]" 
              : "fill-gray-200 text-gray-200"
          }`}
        />
      ))}
    </div>
  );
};

const Testimonials = () => {
    return(
        <section className = "py-10 bg-muted/30">
            <div className=" bg-[rgba(62,161,255,0.04)] p-10">
                <div className = "container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
                        <p className="text-center font-semibold text-gray-500 mb-[25px]">Hear from our satisfied users who have experienced the convenience of Care-Connect</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => {
                            return(
                                <Card key={index} className="border-[#BBDCE5] hover:border-emerald-800/40 transition-all duration-300">
                                    <CardContent className="pt-4">
                                        <div className="flex items-center mb-4">
                                            <div className="w-12 h-12 rounded-full bg-emerald-900/20 flex items-center justify-center mr-4">
                                                <span className="text-[#1560bd] font-bold">{testimonial.initials}</span>
                                            </div>
                                            <div>
                                                <h4 className="text-gray-500 font-semibold">{testimonial.name}</h4>
                                                <p className="text-gray-500">{testimonial.role}</p>
                                            </div>
                                        </div>
                                        <div className="ml-1">
                                            <StarRating rating={testimonial.rating} />
                                        </div>
                                        <p className="text-muted-foreground">
                                            &quot;{testimonial.quote}&quot;
                                        </p>
                                    </CardContent>
                                </Card>
                            )
                        })}
                    
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials;