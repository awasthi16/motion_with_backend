import React from "react";

export default function Footer() {
  return (
    <div className="flex flex-col md:flex-row gap-10 px-8 py-10 bg-white text-gray-800 font-sans leading-relaxed">
      {/* LEFT SECTION */}
      <div className="md:w-2/3">
        {/* Static Tabs */}
        <div className="border-b border-gray-300 mb-8">
          <div className="flex space-x-6 text-sm font-medium">
            <span className="pb-2 border-b-2 border-black text-black cursor-pointer">
              Overview
            </span>
            <span className="pb-2 text-gray-500 cursor-pointer hover:text-black">
              License
            </span>
            <span className="pb-2 text-gray-500 cursor-pointer hover:text-black">
              Support
            </span>
            <span className="pb-2 text-gray-500 cursor-pointer hover:text-black">
              FAQ
            </span>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div>
          <p className="mb-4 text-[15px]">
            <strong>Summitra</strong> is a clean and simple one-page Webflow
            template made for tech events, SaaS products, online meetups, and
            startup websites. It is very easy to use and works great on phones,
            tablets, and computers.
          </p>
          <p className="mb-4 text-[15px]">
            Everything you need is on one page. You can show your event,
            speakers, schedule, pricing, and contact form without switching
            pages. Just update the text and pictures to match your brand. No
            coding is needed.
          </p>
          <p className="mb-8 text-[15px]">
            This template is perfect for anyone who wants to launch fast and
            look professional.
          </p>

          {/* Key Features */}
          <h3 className="font-semibold mb-3 text-[16px] text-gray-900">
            Key Features:
          </h3>
          <ul className="list-disc pl-6 space-y-1.5 mb-8 text-[14px]">
            <li>One-page layout for faster navigation</li>
            <li>Easy to edit in Webflow</li>
            <li>Fully responsive design</li>
            <li>SEO-friendly and fast to load</li>
            <li>Smooth scroll and section-based layout</li>
            <li>Ready for SaaS, IT events, or product launches</li>
          </ul>

          {/* Sections Included */}
          <h3 className="font-semibold mb-3 text-[16px] text-gray-900">
            Sections Included:
          </h3>
          <ul className="list-disc pl-6 space-y-1.5 mb-8 text-[14px]">
            <li>Hero</li>
            <li>About</li>
            <li>Speakers</li>
            <li>Schedule</li>
            <li>Pricing</li>
            <li>Testimonials</li>
            <li>Footer</li>
          </ul>

          {/* Figma Info */}
          <p className="text-[13px] leading-6 text-gray-700">
            If you’ve purchased the template and would like the free{" "}
            <strong>Figma design file</strong>, just send us a copy of your{" "}
            <strong>purchase receipt</strong> to{" "}
            <a
              href="mailto:hello@teconce.com"
              className="font-semibold text-black hover:underline"
            >
              hello@teconce.com
            </a>
            . Once we receive it, we’ll email you the Figma file right away.
          </p>
        </div>
      </div>

      {/* RIGHT SIDEBAR */}
      <div className="md:w-1/3 space-y-6 text-sm">
        {/* Subcategories */}
        <div>
          <h4 className="font-semibold mb-2 text-[15px]">Subcategories</h4>
          <div className="flex gap-2 flex-wrap">
            <span className="bg-gray-100 px-3 py-1.5 rounded cursor-pointer hover:bg-gray-200">
              Events
            </span>
            <span className="bg-gray-100 px-3 py-1.5 rounded cursor-pointer hover:bg-gray-200">
              IT Company
            </span>
          </div>
        </div>

        {/* Styles */}
        <div>
          <h4 className="font-semibold mb-2 text-[15px]">Styles</h4>
          <div className="flex gap-2 flex-wrap">
            <span className="bg-gray-100 px-3 py-1.5 rounded cursor-pointer hover:bg-gray-200">
              Playful
            </span>
            <span className="bg-gray-100 px-3 py-1.5 rounded cursor-pointer hover:bg-gray-200">
              Modern
            </span>
          </div>
        </div>

        {/* Features */}
        <div>
          <h4 className="font-semibold mb-4 text-lg">Features</h4>
          <ul className="border-t border-gray-200 divide-y divide-gray-200">
            {[
              "GSAP",
              "Retina ready",
              "Web fonts",
              "Custom 404 page",
              "CSS Grid",
              "Interactions",
              "Background video",
              "Responsive design",
            ].map((feature, i) => (
              <li
                key={i}
                className="flex justify-between items-center py-3 text-[14px]"
              >
                <span>{feature}</span>
                <span className="text-xl text-gray-400 font-light">+</span>
              </li>
            ))}
          </ul>

          {/* Share */}
          <div className="mt-8">
            <h4 className="font-semibold mb-3 text-sm">Share</h4>
            <div className="flex items-center gap-5 text-xl text-gray-800">
              <i className="fab fa-x-twitter cursor-pointer hover:text-blue-500"></i>
              <i className="fab fa-facebook cursor-pointer hover:text-blue-500"></i>
              <i className="fab fa-linkedin cursor-pointer hover:text-blue-500"></i>
              <i className="fab fa-pinterest cursor-pointer hover:text-blue-500"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
