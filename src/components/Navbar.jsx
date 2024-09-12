import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Burgermenu from './Burgermenu';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import logo from "../utils/kritlogo.png";
import { MdOutlinePhoneInTalk, MdOutlineMailOutline } from "react-icons/md";
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
    { name: "Courses", link: "courses" },
    { name: "About Us", link: "aboutus" },  // Use section ID
    { name: "Contact Us", link: "contactus" }  // Use section ID
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
      className="fixed top-0 z-50 w-full bg-white shadow-xl cursor-pointer"
    >
      <div className="flex items-center justify-between p-4">
        <img src={logo} className="h-16" alt="Logo" />

        {/* Large Screen Menu */}
        <div className="hidden md:flex space-x-10 text-black">
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
              {item.name === "About Us" || item.name === "Contact Us" ? (
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
                <div className="absolute z-10 grid grid-cols-3 gap-4 p-4 mt-2 bg-white shadow-lg w-[40rem] rounded-lg">
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

        {/* Contact Information */}
        <div className="hidden md:flex flex-col text-[12px] items-end space-y-2">
          <h1 className="flex items-center">Contact</h1>
          <p className="flex items-center gap-1">
            <MdOutlinePhoneInTalk />
            +91 123456789
          </p>
          <p className="flex items-center gap-1">
            <MdOutlineMailOutline />
            <a href="mailto:21pa1a1289@vishnu.edu.in">
              21pa1a1289@vishnu.edu.in
            </a>
          </p>
        </div>

        {/* Burger Menu for Small Screens */}
        <div className="md:hidden">
          <Burgermenu header={header} courses={courses}  className="text-black"/>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
