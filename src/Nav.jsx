import React, { useRef } from 'react';
import Animation from './Animation';

const Nav = () => {
  // scrollable div ka ref
  const scrollRef = useRef(null);

  return (
    <>
      <section className="w-full flex flex-col md:flex-row justify-between items-center px-6 md:px-16 py-8 ">
        {/* LEFT SECTION */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <i className="fa-solid fa-store text-blue-600"></i>
            <span className="text-blue-600">Templates</span>
            <span>›</span>
            <span className="text-blue-600">Technology</span>
          </div>

          <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Summitra - Technology Website Template
          </h1>

          <div className="flex items-center gap-2 text-gray-700 mt-1">
            <span className="text-blue-600 text-lg">
              <img
                src="https://cdn.prod.website-files.com/5e593fb060cf877cf875dd1f/68d25dd20d2a50c9817cdb54_1758606882855_632107224_Socail.webp"
                alt=""
                width="19px"
                className="rounded-2xl"
              />
            </span>
            <span className="font-medium">Flowdevz</span>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex gap-3 mt-5 md:mt-0">
          <button className="px-9 py-4 shadow-gray-400 rounded-md bg-gradient-to-r from-white via-gray-50 to-gray-100 hover:from-gray-200 hover:via-gray-100 hover:to-gray-200 cursor-pointer shadow-sm text-sm font-medium">
            Preview in browser
          </button>
          <button className="px-9 py-4 shadow-gray-400 rounded-md bg-gradient-to-r from-white via-gray-50 to-gray-100 hover:from-gray-200 hover:via-gray-100 hover:to-gray-200 cursor-pointer shadow-sm text-sm font-medium">
            Preview in Webflow
          </button>
          <button className="px-5 py-2 rounded-md bg-blue-500 hover:bg-blue-600 cursor-pointer text-white font-medium shadow-sm">
            Buy $29 USD
          </button>
        </div>
      </section>

      {/* Scrollable Animation container */}
      <div className="flex justify-center p-7">
        <div
          ref={scrollRef}
          className="w-[1300px] h-[600px] overflow-y-auto scroll-auto rounded-lg shadow-sm shadow-black"
        >
          {/* Pass scrollRef to Animation component */}
          <Animation scrollContainerRef={scrollRef} />
        </div>
      </div>
    </>
  );
};

export default Nav;
