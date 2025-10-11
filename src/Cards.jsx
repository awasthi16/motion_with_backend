import React, { useState } from "react";
import { motion } from "framer-motion";

const cards = [
  {
    img: "https://cdn.prod.website-files.com/687f5648b07a8b67bf809294/68807fe3fa2c3b7e74f497a7_f32842e72824373ee91071fc214bd16b_team-1.png",
    hoverImg: "https://cdn.prod.website-files.com/687f5648b07a8b67bf809294/6880805b8393f4c37ca65a63_2a2f9f6f8a7271d304946ed306c7917c_team-3.png",
  },
  {
    img: "https://cdn.prod.website-files.com/687f5648b07a8b67bf809294/6880c4a2029acc1ed84bf402_team-5.png",
    hoverImg: "https://cdn.prod.website-files.com/687f5648b07a8b67bf809294/6891aac603a49c7db89b4af7_6880802c60e7f6881998217f_df20dfb4a6d3c10988d870b3dd6a4aa9_team-2%20(2).png",
  },
  {
    img: "https://cdn.prod.website-files.com/687f5648b07a8b67bf809294/6891acc20a821d240d8c73f9_sd.png",
    hoverImg: "https://cdn.prod.website-files.com/687f5648b07a8b67bf809294/6891ad17e238089228940c0b_688b4fcf7eec039af9714996_team-1%20(2).png",
  },
  {
    img: "https://cdn.prod.website-files.com/687f5648b07a8b67bf809294/6891abdd656a3e0a19ab960e_688b4fcf7eec039af9714996_team-1%20(1).png",
    hoverImg: "https://cdn.prod.website-files.com/687f5648b07a8b67bf809294/68807fe3fa2c3b7e74f497a7_f32842e72824373ee91071fc214bd16b_team-1.png",
  },
];

const Cards = () => {
  return (
    <section className="min-h-screen flex flex-col items-start bg-white px-20 py-15">
      {/* Header Text at Top-Left */}
      <h1 className="text-gray-800 m-16 text-2xl font-bold mb-12">
        Similar Templates
      </h1>

      {/* Cards Container */}
      <div className="flex flex-wrap justify-start px-10 gap-10">
        {cards.map((card, i) => (
          <Card key={i} {...card} />
        ))}
      </div>
    </section>
  );
};

const Card = ({ img, hoverImg }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative w-72 h-110 border-1 border-gray-200 rounded-3xl cursor-pointer overflow-hidden"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 120, damping: 12 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card Image */}
      <img
        src={isHovered ? hoverImg : img}
        alt="Card"
        className="w-full h-full object-cover transition-all duration-500"
      />

      {/* Centered View More Button */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0"
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <span className="text-black rounded-lg px-10 py-3 bg-white font-bold text-xl cursor-pointer">
          View More
        </span>
      </motion.div>
    </motion.div>
  );
};

export default Cards;
