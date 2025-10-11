import React from "react";
import { motion } from "framer-motion";
import { Parallax } from "react-parallax";

const scrollVariants = {
  hiddenUp: { opacity: 0, y: 100 },
  hiddenDown: { opacity: 0, y: -100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const ScrollZoomProCards = () => {
  const cards = [
    {
      title: "Creative Design",
      img: "https://cdn.prod.website-files.com/687f5648b07a8b67bf809294/6891aac603a49c7db89b4af7_6880802c60e7f6881998217f_df20dfb4a6d3c10988d870b3dd6a4aa9_team-2%20(2).png",
      desc: "Smooth motion UI with Framer Motion ",
    },
    {
      title: "UX Strategy",
      img: "https://cdn.prod.website-files.com/687f5648b07a8b67bf809294/6880c4a2029acc1ed84bf402_team-5.png",
      desc: "Build seamless user experiences ",
    },
    {
      title: "Web Animation",
      img: "https://cdn.prod.website-files.com/687f5648b07a8b67bf809294/6891acc20a821d240d8c73f9_sd.png",
      desc: "Add beautiful transitions easily ",
    },
    {
      title: "Interactive Motion",
      img: "https://cdn.prod.website-files.com/687f5648b07a8b67bf809294/6891abdd656a3e0a19ab960e_688b4fcf7eec039af9714996_team-1%20(1).png",
      desc: "Experience fluid user interactions ",
    },
    {
      title: "3D UI Elements",
      img: "https://cdn.prod.website-files.com/687f5648b07a8b67bf809294/6891ad17e238089228940c0b_688b4fcf7eec039af9714996_team-1%20(2).png",
      desc: "Create depth with parallax visuals ",
    },
    {
      title: "Responsive Layouts",
      img: "https://cdn.prod.website-files.com/687f5648b07a8b67bf809294/68807fe3fa2c3b7e74f497a7_f32842e72824373ee91071fc214bd16b_team-1.png",
      desc: "Design once, look perfect everywhere ",
    },
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden text-white rounded-t-2xl mt-2">
      {/* 🌈 BACKGROUND - Deep Gradient */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-r from-purple-500 via-purple-700 to-purple-600"></div>

      {/* ⚡ WHITE LINE ANIMATION */}
      <motion.svg
        className="absolute inset-0 -z-10 w-full h-full"
        viewBox="0 0 1440 800"
        preserveAspectRatio="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.4 }}
        transition={{
          duration: 3,
          ease: "easeInOut",
        }}
      >
        <motion.path
          d="M0,400 C200,300 400,500 600,400 C800,300 1000,500 1440,400"
          stroke="white"
          strokeWidth="2"
          fill="transparent"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: [0, 1, 0.8, 1], opacity: [0, 0.8, 0.6, 0.8] }}
          transition={{
            duration: 6,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
      </motion.svg>

      {/* ✨ Floating Light Layer */}
      <Parallax strength={200}>
        <motion.div
          className="absolute -top-40 -left-20 w-[500px] h-[500px] bg-white/10 blur-[150px] rounded-full"
          animate={{
            x: [0, 50, -40, 0],
            y: [0, -60, 40, 0],
          }}
          transition={{
            duration: 10,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
      </Parallax>

      {/* 💫 HEADING */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-bold mb-16 text-center text-yellow-400"
      >
        Meet all the top IT minds
        <p className="text-lg text-gray-300 mt-2">
          Explore our lineup of keynote speakers and industry leaders
        </p>
        <p className="text-lg text-gray-400 mt-1">
          who will inspire and enlighten at the conference.
        </p>
      </motion.h1>

      {/* 🃏 CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            variants={
              i % 2 === 0
                ? scrollVariants
                : { ...scrollVariants, hiddenUp: scrollVariants.hiddenDown }
            }
            initial={i % 2 === 0 ? "hiddenUp" : "hiddenDown"}
            whileInView="visible"
            viewport={{ once: false, amount: 0.4 }}
            className="group relative overflow-hidden bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700"
          >
            <motion.img
              src={card.img}
              alt={card.title}
              className="w-full h-100 object-cover rounded-2xl transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-2xl flex flex-col justify-end p-6">
              <motion.h2
                className="text-white text-2xl font-semibold mb-2"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                {card.title}
              </motion.h2>
              <p className="text-gray-200 text-sm">{card.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ScrollZoomProCards;
