// Import necessary dependencies
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RxHamburgerMenu, RxCross2 } from 'react-icons/rx';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

// Define the Burgermenu component
const Burgermenu = ({ header, courses }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);

  return (
    <div>
      <div className="p-4 md:hidden">
        <button
          className="text-2xl text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <RxCross2 /> : <RxHamburgerMenu />}
        </button>
      </div>
      <div
        className={`fixed inset-0 z-20 flex flex-col p-5 text-white bg-gray-900 bg-opacity-95 transition-transform transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } md:hidden max-w-xs`}
      >
        <div className="absolute top-0 right-0 p-5">
          <button
            className="text-2xl focus:outline-none"
            onClick={() => setIsMenuOpen(false)}
          >
            <RxCross2 />
          </button>
        </div>
        <div className="mt-8 space-y-4">
          {header.map((item, index) => (
            <div key={index} className="py-2 border-b border-gray-700">
              <div className="flex items-center justify-between">
                <Link
                  to={item.link}
                  className="text-lg font-semibold text-white hover:text-gray-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.name === "Courses" && (
                  <button
                    onClick={() => setIsCoursesOpen(!isCoursesOpen)}
                    className="ml-2 text-lg text-white focus:outline-none"
                  >
                    {isCoursesOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </button>
                )}
              </div>
              {item.name === "Courses" && isCoursesOpen && (
                <div className={`flex flex-col gap-4 `}>
                  {courses.map((course, idx) => (
                    <Link
                      key={idx}
                      to={course.link}
                      className="pl-5 text-sm text-gray-300 hover:text-white"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {course.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-10 transition-opacity duration-300 bg-black opacity-50"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </div>
  );
};

export default Burgermenu;
