"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, X, Download } from "lucide-react";
import LoginForm from "@/components/login-form";
import EmployeeRegistration from "@/components/employee-registeration";
import ScheduleAssessment from "@/components/schedule-assessment";
import EmployerRegistration from "@/components/employer-registeration";
import EmployerProfile from "@/components/employer-profile";
import EmployerAssessmentRequest from "@/components/employer-assessment-request";
import EmployerCandidateList from "@/components/employer-candidate-list";

export default function ServicesPage() {
  // Authentication state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState<"employer" | "employee" | null>(
    null
  );

  // Registration success states
  const [employeeRegistrationSuccess, setEmployeeRegistrationSuccess] =
    useState(false);
  const [employerRegistrationSuccess, setEmployerRegistrationSuccess] =
    useState(false);
  
  // Assessment submission success state
  const [assessmentSubmissionSuccess, setAssessmentSubmissionSuccess] =
    useState(false);

  // Screen states
  const [employeeScreen, setEmployeeScreen] = useState<
    "registration" | "assessment"
  >("registration");
  const [employerScreen, setEmployerScreen] = useState<
    "registration" | "profile" | "assessment" | "candidates"
  >("registration");

  // Handle login
  const handleLogin = (type: "employer" | "employee") => {
    setIsLoggedIn(true);
    setUserType(type);

    if (type === "employer") {
      setEmployerScreen("registration");
    } else {
      setEmployeeScreen("registration");
    }
  };

  // Handle employee registration completion
  const handleEmployeeRegistrationComplete = () => {
    setEmployeeRegistrationSuccess(true);
  };

  // Handle employer registration completion
  const handleEmployerRegistrationComplete = () => {
    setEmployerRegistrationSuccess(true);
  };

  // Handle assessment submission
  const handleAssessmentSubmit = () => {
    setAssessmentSubmissionSuccess(true);
  };

  // Continue after employee registration success
  const continueToEmployeeAssessment = () => {
    setEmployeeRegistrationSuccess(false);
    setEmployeeScreen("assessment");
  };

  // Continue after employer registration success
  const continueToEmployerProfile = () => {
    setEmployerRegistrationSuccess(false);
    setEmployerScreen("profile");
  };

  // Close assessment submission popup
  const closeAssessmentPopup = () => {
    setAssessmentSubmissionSuccess(false);
  };

  // Download assessment card
  const downloadAssessmentCard = () => {
    // Create a dummy assessment card HTML
    const cardHTML = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body {
              font-family: 'Inter', sans-serif;
              padding: 40px;
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              display: flex;
              justify-content: center;
              align-items: center;
              min-height: 100vh;
            }
            .card {
              background: white;
              border-radius: 20px;
              padding: 40px;
              max-width: 600px;
              box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            }
            .header {
              text-align: center;
              border-bottom: 3px solid #00418d;
              padding-bottom: 20px;
              margin-bottom: 30px;
            }
            .logo {
              font-size: 32px;
              font-weight: 700;
              color: #00418d;
              margin-bottom: 10px;
            }
            .title {
              font-size: 24px;
              font-weight: 600;
              color: #333;
              margin-bottom: 5px;
            }
            .subtitle {
              font-size: 14px;
              color: #666;
            }
            .content {
              margin-bottom: 30px;
            }
            .detail-row {
              display: flex;
              justify-content: space-between;
              padding: 12px 0;
              border-bottom: 1px solid #eee;
            }
            .detail-label {
              font-weight: 600;
              color: #00418d;
              font-size: 14px;
            }
            .detail-value {
              color: #333;
              font-size: 14px;
              text-align: right;
            }
            .footer {
              text-align: center;
              margin-top: 30px;
              padding-top: 20px;
              border-top: 2px solid #f0f0f0;
            }
            .footer-text {
              font-size: 12px;
              color: #666;
              margin-top: 10px;
            }
            .badge {
              display: inline-block;
              background: #f73e5d;
              color: white;
              padding: 8px 16px;
              border-radius: 20px;
              font-size: 12px;
              font-weight: 600;
              margin-top: 10px;
            }
          </style>
        </head>
        <body>
          <div class="card">
            <div class="header">
              <div class="logo">SkillKwiz</div>
              <div class="title">Assessment Confirmation</div>
              <div class="subtitle">Your assessment has been scheduled</div>
            </div>
            <div class="content">
              <div class="detail-row">
                <span class="detail-label">Assessment ID:</span>
                <span class="detail-value">SKW-${Date.now().toString().slice(-8)}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Company:</span>
                <span class="detail-value">Microsoft</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Skills Assessed:</span>
                <span class="detail-value">C#, SQL Server, Web2.0, React</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Testing Centre:</span>
                <span class="detail-value">Centre 1</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Date:</span>
                <span class="detail-value">${new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Time:</span>
                <span class="detail-value">10:00 AM</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Location:</span>
                <span class="detail-value">India</span>
              </div>
            </div>
            <div class="footer">
              <div class="badge">CONFIRMED</div>
              <div class="footer-text">
                Please arrive 15 minutes before your scheduled time.<br/>
                Bring a valid ID for verification.
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    // Create blob and download
    const blob = new Blob([cardHTML], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `SkillKwiz-Assessment-${Date.now()}.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-[#050e2d] relative overflow-x-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/servicespage/services-bg.png"
          alt="Background"
          fill
          priority
          className="object-cover opacity-100"
        />
      </div>

      <div className="relative z-10 pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-5xl">
          {!isLoggedIn ? (
            // Login Form
            <div className="bg-gradient-to-r from-[#3a4a7b]/90 to-[#9ba3b9]/90 rounded-lg p-8 backdrop-blur-sm max-w-md mx-auto shadow-xl">
              <LoginForm onLogin={handleLogin} />
            </div>
          ) : (
            // Logged in content
            <>
              {/* Back button - only shown on assessment screen */}
              {userType === "employee" && employeeScreen === "assessment" && (
                <button
                  onClick={() => setEmployeeScreen("registration")}
                  className="text-white mb-4 flex items-center gap-2 hover:text-[#f6c648] transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                  <span>Back</span>
                </button>
              )}

              {/* Content Panel */}
              {userType === "employee" ? (
                <div className="bg-gradient-to-r from-[#3a4a7b]/90 to-[#9ba3b9]/90 rounded-lg p-8 backdrop-blur-sm shadow-xl">
                  {employeeScreen === "registration" ? (
                    <EmployeeRegistration
                      onNext={handleEmployeeRegistrationComplete}
                    />
                  ) : (
                    <ScheduleAssessment onSubmit={handleAssessmentSubmit} />
                  )}
                </div>
              ) : (
                <>
                  {/* Employer Screens */}
                  {employerScreen === "registration" ? (
                    <div className="bg-gradient-to-r from-[#3a4a7b]/90 to-[#9ba3b9]/90 rounded-lg p-8 backdrop-blur-sm shadow-xl">
                      <EmployerRegistration
                        onSubmit={handleEmployerRegistrationComplete}
                      />
                    </div>
                  ) : (
                    <>
                      {/* Employer Navigation Tabs */}
                      <div className="bg-[#b8bdc7] rounded-lg mb-4 shadow-md">
                        <div className="grid grid-cols-3 gap-1">
                          <button
                            onClick={() => setEmployerScreen("profile")}
                            className={`py-3 px-4 text-center text-white font-medium transition-all ${
                              employerScreen === "profile"
                                ? "bg-[#2d5184] rounded-lg shadow-sm"
                                : "hover:bg-[#2d5184]/50"
                            }`}
                          >
                            Profile
                          </button>
                          <button
                            onClick={() => setEmployerScreen("assessment")}
                            className={`py-3 px-4 text-center text-white font-medium transition-all ${
                              employerScreen === "assessment"
                                ? "bg-[#2d5184] rounded-lg shadow-sm"
                                : "hover:bg-[#2d5184]/50"
                            }`}
                          >
                            Assessment Request
                          </button>
                          <button
                            onClick={() => setEmployerScreen("candidates")}
                            className={`py-3 px-4 text-center text-white font-medium transition-all ${
                              employerScreen === "candidates"
                                ? "bg-[#2d5184] rounded-lg shadow-sm"
                                : "hover:bg-[#2d5184]/50"
                            }`}
                          >
                            Candidate List
                          </button>
                        </div>
                      </div>

                      {/* Employer Content */}
                      <div className="bg-gradient-to-r from-[#3a4a7b]/90 to-[#9ba3b9]/90 rounded-lg p-8 backdrop-blur-sm shadow-xl">
                        {employerScreen === "profile" && <EmployerProfile />}
                        {employerScreen === "assessment" && (
                          <EmployerAssessmentRequest />
                        )}
                        {employerScreen === "candidates" && (
                          <EmployerCandidateList />
                        )}
                      </div>
                    </>
                  )}
                </>
              )}
            </>
          )}
        </div>
      </div>

      {/* Thank You Popup Modal - Employee Registration */}
      {employeeRegistrationSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative">
            <button
              onClick={continueToEmployeeAssessment}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              <h2 className="text-2xl font-bold text-[#00418d] mb-3">
                Thank You for Registering!
              </h2>
              <p className="text-gray-600 mb-6 text-sm md:text-base">
                Your employee account has been created successfully. You can now
                proceed to schedule your assessment.
              </p>

              <button
                onClick={continueToEmployeeAssessment}
                className="w-full bg-[#f73e5d] text-white py-3 px-6 rounded-lg font-medium hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg"
              >
                Continue to Assessment
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Thank You Popup Modal - Employer Registration */}
      {employerRegistrationSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative">
            <button
              onClick={continueToEmployerProfile}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              <h2 className="text-2xl font-bold text-[#00418d] mb-3">
                Thank You for Registering!
              </h2>
              <p className="text-gray-600 mb-6 text-sm md:text-base">
                Your employer account has been created successfully. You can now
                access all employer features and start managing assessments.
              </p>

              <button
                onClick={continueToEmployerProfile}
                className="w-full bg-[#f73e5d] text-white py-3 px-6 rounded-lg font-medium hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg"
              >
                Continue to Profile
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Thank You Popup Modal - Assessment Submission with Download */}
      {assessmentSubmissionSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative">
            <button
              onClick={closeAssessmentPopup}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center">
              {/* Success Icon */}
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              <h2 className="text-2xl font-bold text-[#00418d] mb-3">
                Thank You!
              </h2>
              <p className="text-gray-600 mb-6 text-sm md:text-base">
                Your assessment has been scheduled successfully. You will receive
                a confirmation email with all the details shortly. Good luck with
                your assessment!
              </p>

              {/* Download Button */}
              <button
                onClick={downloadAssessmentCard}
                className="w-full bg-[#00418d] text-white py-3 px-6 rounded-lg font-medium hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg mb-3 flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download Assessment Card
              </button>

              {/* Close Button */}
              <button
                onClick={closeAssessmentPopup}
                className="w-full bg-[#f73e5d] text-white py-3 px-6 rounded-lg font-medium hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}