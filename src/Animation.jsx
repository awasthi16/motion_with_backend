import React, { useState, useEffect } from "react";
import { Parallax } from "react-parallax";
import { motion } from "framer-motion";
import ScrollZoomCard from "./ScrollZoomCard";
import Ticket from "./Ticket";
import Footer from "./Footer";
import Faq from "./Faq";

// 🎞️ Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};
const zoomIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

// Floating background animation
const floatingVariants = {
  animate: {
    y: ["0%", "-20%", "0%"],
    x: ["0%", "15%", "0%"],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" }
  }
};

const Animation = ({ scrollContainerRef }) => {
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    if (!scrollContainerRef?.current) return;

    let lastScrollY = scrollContainerRef.current.scrollTop;

    const handleScroll = () => {
      const currentY = scrollContainerRef.current.scrollTop;

      if (currentY < lastScrollY || currentY < 50) setShowHeader(true);
      else if (currentY > lastScrollY) setShowHeader(false);

      lastScrollY = currentY;
    };

    const container = scrollContainerRef.current;
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [scrollContainerRef]);

  const cardImages = [
    "https://cdn.prod.website-files.com/687f5648b07a8b67bf809294/6880805b8393f4c37ca65a63_2a2f9f6f8a7271d304946ed306c7917c_team-3.png",
    "https://cdn.prod.website-files.com/687f5648b07a8b67bf809294/6891aac603a49c7db89b4af7_6880802c60e7f6881998217f_df20dfb4a6d3c10988d870b3dd6a4aa9_team-2%20(2).png",
    "https://cdn.prod.website-files.com/687f5648b07a8b67bf809294/6891a86d98f9bef9d385160b_6880802c60e7f6881998217f_df20dfb4a6d3c10988d870b3dd6a4aa9_team-2%20(1).png",
    "https://cdn.prod.website-files.com/687f5648b07a8b67bf809294/68807fe3fa2c3b7e74f497a7_f32842e72824373ee91071fc214bd16b_team-1.png",
  ];

  return (
    <div className="font-sans overflow-y-auto h-full relative">
      {/* 🌄 FIRST SECTION (PURPLE HERO) */}
      <section className="relative z-10 rounded-b-4xl bg-gradient-to-r from-purple-500 via-purple-700 to-purple-600 shadow-2xl overflow-hidden">
        <Parallax strength={400} blur={{ min: -10, max: 20 }}>
          {/* 🔹 HEADER SECTION */}
          {/* <motion.header
            
            animate={{ y: showHeader ? 0 : -120, opacity: showHeader ? 1 : 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="flex justify-between items-center px-8 py-4 text-white sticky top-0 bg-transparent backdrop-brightness-75 z-20 shadow-md"
          >
            <h1 className="text-2xl font-bold">Summitra</h1>

            <div className="flex items-center gap-8">
               <p className="font-semibold">Ticket</p>
              <div className="text-right">
               
                <p className="font-semibold">(888) 123 4567</p>
                <p className="text-sm text-white/80 mt-2">info@example.com</p>
              </div>

              <button className="bg-white text-black font-bold rounded-full px-8 py-4 flex items-center gap-2 shadow-md hover:scale-105 transition-transform duration-300">
                Buy Ticket
                <span className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center">
                  ➜
                </span>
              </button>
            </div>
          </motion.header> */}

          {/* 🟣 Animated background shapes */}
          <motion.div
            className="absolute top-0 left-0 w-full h-full overflow-hidden"
            initial="animate"
            animate="animate"
          >
            <motion.div
              variants={floatingVariants}
              className="absolute w-48 h-48 bg-purple-400/20 rounded-full top-10 left-20"
            />
            <motion.div
              variants={floatingVariants}
              className="absolute w-32 h-32 bg-purple-300/20 rounded-full top-60 left-60"
            />
            <motion.div
              variants={floatingVariants}
              className="absolute w-40 h-40 bg-purple-200/20 rounded-full top-40 right-20"
            />
          </motion.div>

          {/* 🏔️ Hero content */}
          <div className="h-screen flex flex-col justify-center items-center text-center px-6 relative z-10">
            <motion.h1
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1 }}
              className="text-yellow-300 text-2xl sm:text-6xl font-semibold mb-6 tracking-tight z-10"
            >
              Code. Connect. Create
              <p className="mt-2">One Epic Conference</p>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: 0.3, duration: 1 }}
              className="text-white/90 text-lg sm:text-2xl max-w-2xl mb-10 leading-relaxed z-10"
            >
              Explore our lineup of keynote speakers and industry leaders.
            </motion.p>

            {/* Image Cards */}
            <div className="flex flex-wrap justify-center gap-8 z-10 relative">
              {cardImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.3 * index,
                    duration: 0.9,
                    type: "spring",
                  }}
                  className="w-64 h-100 bg-gradient-to-r from-gray-50 via-white to-sky-100 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
                >
                  <img
                    src={image}
                    alt={`Card ${index + 1}`}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </Parallax>
      </section>

      {/*  SECOND SECTION (ABOUT) */}
      {/*  SECOND SECTION (ABOUT with Blur Zoom) */}
<section className="relative z-0 min-h-screen flex flex-col justify-center items-start bg-black text-white rounded-2xl px-10 sm:px-24 overflow-hidden">

  {/* 🌫️ Animated Blurred Background (behind text) */}
  <motion.div
    initial={{ opacity: 0, scale: 0.8, filter: "blur(60px)" }}
    whileInView={{ opacity: 0.7, scale: 1.2, filter: "blur(100px)" }}
    transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}
    className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-pink-400/20 rounded-3xl"
  />

  {/* ✨ Text Zoom with Blur Background */}
  <motion.div
    variants={zoomIn}
    initial="hidden"
    whileInView="visible"
    transition={{ duration: 1.2, ease: "easeOut" }}
    className="max-w-4xl p-10 "
  >
    <motion.h2
      initial={{ opacity: 0, scale: 0.7, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-5xl sm:text-7xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-400"
    >
      About
    </motion.h2>

    <motion.p
      initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 1.4, ease: "easeOut", delay: 0.3 }}
      className="text-2xl sm:text-3xl leading-relaxed text-gray-200 mb-6"
    >
      <span className="font-semibold text-white">Summitra 2025</span> is an immersive, IT Conference
      over the course of three days, <span className="text-purple-400 font-semibold">August 13–15</span>.
      Our mission, the challenges, A person's success is measured by the way they approach it and how they approach it.
    </motion.p>

    {/* Timer Boxes */}
    <div className="flex gap-4 mt-8">
      {["Days", "Hours", "Minutes", "Seconds"].map((label, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.2, duration: 0.8 }}
          className="bg-white/10 backdrop-blur-md px-8 py-6 rounded-xl text-center shadow-lg border border-white/10"
        >
          <p className="text-4xl font-bold text-white">00</p>
          <p className="text-sm text-gray-400">{label}</p>
        </motion.div>
      ))}
    </div>
  </motion.div>

  {/* 🟣 Floating Glow Layer (for ambient blur effect) */}
  <motion.div
    className="absolute -top-40 -right-40 w-[400px] h-[400px] bg-purple-500/30 blur-[120px] rounded-full -z-20"
    animate={{ x: [0, -60, 0], y: [0, 40, 0] }}
    transition={{ duration: 10, ease: "easeInOut", repeat: Infinity }}
  />

  {/* Buy Ticket Button */}
  <motion.button
    whileHover={{ scale: 1.1 }}
    className="absolute bottom-12 right-12 bg-white text-black font-semibold rounded-full px-8 py-4 flex items-center gap-3 shadow-lg"
  >
    Buy Ticket
    <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center">
      ➜
    </span>
  </motion.button>
</section>


      <section>
        <ScrollZoomCard/>
      </section>
      <section>
        {/* <Ticket/> */}
      </section>
      <section>
          <Faq/>
      </section>
       <section>
          <Footer/>
      </section>
    
    </div>
  );
};

export default Animation;
