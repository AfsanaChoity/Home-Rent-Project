import React from 'react'

export default function ReadyToGo() {
  return (
    <div>
      <div className="py-16 bg-gradient-to-r from-purple-300 to-white min-h[317px] w-full">
      <div className=" md:mx-20 mx-5">
        <div className="flex flex-col lg:flex-row justify-between items-center text-center md:text-left gap-[32px]">
          {/* Left Text Content */}
          <div className="">
            <h2 className="text-[38px] font-semibold text-black mb-4 leading-[1.3]">
              Ready to Grow Your Real Estate Reach?
            </h2>
            <p className="text-black text-[20px] max-w-[896px]">
              <span className='font-semibold'>Join as an Agent on EasyRenting.com.</span> Showcase your properties,
              connect with quality tenants, and grow your rental portfolio
              effortlessly.
            </p>
          </div>

          {/* Right Button */}
          <div className="">
            <button className="btn border-none bg-purple-600 text-white font-medium px-[28px] py-[13px] rounded-xs transition-all duration-300 ease-in-out hover:bg-purple-700 hover:scale-105 shadow-md hover:shadow-lg">
              Join as an Agent
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
