import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-500 via-purple-700 to-purple-600 text-white px-8 md:px-20 py-16 relative overflow-hidden rounded-t-[100px]">
      {/* MAIN CONTENT */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 md:gap-20">
        
        
        <div className="max-w-xl">
          <h1 className="text-5xl font-semibold mb-4">Summitra</h1>
          <p className="text-lg leading-relaxed text-white font-sans">
            Thank you for exploring our world through the lens. <br />
            From capturing cherished memories to unveiling the beauty of the everyday.
          </p>
        </div>

        
        <div className=" ml-40">
          <div className="border border-white/70 rounded-full px-20 py-4">
            <span className="text-2xl font-medium">August 20</span>
          </div>
        </div>

        
        <div className="text-right md:text-right">
          <h2 className="text-4xl md:text-5xl font-semibold text-yellow-400 leading-snug">
            Largest 2025 IT <br /> Conference.
          </h2>
        </div>
      </div>

  
      <div className="border-t border-white/20 mt-12 pt-8 flex flex-wrap justify-between text-sm text-white/80">
        <div className="flex flex-wrap gap-8">
          <a href="#" className="hover:text-white text-2xl text-white font-medium">Style guide</a>
          <a href="#" className="hover:text-white text-2xl text-white font-medium">Instructions</a>
          <a href="#" className="hover:text-white text-2xl text-white font-medium">License</a>
          <a href="#" className="hover:text-white text-2xl text-white font-medium">Changelog</a>
          <a href="#" className="hover:text-white text-2xl text-white font-medium">404</a>
        </div>

        <p className="mt-4 md:mt-0 font-bold font-sans text-lg">
          Design by Summitra — Powered by Webflow
        </p>
      </div>
    </footer>
  );
};

export default Footer;
