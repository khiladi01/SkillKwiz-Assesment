"use client";

import React, { useState } from "react";
import { Info, Calendar, Clock } from "lucide-react";

interface ScheduleAssessmentProps {
  onSubmit?: () => void;
}

export default function ScheduleAssessment({ onSubmit }: ScheduleAssessmentProps) {
  const [selectedCompany, setSelectedCompany] = useState<string>("microsoft");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit?.(); // trigger thank-you popup in parent
  };

  return (
    <div className="text-white">
      <h1 className="text-3xl font-semibold text-center mb-2">
        Schedule Assessment
      </h1>
      <p className="text-center text-gray-200 mb-6">
        Register for your preferred skill assessment slot
      </p>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Info message */}
        <p className="text-center text-lg">
          Great!! Multiple employers have authorised you to take a skill
          assessment with SkillKwiz. Choose one. You can revisit this page to
          schedule for others.
        </p>

        {/* Company selection */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {["microsoft", "google", "amazon"].map((company) => (
            <button
              key={company}
              type="button"
              onClick={() => setSelectedCompany(company)}
              className={`flex items-center justify-center gap-2 bg-[#333333] rounded px-4 py-3 text-white hover:bg-[#444444] transition-colors ${
                selectedCompany === company ? "border-2 border-green-500" : ""
              }`}
            >
              <span
                className={`w-4 h-4 rounded-full ${
                  selectedCompany === company ? "bg-green-500" : "bg-gray-500"
                }`}
              />
              {company.charAt(0).toUpperCase() + company.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {["facebook1", "facebook2"].map((company, index) => (
            <button
              key={company}
              type="button"
              onClick={() => setSelectedCompany(company)}
              className={`flex items-center justify-center gap-2 bg-[#333333] rounded px-4 py-3 text-white hover:bg-[#444444] transition-colors ${
                selectedCompany === company ? "border-2 border-green-500" : ""
              }`}
            >
              <span
                className={`w-4 h-4 rounded-full ${
                  selectedCompany === company ? "bg-green-500" : "bg-gray-500"
                }`}
              />
              Facebook {index + 1}
            </button>
          ))}
        </div>

        {/* Info box */}
        <div className="bg-[#2d5184]/80 rounded-lg p-4 flex items-start gap-3">
          <Info className="w-6 h-6 text-white mt-1 flex-shrink-0" />
          <p>
            Microsoft has authorized you to take an assessment for C#, SQL
            Server, Web2.0, and React.
          </p>
        </div>

        {/* Form fields */}
        <div className="space-y-4">
          {/* Country */}
          <div>
            <label className="block mb-2">Select Country</label>
            <div className="relative">
              <select className="w-full bg-[#333333] rounded px-4 py-3 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-[#4ECDC4]">
                <option>India</option>
                <option>United States</option>
                <option>United Kingdom</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Zip code */}
          <div>
            <label className="block mb-2">Select Zip Code</label>
            <div className="relative">
              <select className="w-full bg-[#333333] rounded px-4 py-3 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-[#4ECDC4]">
                <option>Enter your area's Zip code</option>
                <option>110001</option>
                <option>110002</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Testing centre */}
          <div>
            <label className="block mb-2">Select Testing Centre</label>
            <div className="relative">
              <select className="w-full bg-[#333333] rounded px-4 py-3 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-[#4ECDC4]">
                <option>Enter your Centre</option>
                <option>Centre 1</option>
                <option>Centre 2</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Date & time */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Date */}
            <div>
              <label className="block mb-2">Select a Date</label>
              <div className="flex items-center bg-[#333333] rounded px-4 py-3 text-white focus-within:ring-2 focus-within:ring-[#4ECDC4]">
                <input
                  type="text"
                  placeholder="MM"
                  className="w-12 bg-transparent focus:outline-none text-center"
                />
                <span className="mx-1">|</span>
                <input
                  type="text"
                  placeholder="DD"
                  className="w-12 bg-transparent focus:outline-none text-center"
                />
                <span className="mx-1">|</span>
                <input
                  type="text"
                  placeholder="YYYY"
                  className="w-16 bg-transparent focus:outline-none text-center"
                />
                <Calendar className="ml-auto w-5 h-5" />
              </div>
            </div>

            {/* Time */}
            <div>
              <label className="block mb-2">Select Time</label>
              <div className="flex items-center bg-[#333333] rounded px-4 py-3 text-white focus-within:ring-2 focus-within:ring-[#4ECDC4]">
                <input
                  type="text"
                  placeholder="03"
                  className="w-12 bg-transparent focus:outline-none text-center"
                />
                <span className="mx-1">|</span>
                <input
                  type="text"
                  placeholder="35"
                  className="w-12 bg-transparent focus:outline-none text-center"
                />
                <span className="mx-1">|</span>
                <input
                  type="text"
                  placeholder="AM"
                  className="w-12 bg-transparent focus:outline-none text-center"
                />
                <Clock className="ml-auto w-5 h-5" />
              </div>
            </div>
          </div>
        </div>

        {/* Submit */}
        <div className="flex justify-center mt-8">
          <button
            type="submit"
            className="px-20 py-2 rounded bg-gradient-to-r from-[#4ECDC4] to-[#2d8a84] text-white hover:opacity-90 transition-all shadow-lg hover:shadow-xl"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}