import React from 'react'
import { NavIcon } from "./logo";

export default function Navbar() {
    return (
        <div className=''>
            <div className="navbar absolute z-10 shadow-2xl backdrop-blur-sm bg-white/20 max-w[1440px] min-w-full md:h-[100px]">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-black font-medium">
                            <li><a className='hover:border hover:border-purple-600 hover:bg-purple-50 hover:text-purple-600  duration-300 '>Home</a></li>
                            <li><a className='hover:border hover:border-purple-600 hover:bg-purple-50 hover:text-purple-600  duration-300 '>Browse Properties</a></li>
                            <li><a className='hover:border hover:border-purple-600 hover:bg-purple-50 hover:text-purple-600  duration-300 '>About Us</a></li>
                            <li><a className='hover:border hover:border-purple-600 hover:bg-purple-50 hover:text-purple-600  duration-300 '>Rental Guides</a></li>
                            <li><a className='hover:border hover:border-purple-600 hover:bg-purple-50 hover:text-purple-600  duration-300 '>Contact Us</a></li>
                        </ul>
                    </div>
                    {/* logo */}
                   
                    <a
                        href="#"
                        className="md:ml-20"
                    >
                        <NavIcon />
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1 lg:gap-10 text-black font-medium">
                        <li><a className='hover:border hover:border-purple-600 hover:bg-purple-50 hover:text-purple-600  duration-300 rounded-xs'>Home</a></li>
                        <li><a className='hover:border hover:border-purple-600 hover:bg-purple-50 hover:text-purple-600  duration-300 rounded-xs'>Browse Properties</a></li>
                        <li><a className='hover:border hover:border-purple-600 hover:bg-purple-50 hover:text-purple-600  duration-300 rounded-xs'>About Us</a></li>
                        <li><a className='hover:border hover:border-purple-600 hover:bg-purple-50 hover:text-purple-600  duration-300 rounded-xs'>Rental Guides</a></li>
                        <li><a className='hover:border hover:border-purple-600 hover:bg-purple-50 hover:text-purple-600  duration-300 rounded-xs'>Contact Us</a></li>
                    </ul>
                </div>
                <div className="navbar-end mr-5 md:mr-20">
                    <a className="btn border-none bg-purple-600 text-white font-medium px-[24px] py-[9px] rounded-xs transition-all duration-300 ease-in-out hover:bg-purple-700 hover:scale-105 shadow-md hover:shadow-lg">Sign In</a>
                </div>
            </div>
        </div>
    )
}
