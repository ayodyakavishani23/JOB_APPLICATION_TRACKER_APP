import React from "react";
import homeBackgroundimage from "../assets/homebackgroundimage.png";
import TopNavBar from "../components/TopNavBar";
import Footer from "../components/Footer";
import Image1 from "../assets/image1.png";
import { motion } from "framer-motion";

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
          <div className="flex flex-col justify-start h-full px-30 max-w-5xl pt-20">
            <motion.h1
              className="text-8xl font-bold text-white leading-tight mb-6 font-heading"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Your IT career starts here
            </motion.h1>
            <motion.p
              className="text-[#D9D9D9] text-xl mb-8 leading-relaxed font-body"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              JobTrackr is built to elevate your IT journey.Get personalized
              reommendations and complete application visibility with a powerful
              suite of talent tracking tools.
            </motion.p>
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              <button className="bg-[#3B5E96] hover:bg-[#B0B0B0] text-white py-2 px-4 rounded-2xl text-xl">
                REQUEST DEMO
              </button>
              <button className="bg-[#3B5E96] hover:bg-[#B0B0B0] text-white py-2 px-4 rounded-2xl text-xl">
                MORE DETAILS
              </button>
            </motion.div>
              <motion.img
                src={Image1}
                alt="Image 1"
                className="absolute bottom-4 right-1 w-200 h-100 object-cover"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default firstPage;
