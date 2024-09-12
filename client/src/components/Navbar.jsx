import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Burgermenu from './Burgermenu';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import logo from "../utils/kritlogo.png";

import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';

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
    { name: "Courses", link: "#" },
    { name: "About Us", link: "aboutus" },  
    { name: "Contact Us", link: "contactus" } ,
    { name: "Features", link: "feature" } ,
    { name: "Demo Videos", link: "demovideos" },
    { name: "Reviews", link: "reviews" },  
  ];

  const courses = [
    { name: "SQL", link: "/courses/SQL" },
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
        hidden: { y: "-145%" }
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed top-0 z-50 w-full bg-white rounded-full shadow-xl cursor-pointer"
    >
      <div className="flex items-center p-2 lg:justify-around sm:justify-between">
        <img src={logo} className="h-16" alt="Logo" />

        {/* Large Screen Menu */}
        <div className="hidden space-x-10 text-black md:flex">
          {header.map((item, index) => (
            <div
              key={index}
              className="relative"
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
              {item.name === "About Us" || item.name === "Contact Us" ||item.name === "Features" ||item.name === "Demo Videos" ||item.name === "Reviews" ? (
                <ScrollLink
                  to={item.link}
                  smooth={true}
                  duration={500}
                  className={`hover:text-blue-600 ${
                    pathname === item.link ? 'text-blue-600' : 'text-black'
                  }`}
                >
                  {item.name}
                </ScrollLink>
              ) : (
                <Link
                  to={item.link}
                  className={`hover:text-blue-600 ${
                    pathname === item.link ? 'text-blue-600' : 'text-black'
                  }`}
                >
                  {item.name}
                </Link>
              )}

              {item.name === "Courses" && (
                <button
                  onClick={() => setIsEditionsOpen(!isEditionsOpen)}
                  className="ml-2 text-lg"
                >
                  {isEditionsOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </button>
              )}

              {item.name === "Courses" && isEditionsOpen && (
                <div className="absolute z-50 grid grid-cols-3 gap-4 p-4 mt-1 bg-white shadow-lg w-[40rem] rounded-lg ">
                  {courses.map((course, idx) => (
                    <Link
                      key={idx}
                      to={course.link}
                      className="block p-2 transition rounded-lg hover:bg-gray-200"
                    >
                      {course.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        
        <div className="left-0 lg:hidden ">
          <Burgermenu header={header} courses={courses}  className=""/>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;