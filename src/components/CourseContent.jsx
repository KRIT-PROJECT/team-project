import { useParams } from "react-router-dom";
import courseData from "../utils/courseData.json";
import { FaPlus, FaMinus } from "react-icons/fa"; // Adding FaMinus icon for collapse state
import { useState } from "react";

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
    <div className="px-10 py-20  flex flex-col">
      {filteredCourseData.map((data) => (
        <div
          key={data.id}
          className="w-full max-w-3xl mb-10 mt-10 flex flex-col items-start"
        >
          <h1 className="text-4xl font-semibold mb-6">{data.title}</h1>

          <div className="flex gap-8 mb-6">
            <div className="p-4">
              <p className="text-gray-600 uppercase">Duration</p>
              <p className="font-bold text-lg">{data.DURATION}</p>
            </div>
            <div className="p-4">
              <p className="text-gray-600 uppercase">Mode of Training</p>
              <p className="font-bold text-lg">{data.ModeofTraining}</p>
            </div>
            <div className="p-4">
              <p className="text-gray-600 uppercase">Level</p>
              <p className="font-bold text-lg">{data.LEVEL}</p>
            </div>
          </div>

          <div className="w-full flex flex-col justify-start items-start">
            <h2 className="font-semibold text-xl mb-4">
              What is {data.title}?
            </h2>
            <p className="text-base leading-7 text-gray-800 text-justify">
              {data.description}
            </p>
          </div>

          {/* Accordions */}
          <div className="w-full py-6">
            <h1 className=" text-left p-3 text-2xl font-bold">{data.title} Course Curriculum</h1>
            {data.topics.map((topic, index) => (
              <div key={index} className="w-full mb-2">
                <button
                  className="flex items-center shadow-md p-3 w-full gap-6 justify-between bg-gray-100"
                  onClick={() => toggleMenuVisibility(index)}
                >
                  <div className="flex items-center gap-6">
                    {menuVisibility[index] ? <FaMinus /> : <FaPlus />}
                    <div>{topic.name}</div>
                  </div>
                </button>
                {menuVisibility[index] && (
                  <div className="p-4 shadow-md">{topic.description}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseContent;