import { useParams } from "react-router-dom";
import courseData from "../utils/courseData.json";
import { FaPlus, FaMinus } from "react-icons/fa";
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
    <div className="flex flex-col justify-around px-4 py-12 md:px-10 md:py-20">
      {filteredCourseData.map((data) => (
        <div
          key={data.id}
          className="flex flex-col gap-10 mx-auto mt-10 mb-10 md:flex-row md:items-start max-w-7xl"
        >
          {/* Left Column - Course Details */}
          <div className="flex items-start flex-col w-full md:w-[60%]">
            <h1 className="mb-6 text-3xl font-semibold md:text-4xl">
              {data.title}
            </h1>

            <div className="flex flex-col gap-8 mb-6 md:flex-row">
              <div className="p-4">
                <p className="text-gray-600 uppercase">Duration</p>
                <p className="text-lg font-bold">{data.DURATION}</p>
              </div>
              <div className="p-4">
                <p className="text-gray-600 uppercase">Mode of Training</p>
                <p className="text-lg font-bold">{data.ModeofTraining}</p>
              </div>
              <div className="p-4">
                <p className="text-gray-600 uppercase">Level</p>
                <p className="text-lg font-bold">{data.LEVEL}</p>
              </div>
            </div>

            <div className="flex flex-col items-start justify-start w-full">
              <h2 className="mb-4 text-xl font-semibold">
                What is {data.title}?
              </h2>
              <p className="text-base leading-7 text-justify text-gray-800">
                {data.description}
              </p>
            </div>

            {/* Accordion Section */}
            <div className="w-full py-6">
              <h1 className="p-3 text-2xl font-bold text-left ">
                {data.title} Course Curriculum
              </h1>
              {data.topics.map((topic, index) => (
                <div key={index} className="w-full mb-2">
                  <button
                    className="flex items-center justify-between w-full gap-6 p-3 bg-gray-100 shadow-md"
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

          {/* Right Column - YouTube Video via iframe */}
          <div className="w-full md:w-[40%] flex justify-center x-sm:w-[70%]">
            <div className="w-full h-auto md:w-[90%] lg:w-[80%]">
              <iframe
                width="120%"
                height="300"
                src='https://www.youtube.com/embed/43ChifYSMQA'
                title={data.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseContent;
