import React, { useState, useEffect } from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineInstagram } from 'react-icons/ai';
import { CiLinkedin } from 'react-icons/ci';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

const images = [
  '/mnt/data/WhatsApp Image 2024-08-02 at 11.38.15_1de60245.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQDYVGyTF6jBpGqZ_ISe1sp6LkKZjTSSH_xw&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZpSY5HdY1CyRUjhK1iD6ntPvL8Bc29RyXeA&s'
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

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
    <div className="relative w-full h-[500px] md:h-[700px] lg:h-[400px] overflow-hidden bg-gray-900 flex items-center justify-center">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute transition-opacity duration-500 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          } flex items-center justify-center`}
          style={{ width: '100%', height: '100%' }}
        >
          <img
            src={image}
            alt={`Slide ${index}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition duration-300 ${
              index === currentIndex ? 'bg-white' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>

      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl p-2 bg-gray-800 bg-opacity-50 rounded-full"
      >
        <MdKeyboardArrowLeft />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl p-2 bg-gray-800 bg-opacity-50 rounded-full"
      >
        <MdKeyboardArrowRight />
      </button>

      <div className="absolute right-4 bottom-4 flex flex-col items-center space-y-4 p-2 bg-gray-800 bg-opacity-50 rounded-md">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <AiOutlineInstagram className="text-pink-500 text-2xl hover:text-pink-700 transition-colors duration-300" />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebookF className="text-blue-600 text-2xl hover:text-blue-800 transition-colors duration-300" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <CiLinkedin className="text-blue-700 text-2xl hover:text-blue-900 transition-colors duration-300" />
        </a>
      </div>
    </div>
  );
};

export default Slider;
