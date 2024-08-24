// src/Demos.js
import React from 'react';
import Slider from 'react-slick';
import YouTube from 'react-youtube';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Demos.css'; // Custom CSS for the slider

const Demos = () => {
  const videoIds = ['-WwphtGgi8w', 'LYQfkTI6SZg', 'vlnowPD7SXM', 'eGghX65-5Hw']; // Replace with your YouTube video IDs

  const videoOptions = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };

  const settings = {
    centerMode: true,
    centerPadding: '0',
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center">
        <header className="text-white py-6 w-full flex justify-center">
          <h1 className="text-4xl font-medium">DEMOS</h1>
        </header>
        <div className="w-full flex justify-center">
          <Slider {...settings} className="w-3/4 custom-slider">
            {videoIds.map((videoId, index) => (
              <div key={index} className="p-4">
                <div className={`video-wrapper ${index === 1 ? 'active' : ''}`}>
                  <YouTube videoId={videoId} opts={videoOptions} />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Demos;
