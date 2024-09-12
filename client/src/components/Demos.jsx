import React, { useState } from 'react';

const Media = () => {
  const [playingVideoId, setPlayingVideoId] = useState(null);

  const videoData = [
    { id: 1, src: 'https://www.youtube.com/embed/43ChifYSMQA' },
    { id: 2, src: 'https://www.youtube.com/embed/ACIno1jh-ZQ' },
    { id: 3, src: 'https://www.youtube.com/embed/wX78iKhInsc' },
    { id: 4, src: 'https://www.youtube.com/embed/hg3umXU_qWc' },
    { id: 5, src: 'https://www.youtube.com/embed/0NV1KdWRHck' },
  ];

  const handleThumbnailClick = (id) => {
    setPlayingVideoId(id); // Set the clicked video as playing
  };

  return (
    <div className="py-[10vh]" id='demovideos'>
      <h1 className="flex items-center justify-center p-8 text-3xl font-bold text-black">Demo Videos</h1>
      <div className="grid grid-cols-3 gap-8 sm:grid-cols-2 lg:grid-cols-3 x-sm:grid-cols-1 w-[83%] mx-auto">
        {videoData.map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group"
          >
            {playingVideoId === item.id ? (
              <iframe
                src={item.src}
                title={`video-${item.id}`}
                className="w-full h-[15rem]"
                allowFullScreen
              ></iframe>
            ) : (
              <div
                onClick={() => handleThumbnailClick(item.id)} // Click event to play video
                className="cursor-pointer"
              >
                <img
                  src={`https://img.youtube.com/vi/${item.src.split('/embed/')[1]}/0.jpg`}
                  alt={`video-${item.id}`}
                  className="w-full h-[15rem] object-cover"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Media;
