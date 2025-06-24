import React from 'react'

export default function Hero() {
    return (
        <div>
            <div
                className="hero  min-h-140 md:h-[753px] top-0 left-0 pl-0 ] "
                style={{
                    backgroundImage:
                        "url(/images/hero.jpg)",
                }}
            >
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className=" text-white max-w-[1200px] min-h-[259px] ">
                        <h1 className="text-5xl font-semibold md:text-[88px] leading-[0.9] mb-[28px]">Rent A Home in Singapore</h1>
                        <p className="md:text-[24px] mb-[28px]">
                           Seamless Property Search, Inquiry & Agent Connection—All in One Place.Browse listings, submit rental inquiries instantly, and connect with trusted agents—no login required.
                        </p>
                        <button className="btn border-none bg-purple-600 text-white font-medium px-[28px] py-[13px] rounded-xs transition-all duration-300 ease-in-out hover:bg-purple-700 hover:scale-105 shadow-md hover:shadow-lg">Start Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
