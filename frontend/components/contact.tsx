"use client";

import { useState, ChangeEvent, FormEvent } from "react";
// import Navbar from './navbar';
import Footer from "./footer";
import Image from "next/image";
import Navbar from "./navbar";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

    alert("Message sent successfully!");
  };

  return (
   
      <div className=" max-w-[1920px] lg:overflow-x-auto mx-auto px-4 sm:px-6 lg:px-8 pb-16 bg-[#ECE3DA]">

        {/* Header */}
        {/* <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 md:mb-8">

          <div className="flex items-center mb-4 sm:mb-0">
            <div className="bg-black p-2 rounded-md mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <span className="font-bold text-lg">StudentAdda</span>
          </div>
          <button className="bg-black text-white rounded-full px-5 py-3 text-sm font-semibold">
            Contact Us
          </button>
        </div> */}

      {/* Main Content with Hero and Social Media Icons */}
      <div className="flex flex-col md:flex-row justify-between mb-12 px-12">
        {/* Hero Text */}
        <div className="w-full md:w-3/4 mb-8 md:mb-0">
          <div className="text-sm mb-2 md:text-lg">Get Started</div>
          <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-4">
            Get in touch with us. <br className="hidden sm:block" />
            We are here to assist <br className="hidden sm:block" />
            you.
          </h1>
        </div>

        {/* Social Media Icons */}
        <div className="flex md:flex-col md:items-center space-x-4 md:space-x-0 md:space-y-4">
          {/* Facebook Icon */}
          <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 border-2 border-[#B7B7B7] rounded-full overflow-hidden flex-shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              className="w-6 h-6 md:w-8 md:h-8"
              fill="currentColor"
            >
              <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
            </svg>
          </div>

          {/* Instagram */}
          <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 border-2 border-[#B7B7B7] rounded-full overflow-hidden flex-shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="w-6 h-6 md:w-8 md:h-8"
              fill="currentColor"
            >
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
            </svg>
          </div>

          {/* twitter */}
          <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 border-2 border-[#B7B7B7] rounded-full overflow-hidden flex-shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-6 h-6 md:w-8 md:h-8"
              fill="currentColor"
            >
              <path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="w-full lg:w-5/6">
        <form onSubmit={handleSubmit} className="mb-12">
          {/* Name, Email, and Phone - Responsive layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <div className="w-full">
              <label htmlFor="name" className="block text-sm mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-gray-400 pb-2 focus:outline-none focus:border-black"
                required
              />
            </div>

            <div className="w-full">
              <label htmlFor="email" className="block text-sm mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-gray-400 pb-2 focus:outline-none focus:border-black"
                required
              />
            </div>

            <div className="w-full">
              <label htmlFor="phone" className="block text-sm mb-1">
                Phone Number (optional)
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-gray-400 pb-2 focus:outline-none focus:border-black"
              />
            </div>
          </div>

          {/* Message input on a new line */}
          <div className="mb-8">
            <label htmlFor="message" className="block text-sm mb-1">
              Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-gray-400 pb-2 h-20 focus:outline-none focus:border-black resize-none"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-black text-white rounded-full px-6 py-3 flex items-center text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            Leave us a Message
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </form>
      </div>

      {/* Contact Info - Responsive layout */}
      <div className="flex flex-col lg:flex-row lg:justify-between">
        <div className="mb-10 lg:mb-0 lg:w-1/2">
          <h2 className="text-lg font-normal mb-3">Contact Info</h2>
          <p className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            We are always happy
            <br className="hidden sm:block" /> to assist you
          </p>
        </div>

        {/* Contact details - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:w-1/2">
          {/* Email Section */}
          <div className="mb-6">
            <div className="text-sm font-extrabold mb-2">Email Address</div>
            <div className="h-1 w-16 bg-black mb-3"></div>
            <div className="text-sm font-bold text-gray-800 mb-4">
              help@info.com
            </div>
            <div className="text-xs text-gray-600">
              Assistance hours:
              <br />
              Monday - Friday 9 am to
              <br />8 pm EST
            </div>
          </div>

          {/* Phone Section */}
          <div className="mb-6">
            <div className="text-sm font-extrabold mb-2">Number</div>
            <div className="h-1 w-16 bg-black mb-3"></div>
            <div className="text-sm font-bold text-gray-800 mb-4">
              (808) 098-34256
            </div>
            <div className="text-xs text-gray-600">
              Assistance hours:
              <br />
              Monday - Friday 9 am to
              <br />8 pm EST
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
