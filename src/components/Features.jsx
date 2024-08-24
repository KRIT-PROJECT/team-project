import React from 'react';
import { FaChalkboardTeacher, FaLaptop, FaComments, FaRegFileAlt, FaBell, FaFilePdf, FaShieldAlt } from 'react-icons/fa';

const features = [
  { icon: <FaChalkboardTeacher size={40} />, title: 'WORLD-CLASS FACULTY', description: 'Learn from the accomplished teachers with an in-depth understanding of the subject.' },
  { icon: <FaLaptop size={40} />, title: 'CUTTING EDGE CURRICULUM', description: 'Educate yourself with the top-notch study material designed by the EXPERTS.' },
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
    <div className="flex flex-col items-center px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Platform Features</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center p-4 border rounded-lg shadow-lg text-center ease-in duration-200 hover:scale-105">
            <div className="mb-4 text-gray-700">{feature.icon}</div>
            <h2 className="text-xl font-semibold mb-2">{feature.title}</h2>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlatformFeatures;
