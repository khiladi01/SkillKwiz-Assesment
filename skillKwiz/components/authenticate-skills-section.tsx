"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function AuthenticateSkillsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Optional: stop observing after animation triggers once
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left side stacked images */}
          <div className="relative w-full md:w-1/3 h-[400px] md:h-[500px]">
            <div
              className={`absolute top-0 left-0 w-[80%] h-[80%] transform transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-x-0 translate-y-0 -rotate-12 hover:-rotate-6"
                  : "opacity-0 -translate-x-20 -translate-y-10 -rotate-12"
              }`}
              style={{ transitionDelay: isVisible ? "0.2s" : "0s" }}
            >
              <Image
                src="/images/homepage/skills_1.png"
                alt="Professional working at night"
                width={350}
                height={500}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
            <div
              className={`absolute bottom-0 left-[10%] w-[80%] h-[80%] transform transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-x-0 translate-y-0 -rotate-6 hover:rotate-0"
                  : "opacity-0 -translate-x-20 translate-y-10 -rotate-6"
              }`}
              style={{ transitionDelay: isVisible ? "0.4s" : "0s" }}
            >
              <Image
                src="/images/homepage/skills_2.png"
                alt="Professional in tech environment"
                width={350}
                height={500}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Center content */}
          <div
            className={`w-full md:w-1/3 text-center my-8 md:my-0 z-20 transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-10 scale-95"
            }`}
            style={{ transitionDelay: isVisible ? "0.6s" : "0s" }}
          >
            <h2 className="text-3xl font-bold text-[#00418d] mb-4">
              Authenticate Skills,
              <br />
              Simplify Hiring
            </h2>
            <p className="text-gray-700">
              SkillKwiz ensures professionals are evaluated accurately in their
              chosen fields. Our secure testing centers provide authenticated
              skill assessments, giving you instant access to verified
              reports—eliminating the need for lengthy technical interviews.
            </p>
          </div>

          {/* Right side stacked images */}
          <div className="relative w-full md:w-1/3 h-[400px] md:h-[500px]">
            <div
              className={`absolute top-0 right-0 w-[80%] h-[80%] transform transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-x-0 translate-y-0 rotate-9 hover:rotate-6"
                  : "opacity-0 translate-x-20 -translate-y-10 rotate-9"
              }`}
              style={{ transitionDelay: isVisible ? "0.8s" : "0s" }}
            >
              <Image
                src="/images/homepage/skills_3.png"
                alt="Professional at workstation"
                width={350}
                height={500}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
            <div
              className={`absolute bottom-0 right-[10%] w-[80%] h-[80%] transform transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-x-0 translate-y-0 rotate-6 hover:rotate-0"
                  : "opacity-0 translate-x-20 translate-y-10 rotate-6"
              }`}
              style={{ transitionDelay: isVisible ? "1s" : "0s" }}
            >
              <Image
                src="/images/homepage/skills_4.png"
                alt="Business professional looking at digital interface"
                width={350}
                height={500}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}