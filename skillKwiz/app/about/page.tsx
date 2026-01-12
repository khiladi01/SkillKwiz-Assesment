"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full text-white overflow-hidden pt-24 pb-16 bg-[#00418d]">
        {/* Background video */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-70"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/images/homepage/banner_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#00132f]/90 via-[#002b66]/70 to-[#00132f]/90 z-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid gap-10 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] items-center">
            <div className="text-center md:text-left space-y-6">
              <p className="text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-[#f6c648]">
                About SkillKwiz
              </p>
              <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                Elevate Your Business with
                <br />
                Verified Skill Intelligence
              </h1>
              <p className="text-sm md:text-base text-white/90 max-w-xl mx-auto md:mx-0">
                Skill assessments done with knowledge, integrity, trust, respect
                and security. We provide accurate insights into the skill levels
                of your current and prospective workforce.
              </p>
            </div>

            <div className="flex justify-center md:justify-end">
              <Image
                src="/images/homepage/home_globe.gif"
                alt="SkillKwiz assessment platform"
                width={520}
                height={360}
                className="w-full max-w-md h-auto drop-shadow-2xl rounded-3xl border border-white/10"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="w-full bg-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#00418d]">
              Our Vision, Mission & Purpose
            </h2>
            <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto mt-3">
              We exist to bring clarity to skills, confidence to hiring, and
              long‑term value to every stakeholder in the talent ecosystem.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Vision */}
            <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300 p-6 flex flex-col items-center text-center">
              <Image
                src="/images/aboutpage/eye.gif"
                alt="Vision"
                width={180}
                height={180}
                className="w-28 h-28 object-contain mb-4"
              />
              <h3 className="text-[#00418d] font-bold mb-2">Our Vision</h3>
              <p className="text-sm text-gray-700">
                A future where organizations grow confidently by hiring and
                developing talent based on clear, data‑driven skill insights.
              </p>
            </div>

            {/* Mission */}
            <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300 p-6 flex flex-col items-center text-center">
              <Image
                src="/images/aboutpage/mission.gif"
                alt="Mission"
                width={180}
                height={180}
                className="w-28 h-28 object-contain mb-4"
              />
              <h3 className="text-[#00418d] font-bold mb-2">Our Mission</h3>
              <p className="text-sm text-gray-700">
                To design secure, reliable assessments that reveal real
                capabilities and help align the right people with the right
                opportunities.
              </p>
            </div>

            {/* Purpose */}
            <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300 p-6 flex flex-col items-center text-center">
              <Image
                src="/images/aboutpage/purpose.gif"
                alt="Purpose"
                width={180}
                height={180}
                className="w-28 h-28 object-contain mb-4"
              />
              <h3 className="text-[#00418d] font-bold mb-2">Our Purpose</h3>
              <p className="text-sm text-gray-700">
                To make skills visible, measurable, and trusted—so every
                decision about talent is fair, transparent, and impactful.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="w-full bg-gradient-to-b from-[#f5f7fb] via-white to-[#eef4ff] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center">
            {/* Text */}
            <div className="w-full md:w-5/12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#00418d] mb-3">
                Who We Are<span className="text-[#f73e5d]">?</span>
              </h2>
              <p className="text-sm md:text-base text-[#272727] mb-3">
                We are your partner in skill assessment. Our expertise lies in
                assessing skill levels in people and quantifying them, turning
                capabilities into clear, decision‑ready data for your
                organization.
              </p>
              <p className="text-sm md:text-base text-[#272727] mb-3">
                SkillKwiz has a single purpose and that is to create stakeholder
                value. We bring together employers, candidates, and learning
                partners on one trusted platform built around verified skills.
              </p>
              <p className="text-sm text-[#272727]">
                <span className="font-semibold">Venugopal B A</span>
                <br />
                CEO, SkillKwiz
              </p>
            </div>

            {/* Images – closer to text, fully responsive */}
            <div className="w-full md:w-7/12 flex justify-center md:justify-end gap-3 md:gap-4 flex-wrap">
              <Image
                src="/images/aboutpage/about_who_we_are-0.png"
                alt="Team collaboration"
                height={260}
                width={160}
                className="rounded-lg h-auto w-28 sm:w-32 md:w-36 lg:w-40"
              />
              <Image
                src="/images/aboutpage/about_who_we_are-1.png"
                alt="Team collaboration"
                height={260}
                width={160}
                className="rounded-lg h-auto w-28 sm:w-32 md:w-36 lg:w-40"
              />
              <Image
                src="/images/aboutpage/about_who_we_are-2.png"
                alt="Team collaboration"
                height={260}
                width={160}
                className="rounded-lg h-auto w-28 sm:w-32 md:w-36 lg:w-40"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CEO SECTION */}
      <section className="w-full bg-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-start">
            <div className="w-full md:w-1/3">
              <div className="relative max-w-xs">
                <div className="bg-[#f73e5d] p-4 rounded-t-2xl">
                  <Image
                    src="/images/aboutpage/Venugopal.png"
                    alt="Venugopal B A, CEO"
                    width={320}
                    height={320}
                    className="w-full h-auto rounded-xl object-cover"
                  />
                </div>
                <div className="bg-[#f73e5d] text-white text-center py-3 font-bold text-lg rounded-b-2xl">
                  CEO
                </div>
              </div>
            </div>

            <div className="w-full md:w-2/3 space-y-4 text-sm md:text-base text-[#272727]">
              <p>
                Venugopal B A, a veteran leader in the IT industry with over 24
                years of experience in senior leadership roles, leads SkillKwiz
                with a deep understanding of the challenges faced by the
                services sector. His vision gave birth to the idea of SkillKwiz
                as a platform dedicated to transforming how skills are assessed.
              </p>
              <p>
                With a rich technology background, he aims to establish
                SkillKwiz as an AI‑first company, shaped by the needs of the
                market it serves. Under his leadership, SkillKwiz is focused on
                becoming a trusted standard for objective, data‑driven skill
                validation across industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section className="w-full bg-white pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
            <video
              className="w-full h-auto"
              controls
              preload="none"
              poster="/images/aboutpage/about_video.png"
            >
              <source src="/images/aboutpage/about_video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
    </>
  );
}