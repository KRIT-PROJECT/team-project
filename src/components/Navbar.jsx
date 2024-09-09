import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Burgermenu from './Burgermenu';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import logo from "../utils/kritlogo.png";
import { MdOutlinePhoneInTalk, MdOutlineMailOutline } from "react-icons/md";
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

const Navbar = () => {
  const [isEditionsOpen, setIsEditionsOpen] = useState(false);
  const location = useLocation();
  const { pathname } = location;

  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 20) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

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
    <motion.div 
      variants={{
        visible: { y: 0 },
        hidden: { y: "" }
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed z-50 flex flex-col w-full bg-black" // Ensure full width and background color
    >
      <div className="flex flex-row items-center justify-around font-bold text-white sm:p-4 rounded-[10px]">
        <div className='md:text-[] sm:w-[20rem]'>
          <img src={logo} className='h-2' alt="Logo" />
        </div>
        <div className="flex flex-row justify-center items-center sm:text-[18px] sm:space-x-10 xsm:space-x-2 xsm:text-[10px]">
          {header.map((item, index) => (
            <div
              key={index}
              className="relative sm:hidden md:flex"
              onMouseEnter={() => {
                if (item.name === "Courses") {
                  setIsEditionsOpen(true);
                }
              }}
              onMouseLeave={() => {
                if (item.name === "Courses") {
                  setIsEditionsOpen(false);
                }
              }}
            >
              <Link to={item.link} className={`text-white hover:text-blue-600 ${pathname === item.link ? 'text-blue-600' : 'text-white'}`}>
                {item.name}
              </Link>
              {item.name === "Courses" && (
                <button
                  onClick={() => setIsEditionsOpen(!isEditionsOpen)}
                  className="ml-2 text-lg text-white focus:outline-none"
                >
                  {isEditionsOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </button>
              )}
              {item.name === "Courses" && isEditionsOpen && (
                <div className="absolute z-10 grid grid-cols-3 p-3 mt-2 transform -translate-x-1/2 bg-white text-black w-[40rem] shadow-lg top-[1.2rem] left-1/2 rounded">
                  {courses.map((course, idx) => (
                    <Link key={idx} to={course.link} className="block p-3 rounded transition hover:bg-gray-200">
                      {course.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className='p-2 text-[12px] justify-start border-l flex flex-col'>
          <h1 className='flex justify-start items-center'>Contact</h1>
          <div className='flex flex-col justify-center'>
            <p className='flex gap-1 justify-start items-center'><MdOutlinePhoneInTalk />+91 123456789</p>
            <p className='flex gap-1 justify-center items-center'><MdOutlineMailOutline /><a href="mailto:21pa1a1289@vishnu.edu.in">21pa1a1289@vishnu.edu.in</a></p>
          </div>
        </div>
        <div className="laptop:hidden">
          <Burgermenu header={header} courses={courses} />
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
