import React, { useState } from "react";
import Image2 from "../assets/image2.png";
import homeBackgroundimage from "../assets/homebackgroundimage.png";

const Login = () => {
  const [LoginType, setLoginType] = useState("Signed In");
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <>
      <div className="relative h-screen w-screen overflow-hidden">
        {/* Background Image */}
        <img
          src={homeBackgroundimage}
          alt="Background"
          className="absolute inset-0 bg-cover h-full w-full object-cover "
        />
        {/* Center the card*/}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Card wrapper - both sides together */}
          <div className="flex w-[900px] h-[500px] rounded-3xl overflow-hidden shadow-2xl bg-white">
            {/* Left side */}
            <div className=" relative items-center justify-center flex flex-col rounded-2xl overflow-hidden">
              <img src={Image2} alt="" className="" />
              {/* text on top of the Image*/}
              <div className="absolute z-10 text-center top-20 left-50 transform -translate-x-1/2">
                {/* changes based on tab */}
                {LoginType === "Signed In" ? (
                  <>
                    <h2 className="text-4xl font-bold text-white mb-4 font-heading">
                      Welcome Back!
                    </h2>
                    <p className="text-lg text-white leading-relaxed font-justified opacity-90">
                      Sign in to manage your job applications, monitor your
                      progress, and stay organized throughout your career
                      journey. Keep track of interviews, offers, and new
                      opportunities all in one place..
                    </p>
                  </>
                ) : (
                  <>
                    <h2 className="text-4xl font-bold text-white mb-4 font-heading">
                      WELCOME !
                    </h2>
                    <p className="text-lg text-white leading-relaxed font-justified opacity-90">
                      Create your account to start tracking job applications,
                      monitor interview progress, and stay organized throughout
                      your career journey. Manage interviews, offers, and new
                      opportunities all in one place.
                    </p>
                  </>
                )}
              </div>
            </div>

            {/* Right Side*/}
            <div className="flex-1  flex flex-col justify-center px-10 py-8">
              {/* login Type Toggle */}

              <div className="flex items-center justify-center mb-1">
                <div className="relative bg-gray-100 rounded-full p-1 flex">
                  <button
                    type="button"
                    onClick={() => {
                      setLoginType("Signed In");
                      setErrors({});
                    }}
                    className={`px-5 py-1 rounded-full font-medium transition-all duration-300 ${
                      LoginType === "Signed In"
                        ? "bg-gradient-to-r from-[#5B6FD4] to-[#8B5CF6] text-white shadow-lg"
                        : "text-gray-600 hover:text-gray-800"
                    }`}
                  >
                    Sign In
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setLoginType("Sign Up");
                      setErrors({});
                    }}
                    className={`px-5 py-1 rounded-full font-medium transition-all duration-300 ${
                      LoginType === "Sign Up"
                        ? "bg-gradient-to-r from-[#5B6FD4] to-[#8B5CF6] text-white shadow-lg"
                        : "text-gray-600 hover:text-gray-800"
                    }`}
                  >
                    Sign Up
                  </button>
                </div>
              </div>

              <p className="text-sm font-semibold mb-6 text-center ">
                {LoginType === "Signed In" ? "Sign in to your account" : "Create your account"}
              </p>

              {/* username - show in both */}
              <div className="flex items-center bg-[#E8EAFF] rounded-xl px-4 py-2 mb-4 gap-3">
                <span>👤</span>
                <input
                  type="text"
                  placeholder="User Name"
                  className="bg-transparent outline-none w-full text-sm"
                />
              </div>

              {/* email - show only in sign up */}
              {LoginType === "Sign Up" && (
                <div className="flex items-center bg-[#E8EAFF] rounded-xl px-4 py-2 mb-4 gap-3">
                  <span>✉️</span>
                  <input
                    type="email"
                    placeholder="Email"
                    className="bg-transparent outline-none w-full text-sm"
                  />
                </div>
              )}

              {/* password - show in both */}
              <div className="flex items-center bg-[#E8EAFF] rounded-xl px-4 py-2 mb-4 gap-3">
                <span>🔒</span>
                <input
                  type="password"
                  placeholder="Password"
                  className="bg-transparent outline-none w-full text-sm"
                />
                <button onClick={() => setShowPassword(!showPassword)}>
                  <span className="text-sm">{showPassword ? "👁️" : "🙈"}</span>
                </button>
              </div>

              {/* confirm password - show only in sign up */}
              {LoginType === "Sign Up" && (
                <div className="flex items-center bg-[#E8EAFF] rounded-xl px-4 py-2 mb-4 gap-3">
                  <span>🔒</span>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="bg-transparent outline-none w-full text-sm"
                  />
                  <button onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                    <span className="text-sm">{showConfirmPassword ? "👁️" : "🙈"}</span>
                  </button>
                </div>
              )}

              {/* Remember me(Sign in)/ Terms (Sign up) */}
              {LoginType === "Signed In" ? (
                <div className="flex item-center justify-between mb-4 text-sm">
                  <label className="flex items-center gap-2 text-gray-600 cursor-pointer">
                    <input type="checkbox" className="accent-blue-500" />
                    <span>Remember me</span>
                  </label>
                  <a href="#" className="text-gray-600 hover:text-blue-500">
                    Forgot Password?
                  </a>
                </div>
              ) : (
                <div className="flex item-center justify-between mb-4 text-sm">
                  <label className="flex items-center gap-2 text-gray-600 cursor-pointer">
                    <input type="checkbox" className="accent-blue-500" />
                    <span>I agree to the Terms and Conditions</span>
                  </label>
                </div>
              )}

              {/* Submit button */}
              <button className="w-full bg-gradient-to-r from-[#5B6FD4] to-[#8B5CF6] hover:from-[#4a5ec0] hover:to-[#7C3AED] text-white font-bold py-2 rounded-xl transition-all">
                {LoginType === "Signed In" ? "Sign In" : "Sign Up"}
              </button>

              {/* divider */}
              {LoginType === "Sign Up" && (
                <div className="flex items-center gap-2 mt-2">
                  <hr className="flex-1 border-gray-300" />
                  <span className="text-gray-500 text-xs">OR</span>
                  <hr className="flex-1 border-gray-300" />
                </div>
              )}

              {/* google sign in button */}
              {LoginType === "Sign Up" && (
                <button className="w-full border border-gray-300 hover:border-gray-50 text-gray-700 font-semibold rounded-xl flex items-center justify-center gap-2 trasaction-all mt-2 py-2">
                  <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
                  Sign Up with Google
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
