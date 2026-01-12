"use client";
import Link from "next/link";
import { useRef } from "react";
import AuthenticateSkillsSection from "@/components/authenticate-skills-section";
import WhyChooseSection from "@/components/why-choose-section";
import LoginSection from "@/components/login-section";
import TestimonialsSection from "@/components/testimonials-section";
import LetterCarousel from "@/components/letter-carousel";

export default function HomePage() {
  const heroRef = useRef<HTMLElement>(null);

  return (
    <div className="min-h-screen bg-white">
      <div className="relative">
        <section
          ref={heroRef}
          className="relative w-full h-[85vh] pt-28 text-white overflow-hidden"
        >
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/images/homepage/banner_video.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-gradient-to-r from-[#001a33]/90 via-[#001a33]/70 to-[#001a33]/40" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight mb-5">
                Secure, Verified <br />
                <span className="text-[#f6c648]">
                  Skill-Based Assessments
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-200 mb-8">
                Conduct assessments in controlled environments built for
                accuracy, integrity, and hiring confidence
              </p>

              <div className="flex gap-4">
                <Link
                  href="/services"
                  className="bg-[#f73e5d] text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform"
                >
                  Get Started
                </Link>
                <Link
                  href="/about"
                  className="border border-white/40 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div className="relative -mt-16 z-10">
          <div className="bg-[#f6c648] text-[#00418d] py-4 px-8 inline-block transform skew-x-12 -ml-6 shadow-lg">
            <div className="transform -skew-x-12">
              <h2 className="text-xl md:text-2xl font-bold">
                SkillKwiz – Verified Skills, Simplified Hiring
              </h2>
            </div>
          </div>

          <div className="mt-8 mb-14">
            <LetterCarousel />
          </div>
        </div>
      </div>

      <div className="bg-white relative z-10">
        <AuthenticateSkillsSection />
        <WhyChooseSection />
        <TestimonialsSection />
        <LoginSection />
      </div>
    </div>
  );
}
