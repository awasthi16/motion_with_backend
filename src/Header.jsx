import React, { useState, useEffect } from "react";

const Header = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide header when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 bg-white border-b border-white shadow-sm ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="p-4 px-10 flex items-center justify-between">
        {/* Logo + Nav */}
        <div className="flex items-center">
          <img
            src="https://dhygzobemt712.cloudfront.net/Logo/Social_Square_White.png"
            alt="logo"
            width="50"
            className="mr-3"
          />
          <nav className="flex gap-8 text-md font-sans text-black">
            <a href="#" className="font-medium text-gray-800 hover:text-blue-600">
              Dashboard
            </a>
            <a href="#" className="font-medium text-gray-800 hover:text-blue-600">
              Marketplace
            </a>
            <a href="#" className="font-medium text-gray-800 hover:text-blue-600">
              Learn
            </a>
            <a href="#" className="font-medium text-gray-800 hover:text-blue-600">
              Resources
            </a>
          </nav>
        </div>

        {/* Button */}
        <div className="px-7 mr-10">
          <button className="py-3 px-5 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg shadow-md shadow-gray-300">
            Get started it’s free
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
