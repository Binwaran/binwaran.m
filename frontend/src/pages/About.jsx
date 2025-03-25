import React from "react";
import { FaBriefcase, FaMapMarkerAlt, FaLaptopCode, FaEnvelope, FaQuoteLeft } from "react-icons/fa"; // 👉 แก้ตรงนี้ เอา FaQuoteLeft มาแทน

export default function About() {
  return (
    <section className="bg-white py-16 px-4 md:px-12 text-center">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto">
        <img
          src="/nofffiepic.png"
          alt="Nofffie pic"
          className="w-40 h-40 object-cover rounded-full mx-auto shadow-lg"
        />
        <h1 className="text-4xl font-bold mt-4">Nofffie</h1>
        <p className="text-sm text-gray-500 mt-1">Frontend Developer / Trader / Financial Advisor</p>
        <p className="text-sm text-gray-500">Building tech with a purpose and financial freedom in mind</p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-6">
          <a
            href="#"
            className="px-5 py-2 border border-gray-400 rounded-full text-sm hover:bg-gray-100"
          >
            Download CV
          </a>
          <a
            href="/contact"
            className="px-5 py-2 border border-gray-800 bg-gray-800 text-white rounded-full text-sm hover:bg-gray-700"
          >
            Contact
          </a>
        </div>
      </div>

      {/* What I Do */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-16 text-left">
        <div>
          <h2 className="text-lg font-semibold mb-3">Design & Code</h2>
          <p className="text-sm text-gray-600">
            Build and design interactive and beautiful frontend interfaces using React, TailwindCSS and emerging tools. Passionate about animation and UI effects that bring emotion.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-3">Financial Planning</h2>
          <p className="text-sm text-gray-600">
            Help others achieve financial clarity. From personal budgeting, investment-linked insurance, to long-term wealth creation.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-3">Trading</h2>
          <p className="text-sm text-gray-600">
            Day-trade with discipline, strategy and structure. Analyze technical trends and develop algorithmic support tools.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-3">Community Impact</h2>
          <p className="text-sm text-gray-600">
            Create tools and content for Thai people in Singapore to access insurance, financial literacy and tech resources easier.
          </p>
        </div>
      </div>

      {/* Quote */}
      <div className="bg-gray-100 max-w-3xl mx-auto mt-16 p-6 rounded-md text-gray-600 italic flex items-start gap-3">
        <FaQuoteLeft className="text-xl text-gray-400 mt-1" />
        "I’m not just building a career, I’m building freedom, tools for people, and a future for my family."
      </div>

      {/* Stats */}
      <div className="flex flex-wrap justify-center gap-6 mt-12">
        <div className="bg-[#F4F4F4] px-6 py-4 rounded shadow text-center w-40">
          <p className="font-bold text-xl text-gray-800">5+</p>
          <p className="text-sm text-gray-500">Projects Running</p>
        </div>
        <div className="bg-[#F4F4F4] px-6 py-4 rounded shadow text-center w-40">
          <p className="font-bold text-xl text-gray-800">3 Roles</p>
          <p className="text-sm text-gray-500">Developer / Trader / Advisor</p>
        </div>
        <div className="bg-[#F4F4F4] px-6 py-4 rounded shadow text-center w-40">
          <p className="font-bold text-xl text-gray-800">10 Yrs</p>
          <p className="text-sm text-gray-500">Entrepreneurship</p>
        </div>
      </div>
    </section>
  );
}
