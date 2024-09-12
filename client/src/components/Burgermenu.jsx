import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll'; // Import from react-scroll
import { Link } from 'react-router-dom'; // Import from react-router-dom for navigation
import { RxHamburgerMenu, RxCross2 } from 'react-icons/rx';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const Burgermenu = ({ header, courses }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);

  return (
    <div>
      
      <div className="p-4 md:hidden">
        <button
          className={`text-2xl focus:outline-none ${isMenuOpen ? 'text-white' : 'text-black'}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <RxCross2 /> : <RxHamburgerMenu />}
        </button>
      </div>

     
      <div
        className={`fixed inset-0 z-20 flex flex-col p-5 bg-gray-900 bg-opacity-95 transition-transform transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden max-w-xs`}
      >
       
        <div className="absolute top-0 right-0 p-5">
          <button className="text-2xl text-white focus:outline-none" onClick={() => setIsMenuOpen(false)}>
            <RxCross2 />
          </button>
        </div>

        
        <div className="mt-8 space-y-4">
          {header.map((item, index) => (
            <div key={index} className="py-2 border-b border-gray-700">
              <div className="flex items-center justify-between">
                
                {item.name === "About Us" || item.name === "Contact Us" || item.name === "Features" || item.name === "Demo Videos" || item.name === "Reviews" ? (
                  <ScrollLink
                    to={item.link} // The ID of the section you want to scroll to
                    smooth={true}
                    duration={500}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-lg font-semibold text-white cursor-pointer hover:text-gray-300"
                  >
                    {item.name}
                  </ScrollLink>
                ) : (
                 
                  <Link
                    to={item.link}
                    className="text-lg font-semibold text-white hover:text-gray-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
                
                
                {item.name === "Courses" && (
                  <button
                    onClick={() => setIsCoursesOpen(!isCoursesOpen)}
                    className="ml-2 text-lg text-white focus:outline-none"
                  >
                    {isCoursesOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </button>
                )}
              </div>

              {/* Courses Dropdown List */}
              {item.name === "Courses" && isCoursesOpen && (
                <div className={`flex flex-col gap-4`}>
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

      {/* Overlay Background */}
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
