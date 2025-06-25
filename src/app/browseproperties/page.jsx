"use client";
import React from 'react'
import LoadingSpinner from "@/app/components/LoadingSpinner";
import { filters, browseProperties } from "@/app/fakeData/Data";
import { useEffect, useState } from "react";
import { FaSearch, FaThLarge, FaBars } from "react-icons/fa";
import { Area, Baths, Beds } from "@/app/components/logo";

export default function page() {
    const [viewMode, setViewMode] = useState("grid");
    const allProperties = [...browseProperties];
    const [searchTerm, setSearchTerm] = useState("");
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowContent(true);
        }, 700); 
        return () => clearTimeout(timer);
    }, []);

    if (!showContent) {
        return <LoadingSpinner />; 
    }

    const toggleView = () => {
        setViewMode((prev) => (prev === "grid" ? "list" : "grid"));
    };
    const filteredProperties = allProperties.filter(
        (property) =>
            property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            property.location.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="pt-40 pb-10 lg:px-[120px] max-w-full mx-auto px-4 grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-6 bg-white ">
            {/* Sidebar Filters */}
            <aside className="space-y-4">
                {filters.map(({ label, items }, index) => (
                    <div key={label} className="bg-white p-4 rounded shadow text-black border border-gray-300">
                        <details open={index === 0} className="group">
                            <summary className="font-semibold cursor-pointer flex justify-between items-center list-none">
                                {label}
                                <span className="transition-transform duration-200 group-open:rotate-180">
                                    ▼
                                </span>
                            </summary>

                            <div className="mt-2 space-y-2">
                                {items.map((item) => (
                                    <label key={item} className="flex items-center gap-2">
                                        <input type="checkbox" className="accent-purple-600" />
                                        {item}
                                    </label>
                                ))}
                            </div>
                        </details>
                    </div>
                ))}
            </aside>

            
            <section>
                {/* Search & View Toggle */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
                    <div className="w-full flex items-center gap-2 bg-white px-4 py-2 rounded shadow border border-gray-600">
                        <FaSearch className="text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search your perfect event"
                            className="w-full outline-none text-black "
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <button
                        onClick={toggleView}
                        className="bg-white p-3 rounded shadow hover:bg-gray-100 border border-gray-600"
                        title={`Switch to ${viewMode === "grid" ? "list" : "grid"} view`}
                    >
                        {viewMode === "grid" ? (
                            <FaBars className="text-gray-500" />
                        ) : (
                            <FaThLarge className="text-gray-500" />
                        )}
                    </button>
                </div>

                {/* Cards */}
                <div
                    className={`grid gap-6 ${viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1"
                        }`}
                >
                    {filteredProperties.map((property) => (
                        <div
                            key={property.id}
                            className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-purple-300 ${viewMode === "list" ? "flex gap-4" : ""
                                }`}
                        >
                            <img
                                src={property.image}
                                alt="property"
                                className={`${viewMode === "list"
                                        ? "w-48 h-auto object-cover"
                                        : "w-full h-56 object-cover"
                                    }`}
                            />
                            <div className="p-4 space-y-2 flex-1">
                                <div className="text-[20px] font-medium text-gray-900">{property.price}</div>
                                <div className="text-[24px] font-medium text-gray-900 mb-1">
                                    {property.title}
                                </div>
                                <div className="text-gray-600 text-xs">{property.location}</div>
                                <hr className='mt-6 border-t-1 border-gray-300' />
                                
                                <div className="mt-4 flex justify-between text-sm text-gray-600 mb-4 items-center">
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
                                <button className="mt-3 w-full bg-purple-600 text-white text-[16px] py-2 rounded hover:bg-purple-700 transition-colors">
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}
