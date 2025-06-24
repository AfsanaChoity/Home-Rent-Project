import React from 'react';
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';
import { NavIcon } from "./logo";

export default function Footer() {
    return (
        <footer className="bg-slate-950 text-white  py-12 max-w-[1440px]  min-h-[426px]  ">
            <div className='h-[75px] w-[75px] bg-gradient-to-r from-slate-700 to-gray-950 rounded-full ml-auto mr-5 '>

            </div>
            <div className="flex flex-col md:flex-row justify-between gap-[35px] mx-5 md:mx-[60px] lg:w-[1200px] md:w-[1000px] min-h-[229px] pr-[60px]">
                {/* Left Section: Logo & Description */}
                <div className="">
                    <div className="flex items-center gap-2 mb-4">
                        <NavIcon></NavIcon>
                        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">EASYRENTSG</h2>
                    </div>
                    <p className="text-[16px] mb-4 leading-[24px]">
                        Sed ut perspiciatis undmnnis is <br /> iste<br />
                        natus error sit amet voluptatem<br />
                        totam rem aperiam.
                    </p>
                    <div className="flex items-center gap-2">
                        <FiPhoneCall className="text-green-400" />
                        <span className='text-[16px]'>+012 (345) 678 99</span>
                    </div>
                </div>

                {/* Middle Left: Resources */}
                <div className="">
                    <h3 className="font-semibold mb-8 text-[18px]">Resources</h3>
                    <ul className="space-y-2 text-[16px] leading-[24px]">
                        <li><a href="#" className="hover:text-cyan-400">Home</a></li>
                        <li><a href="#" className="hover:text-cyan-400">Browse Properties</a></li>
                        <li><a href="#" className="hover:text-cyan-400">About Us</a></li>
                        <li><a href="#" className="hover:text-cyan-400">Contact Us</a></li>
                        <li><a href="#" className="hover:text-cyan-400">How It Works</a></li>
                    </ul>
                </div>

                {/* Middle Right: Quick Links */}
                <div className="">
                    <h3 className="font-semibold mb-8 text-[18px]">Quick Links</h3>
                    <ul className="space-y-2 text-[16px] leading-[24px]">
                        <li><a href="#" className="hover:text-cyan-400">FAQ</a></li>
                        <li><a href="#" className="hover:text-cyan-400">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-cyan-400">Terms of Condition</a></li>
                    </ul>
                </div>

                {/* Right Section: Social Icons */}
                <div className="">
                    <h3 className="font-semibold mb-8 text-[18px]">Follow Us On</h3>
                    <div className="flex gap-4 mb-8">
                        <a href="#" className="w-8 h-8 flex items-center justify-center bg-fuchsia-600 rounded-full hover:bg-fuchsia-500 text-white">
                            <FaFacebookF />
                        </a>
                        <a href="#" className="w-8 h-8 flex items-center justify-center bg-sky-400 rounded-full hover:bg-sky-300 text-white">
                            <FaTwitter />
                        </a>
                        <a href="#" className="w-8 h-8 flex items-center justify-center bg-red-600 rounded-full hover:bg-red-500 text-white">
                            <FaYoutube />
                        </a>
                        <a href="#" className="w-8 h-8 flex items-center justify-center bg-blue-600 rounded-full hover:bg-blue-500 text-white">
                            <FaLinkedin />
                        </a>
                    </div>
                    <p className="text-[16px] text-white">&copy; 2023 Invitte.com</p>
                </div>
            </div>
        </footer>
    );
}
