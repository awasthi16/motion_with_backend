import React from "react";
// import {
//   FaYoutube,
//   FaTwitter,
//   FaFacebookF,
//   FaInstagram,
//   FaTiktok,
// } from "react-icons/fa";
// import { SiWebflow } from "react-icons/si";

const Bottom = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10 text-sm text-gray-600">
        {/* Explore */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">Explore</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-black">Dashboard</a></li>
            <li><a href="#" className="hover:text-black">Marketplace</a></li>
            <li><a href="#" className="hover:text-black">Designers</a></li>
          </ul>
        </div>

        {/* Learn & get help */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">Learn & get help</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-black">Support</a></li>
            <li><a href="#" className="hover:text-black">University</a></li>
            <li><a href="#" className="hover:text-black">Courses</a></li>
            <li><a href="#" className="hover:text-black">Blog</a></li>
            <li><a href="#" className="hover:text-black">Ebooks</a></li>
            <li><a href="#" className="hover:text-black">Forum</a></li>
            <li><a href="#" className="hover:text-black">Community</a></li>
            <li><a href="#" className="hover:text-black">Developers</a></li>
            <li><a href="#" className="hover:text-black">Wishlist</a></li>
            <li><a href="#" className="hover:text-black">Status</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-black">About</a></li>
            <li><a href="#" className="hover:text-black">Careers</a></li>
            <li><a href="#" className="hover:text-black">Sitemap</a></li>
            <li><a href="#" className="hover:text-black">Become an affiliate</a></li>
          </ul>
        </div>

        {/* Terms & Policies */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">Terms & policies</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-black">Terms of Service</a></li>
            <li><a href="#" className="hover:text-black">Privacy policy</a></li>
            <li><a href="#" className="hover:text-black">Cookie policy</a></li>
            <li><a href="#" className="hover:text-black">Cookie preferences</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">Social</h3>
          <div className="flex flex-col space-y-4 text-gray-500 text-lg">
            <a href="#" className="hover:text-black"><i className="fab fa-instagram"></i></a>
            <a href="#" className="hover:text-black"><i className="fab fa-facebook"></i></a>
            <a href="#" className="hover:text-black"><i className="fab fa-youtube"></i></a>
            <a href="#" className="hover:text-black"><i className="fab fa-whatsapp"></i></a>
            <a href="#" className="hover:text-black"><i className="fab fa-twitter"></i></a>
            <a href="#" className="hover:text-black"><i className="fab fa-google"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Bottom;
