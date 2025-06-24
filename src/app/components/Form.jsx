"use client";
import React from "react";
import { useState } from "react";
import { Enquire } from "./logo";

//Input Component
const Input = ({ label, placeholder, type = "text" }) => (
  <div className="flex flex-col text-sm">
    <label className="mb-1 font-medium">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      className="border border-gray-400 rounded px-3 py-2 outline-none "
    />
  </div>
);

//Select Component
const Select = ({ label, options }) => (
  <div className="flex flex-col text-sm w-full">
    <label className="mb-1 font-medium">{label}</label>
    <select className="border border-gray-400 rounded px-3 py-2 outline-none ">
      {options.map((option, i) => (
        <option key={i} value={option === "Select One" ? "" : option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

//Textarea Component
const Textarea = ({ label, placeholder }) => (
  <div className="flex flex-col text-sm">
    <label className="mb-1 font-medium">{label}</label>
    <textarea
      rows={3}
      placeholder={placeholder}
      className="border border-gray-400 rounded px-3 py-2 outline-none "
    ></textarea>
  </div>
);

export default function Form() {
    const [activeTab, setActiveTab] = useState("tenant");
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-6 lg:gap-8 px-4  lg:px-[120px] py-[90px]  bg-white">
      {/* Tenant Form */}
      <div className="bg-purple-100 rounded-xl p-[20px] md:w-[46%] lg:w-[46%]">
        <h2 className="text-[76px] font-semibold text-center text-black leading-[0.9]">
          Are You a <span className="text-purple-600">Tenant?</span>
        </h2>
        <p className="text-sm text-center mt-2 mb-6 text-slate-600">
          Receive personalised service through the enquiry form as agents
          shortlist homes suitable just for you!
        </p>
        <form className="space-y-3 text-black ">
          <Input label="Full Name" placeholder="Enter your full name" />
          <Input label="Email Address" placeholder="Enter your email address" />
          <Input label="Phone Number" placeholder="Enter your Phone Number" />
          <div className="flex flex-col md:flex-row gap-2">
            <div className="flex-1">
              <Select
                label="Property Rental Type:"
                options={["Select One", "Single-Family Home", "Apartment", "Condo", "Townhouse", "Duplex"]}
              />
            </div>
            <div className="flex-1">
              <Input
                label="Move-in Date (Optional)"
                placeholder="Enter your Move-in Date"
                type="date"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-2">
            <div className="flex-1">
              <Select
                label="Number of Bedrooms"
                options={["Select One", "1", "2", "3", "4", "4+"]}
              />
            </div>
            <div className="flex-1">
              <Input
                label="Budget Range"
                placeholder="Enter your Budget Range"
              />
            </div>
          </div>
          <Textarea
            label="Additional Comments/Preferences"
            placeholder="Please share any additional details or preferences"
          />
          <button
            type="submit"
            className="px-[32px] py-[13px] bg-purple-600 text-white font-medium text-[16px] rounded-full flex gap-2 justify-center hover:bg-purple-700 transition mb-[20px]"
          >
            <span>
              <Enquire />
            </span>{" "}
            Enquire Now
          </button>
        </form>
      </div>

      {/* Landlord Form */}
      <div className="bg-purple-100 rounded-xl p-[20px] md:w-[46%] lg:w-[46%]">
        <h2 className="text-[76px] font-semibold text-center text-black leading-[0.9]">
          Are You a <span className="text-purple-600">Landlord ?</span>
        </h2>
        <p className="text-sm text-center mt-2 mb-2 text-slate-600">
          List with us - Get faster closures, better value, and top-quality renters with our exclusive access of tenants database in Singapore.
        </p>
        <form className="space-y-3 text-black ">
          <Input label="Full Name" placeholder="Enter your full name" />
          <Input label="Email Address" placeholder="Enter your email address" />
          <Input label="Phone Number" placeholder="Enter your Phone Number" />
          <Select
            label="Property Rental Type:"
            options={["Select One", "Single-Family Home", "Apartment", "Condo", "Townhouse", "Duplex"]}
          />
          <Input
            label="Available Date"
            placeholder="Enter your Move-in Date"
            type="date"
          />
          {/* </div> */}
          <Textarea
            label="Additional Comments/Preferences"
            placeholder="Please share any additional details or preferences"
          />
          <button
            type="submit"
            className="px-[32px] py-[13px] bg-purple-600 text-white font-medium text-[16px] rounded-full flex gap-2 justify-center hover:bg-purple-700 transition mb-[20px]"
          >
            <span>
              <Enquire />
            </span>{" "}
            Enquire Now
          </button>
        </form>
      </div>
    </div>
  )
}
