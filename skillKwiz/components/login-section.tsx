"use client";

import Image from "next/image";

export default function LoginSection() {
  return (
    <section className="py-16 bg-[#000c2a]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-white rounded-lg overflow-hidden shadow-xl flex flex-col md:flex-row">
          {/* Left: Light illustration + short copy */}
          <div className="w-full md:w-1/2 bg-gradient-to-br from-[#e8f3ff] via-white to-[#fdf7e6] p-8 flex flex-col justify-between">
            <div>
              <p className="text-sm font-semibold text-[#00a8e8] mb-2">
                SkillKwiz Platform
              </p>
              <h2 className="text-3xl font-bold text-[#00418d] mb-4">
                Sign in and access
                <br />
                verified skill assessments
              </h2>
              <p className="text-sm text-gray-700">
                Manage test sessions, view detailed reports, and streamline your
                hiring decisions with a secure, assessment‑first workspace.
              </p>
            </div>

            <div className="mt-8 flex justify-center">
              <Image
                src="/images/homepage/Frame 7.png" // pick any light image you like
                alt="Skill assessment dashboard illustration"
                width={420}
                height={280}
                className="w-full max-w-sm h-auto object-contain drop-shadow-lg"
                priority
              />
            </div>
          </div>

          {/* Right: Login form */}
          <div className="w-full md:w-1/2 bg-[#00418d] p-8 flex items-center">
            <div className="w-full">
              <h2 className="text-xl font-bold text-white mb-6">
                Sign in to SkillKwiz
              </h2>

              <form className="space-y-4">
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full bg-gray-100 text-gray-800 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00a8e8]"
                  />
                </div>

                <div>
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full bg-gray-100 text-gray-800 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00a8e8]"
                  />
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center text-white">
                    <input
                      type="checkbox"
                      className="h-4 w-4 mr-2 rounded border-gray-300"
                    />
                    Remember me
                  </label>
                  <button
                    type="button"
                    className="text-white/90 hover:text-white underline-offset-2 hover:underline"
                  >
                    Forgot password?
                  </button>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#f73e5d] text-white p-3 rounded-md font-medium hover:bg-opacity-90 transition-all"
                >
                  Sign In
                </button>

                <div className="text-center text-white text-sm">
                  <p className="mb-2">— Or continue with —</p>
                  <div className="flex justify-center space-x-4">
                    <button
                      type="button"
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm"
                    >
                      <span className="sr-only">Continue with Google</span>
                      <Image
                        src="/images/homepage/google 1.svg"
                        alt="Google"
                        width={20}
                        height={20}
                      />
                    </button>
                    {/* You can add more providers here later */}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}