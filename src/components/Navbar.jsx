import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Burgermenu from './Burgermenu';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

// Define the Navbar component
const Navbar = () => {
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);

  // Define header items and courses for the navigation menu
  const header = [
    { name: "Home", link: "/" },
    { name: "Courses", link: "/Courses" },
    { name: "About Us", link: "/AboutUs" },
    { name: "Contact Us", link: "/Contactus" }
  ];

  const courses = [
    { name: "Course 1", link: "/Courses/1" },
    { name: "Course 2", link: "/Courses/2" },
    { name: "Course 3", link: "/Courses/3" },
    { name: "Course 4", link: "/Courses/4" },
    { name: "Course 5", link: "/Courses/5" },
    { name: "Course 6", link: "/Courses/6" },
    { name: "Course 7", link: "/Courses/7" },
    { name: "Course 8", link: "/Courses/8" },
    { name: "Course 9", link: "/Courses/9" },
    { name: "Course 10", link: "/Courses/10" }
  ];

  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center justify-between font-bold text-white bg-black sm:p-8">
        <div className='lg:text-2xl '>
          <p>KRISHNA SHIFT</p>
        </div>
        <div className="flex flex-row items-center md:text-xl md:space-x-14 sm:space-x-2 phone:text-[10px] ">
          {header.map((item, index) => (
            <div
              key={index}
              className="relative sm:hidden md:flex"
              onMouseEnter={() => item.name === "Courses" && setIsCoursesOpen(true)}
              onMouseLeave={() => item.name === "Courses" && setIsCoursesOpen(false)}
            >
              <Link to={item.link} className="text-white hover:text-gray-300">
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
              {item.name === "Courses" && isCoursesOpen && (
                <div className="absolute z-10 grid grid-cols-3 p-5 mt-2 transform -translate-x-1/2 bg-white text-black w-[40rem] shadow-lg top-full left-1/2">
                  {courses.map((course, idx) => (
                    <Link key={idx} to={course.link} className="block p-3 transition hover:bg-gray-200">
                      {course.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="sm:hidden">
            <Burgermenu header={header} courses={courses} />
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Navbar;