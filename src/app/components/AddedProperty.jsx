import { addedProperties } from "@/app/fakeData/Data";
import Image from "next/image";
import React from "react";
import { Area, Baths, Beds } from "./logo";
export default function AddedProperty() {
  return (
    <div className="md:px-[120px] bg-white pt-[120px]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center mb-[40px]">
              <h2 className="text-3xl font-medium text-gray-900 border-l-purple-600 border-l-6 pl-4">
                Recently Added Property
              </h2>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
              >
                View More →
              </a>
            </div>
    
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {addedProperties.map((property) => {
                return (
                  <div
                    key={property.id}
                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-purple-300"
                  >
                    {/* Image*/}
                    <div className="h-48 bg-gray-200 relative">
                      <Image
                        src={property.image}
                        width={380}
                        height={254}
                        alt="Property Image"
                        className="w-full h-full object-cover"
                      />
                    </div>
    
                    {/* Card  */}
                    <div className="p-6 flex flex-col gap-4 bg-white rounded-lg shadow-md min-h-[300px]">
                      {/* Top */}
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-[20px] font-medium text-gray-900">
                            {property.price}
                          </span>
                        </div>
                        <h3 className="text-[24px] font-medium text-gray-900 mb-1">
                          {property.title}
                        </h3>
                        <p className="text-gray-600 text-xs">{property.location}</p>
                      </div>
    
                      {/* Bottom */}
                      <div className="mt-auto">
                        <div className="flex justify-between text-sm text-gray-600 mb-4 items-center">
                          <span className="flex items-center ">
                            <Beds className="w-6 h-6 inline-block" />{" "}
                            {property.beds} Beds
                          </span>
                          <span className="flex items-center ">
                            <Baths className="w-6 h-6 inline-block" />{" "}
                            {property.baths} Baths
                          </span>
                          <span className="flex items-center ">
                            <Area className="w-6 h-6 inline-block" />{" "}
                            {property.sqft}
                          </span>
                        </div>
                        {/* Button */}
                        <button className="w-full bg-purple-600 text-white text-[16px] py-2 rounded hover:bg-purple-700 transition-colors">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
  )
}
