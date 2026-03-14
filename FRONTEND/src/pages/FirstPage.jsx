import React from "react";
import homeBackgroundimage from "../assets/homebackgroundimage.png";
import TopNavBar from "../components/TopNavBar";
import Footer from "../components/Footer";

const firstPage = () => {
  return (
    <>
      <div className="relative h-screen w-screen overflow-hidden">
        <img
          src={homeBackgroundimage}
          alt="Background"
          className="absolute inset-0 bg-cover h-full w-full object-cover "
        />
        <div className="absolute inset-0">
          <TopNavBar />
          <div className="flex flex-col justify-start h-full px-30 max-w-5xl pt-40">
            <h1 className="text-8xl font-bold text-white leading-tight mb-6 font-heading">
              Your IT career starts here
            </h1>
            <p className="text-[#D9D9D9] text-xl mb-8 leading-relaxed font-body">
              JobTrackr is built to elevate your IT journey.Get personalized
              reommendations and complete application visibility with a powerful
              suite of talent tracking tools.
            </p>
            <div className="flex gap-4">
              <button className="bg-[#3B5E96] hover:bg-[#B0B0B0] text-white py-2 px-4 rounded-2xl text-xl">
                REQUEST DEMO
              </button>
              <button className="bg-[#3B5E96] hover:bg-[#B0B0B0] text-white py-2 px-4 rounded-2xl text-xl">
                MORE DETAILS
              </button>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default firstPage;
