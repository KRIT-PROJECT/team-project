import React, { useState, useEffect } from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineInstagram } from 'react-icons/ai';
import { CiLinkedin } from 'react-icons/ci';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

const images = [
  'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1661416307260-5013ab7adc3f?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); 

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full h-[500px] x-sm:h-[750px] sm:h-[700px] md:h-[700px] lg:h-[700px] overflow-hidden flex my-6 items-center justify-center mx-auto rounded-lg shadow-xl">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute transition-opacity duration-700 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          } flex items-center justify-center w-full h-full`}
        >
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
      ))}

      <div className="absolute flex space-x-2 transform -translate-x-1/2 bottom-4 sm:bottom-8 left-1/2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition duration-500 ${
              index === currentIndex ? 'bg-white' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>

      <button
        onClick={goToPrevious}
        className="absolute p-2 text-3xl text-white transition-colors duration-300 transform -translate-y-1/2 bg-gray-800 rounded-full sm:p-3 sm:text-5xl bg-opacity-60 left-2 sm:left-6 top-1/2 hover:bg-opacity-80"
      >
        <MdKeyboardArrowLeft />
      </button>

      <button
        onClick={goToNext}
        className="absolute p-2 text-3xl text-white transition-colors duration-300 transform -translate-y-1/2 bg-gray-800 rounded-full sm:p-3 sm:text-5xl bg-opacity-60 right-2 sm:right-6 top-1/2 hover:bg-opacity-80"
      >
        <MdKeyboardArrowRight />
      </button>

      <div className="absolute flex flex-col items-center p-3 space-y-3 bg-gray-900 bg-opacity-50 rounded-lg shadow-lg sm:p-4 sm:space-y-4 right-2 sm:right-8 bottom-2 sm:bottom-8">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <AiOutlineInstagram className="text-xl text-pink-500 transition-colors duration-300 sm:text-3xl hover:text-pink-700" />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebookF className="text-xl text-blue-600 transition-colors duration-300 sm:text-3xl hover:text-blue-800" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <CiLinkedin className="text-xl text-blue-700 transition-colors duration-300 sm:text-3xl hover:text-blue-900" />
        </a>
      </div>
    </div>
  );
};

export default Slider;
