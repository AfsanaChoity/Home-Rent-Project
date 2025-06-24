import { testimonials } from "@/app/fakeData/Data";
import Image from "next/image";
import React from "react";
import { Star } from "./logo";
import { GrayStar } from "./logo";

const Reviews = () => {
  return (
    <div className="py-[120px] bg-white ">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-[40px] font-bold text-center text-gray-900 mb-4">
          Our Customers Reviews
        </h2>
        <p className="text-center text-gray-400 mb-[53px] text-[16px] font-medium">
          Here are a few sample traveler reviews that you can feature on our
          website{" "}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-8 md:px-[120px]">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl shadow-2xl p-6 text-center max-w-sm mx-auto hover:scale-105 transition-all duration-300"
            >
              {/* Avatar */}
              <div className="flex justify-center mb-4">
                <div className="w-24 h-24 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.avatar}
                    alt="Reviewer"
                    width={100}
                    height={100}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              {/* Name */}
              <h3 className="text-[21px] font-semibold text-gray-900 mb-2">
                {testimonial.name}
              </h3>

              {/* Rating */}
              <div className="flex justify-center mb-3">
                <div className="flex    ">
                {Array.from({ length: testimonial.star }).map((_, idx) => (
                  <span key={idx}>
                    <Star />
                  </span>
                ))}
              </div>
              <div className="flex  ">
                {Array.from({ length: 5-testimonial.star }).map((_, idx) => (
                  <span key={idx}>
                    <GrayStar/>
                  </span>
                ))}
              </div>
              </div>

              {/* Quote */}
              <p className="text-black text-[16px] leading-[1.7] mt-4">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
