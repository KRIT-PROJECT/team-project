import { useState } from "react";
import { IoChevronBackCircle } from "react-icons/io5";
import { MdOutlineKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { TfiYoutube } from "react-icons/tfi";
import { Link, useParams } from "react-router-dom";
import courseData from "../utils/courseData.json";

const CourseContent = () => {
  const { title } = useParams();

  const filteredCourseData = courseData.filter(
    (course) => course.title.toLowerCase() === title.toLowerCase()
  );

  const [menuVisibility, setMenuVisibility] = useState({});

  const toggleMenuVisibility = (index) => {
    setMenuVisibility((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div className="flex h-screen">
      {filteredCourseData.map((data) => (
        <div
          key={data.id}
          className="w-3/5 bg-[#202767] p-5 relative flex flex-col justify-center"
        >
          <div className="absolute top-5 left-5">
            <Link to={"/"}>
              <IoChevronBackCircle color="white" size="2.7em" />
            </Link>
          </div>
          <div className="mt-16 mb-9">
            <h1 className="text-center font-bold text-4xl text-white">
              {data.title}
            </h1>
          </div>
          <div className="flex flex-col items-center gap-10">
            {data.topics.map((topic, index) => (
              <div
                key={index}
                className="bg-[#0E1663] w-3/4 p-2 rounded-lg flex flex-col items-center"
              >
                <button
                  className="flex items-center w-full px-4 justify-center"
                  onClick={() => toggleMenuVisibility(index)}
                >
                  {menuVisibility[index] ? (
                    <MdOutlineKeyboardArrowUp color="white" size="2em" />
                  ) : (
                    <MdKeyboardArrowDown color="white" size="2em" />
                  )}
                  <h1 className="text-white text-lg font-bold">{topic.name}</h1>
                </button>
                <div
                  className={`w-full overflow-hidden transition-all duration-300 ${
                    menuVisibility[index] ? "max-h-screen" : "max-h-0"
                  }`}
                >
                  {menuVisibility[index] && (
                    <div className="w-4/5 p-2 m-auto bg-[#0E1663] rounded-lg">
                      <p className="text-white text-center">
                        {topic.description}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className="w-2/5 p-8 flex flex-col gap-10 justify-center items-center">
        {filteredCourseData.map((data) => (
          <div key={data.id} className="p-3 border-none bg-none">
            <img
              src={data.image}
              alt={data.title}
              className="w-full h-40 md:h-80 lg:h-60 object-cover rounded-md border-none bg-none"
            />
          </div>
        ))}
        <div className="w-3/4 h-40 bg-[#202767] flex flex-col gap-10 justify-center items-center rounded-xl">
          <h1 className="text-white font-bold text-xl">FORM</h1>
          <button className="text-white font-bold text-lg bg-[#1E163B] py-2 px-8">
            LINK
          </button>
        </div>
        <div className="w-3/4 h-40 bg-[#202767] flex justify-center items-center rounded-xl">
          <button>
            <TfiYoutube size="8em" color="white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseContent;
