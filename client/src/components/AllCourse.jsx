import { useRef } from "react";
import CourseCard from "./CourseCard";
import { FaGreaterThan, FaLessThan } from "react-icons/fa6";


const Courses = () => {
  const CourseData = [
    {
      title: "SNOWFLAKE",
      Stars: 4,
      Image:
        "https://static.vecteezy.com/system/resources/previews/000/581/878/original/snowflake-icon-vector-illustration.jpg",
    },
    { title: "SQL", Stars: 3, Image: "https://logodix.com/logo/541959.jpg" },
    {
      title: "PYTHON",
      Stars: 5,
      Image:
        "https://logohistory.net/wp-content/uploads/2023/06/Python-Emblem.png",
    },
    {
      title: "JAVA",
      Stars: 4,
      Image: "https://logos-world.net/wp-content/uploads/2022/07/Java-Logo.png",
    },
    {
      title: "C++",
      Stars: 3,
      Image: "https://sdtimes.com/wp-content/uploads/2018/03/cpppp.png",
    },
    {
      title: "REACT",
      Stars: 2,
      Image: "https://clipground.com/images/react-js-clipart-8.png",
    },
  ];

  const scrollContainer = useRef(null);
  const width = 240;

  const scrollLeft = () => {
    scrollContainer.current.scrollBy({
      left: -width,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollContainer.current.scrollBy({
      left: width,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="py-[20vh] ">
        <div>
          <h1 className="flex items-center justify-center text-3xl font-bold text-black ">
            ALL COURSES
          </h1>
        </div>
        <div className="flex items-center justify-center gap-8 py-3">
          <button className="p-2 bg-blue-700 rounded-full" onClick={scrollLeft}>
            <FaLessThan color="white" size="2em" />
          </button>
          <button
            className="p-2 bg-blue-700 rounded-full"
            onClick={scrollRight}
          >
            <FaGreaterThan color="white" size="2em" />
          </button>
        </div>
        <div className="relative">
          <div className="flex justify-start items-center p-4 overflow-x-auto snap-x snap-mandatory w-[90%] m-auto gap-10 scroll-container"  ref={scrollContainer}>
            {CourseData.map((course, index) => (
              <div className="snap-center shrink-0" key={index}>
                <CourseCard
                  title={course.title}
                  Stars={course.Stars}
                  Image={course.Image}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;