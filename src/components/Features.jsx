import React from 'react';
import { FaChalkboardTeacher, FaLaptop, FaComments, FaRegFileAlt, FaBell, FaFilePdf, FaShieldAlt } from 'react-icons/fa';

const features = [
  { icon: <FaChalkboardTeacher size={40} />, title: 'WORLD-CLASS FACULTY', description: 'Learn from accomplished teachers with an in-depth understanding of the subject.' },
  { icon: <FaLaptop size={40} />, title: 'CUTTING EDGE CURRICULUM', description: 'Educate yourself with top-notch study material designed by the EXPERTS.' },
  { icon: <FaLaptop size={40} />, title: 'LIVE CLASSES', description: 'Learn concepts, practice questions & get your doubts cleared instantly in the LIVE Classes.' },
  { icon: <FaComments size={40} />, title: 'STUDENT DISCUSSION FORUM', description: 'Get access to 24*7 Live Discussion group with batchmates & faculties.' },
  { icon: <FaRegFileAlt size={40} />, title: 'QUIZ & ASSIGNMENTS', description: 'Practice chapter-wise Quizzes & solve Assignments to learn and revise concepts.' },
  { icon: <FaLaptop size={40} />, title: 'VIDEO LECTURES', description: 'Learn through high-quality & easy to understand video lectures.' },
  { icon: <FaFilePdf size={40} />, title: 'E-BOOKS', description: 'Get Important topics & formulas for last-minute revision in the PDF format.' },
  { icon: <FaBell size={40} />, title: 'ALERT & NOTIFICATION', description: 'Stay up to date & get notified every time the course content is updated.' },
  { icon: <FaShieldAlt size={40} />, title: 'TRUSTED CONTENT', description: 'Learn from the comprehensive & interactive course content.' },
];

const PlatformFeatures = () => {
  return (
    <div className="px-4 py-10 sm:px-10 md:px-20 lg:px-48">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Platform Features</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center p-6 border border-gray-200 rounded-lg shadow-lg text-center hover:shadow-xl transition-transform transform hover:scale-105"
          >
            <div className="mb-4 text-blue-600">{feature.icon}</div>
            <h2 className="text-lg md:text-xl font-semibold mb-2">{feature.title}</h2>
            <p className="text-gray-600 text-sm md:text-base">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlatformFeatures;
