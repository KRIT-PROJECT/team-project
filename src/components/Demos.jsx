import React, { useState } from 'react';
import YouTube from 'react-youtube';

const Media = () => {
  const [playingVideo, setPlayingVideo] = useState(null);

  const videoData = [
    {
      id: 1,
      videoId: '43ChifYSMQA',
      title: 'Video Title 1',
      description: 'Description for Video 1',
    },
    {
      id: 2,
      videoId: 'ACIno1jh-ZQ',
      title: 'Video Title 2',
      description: 'Description for Video 2',
    },
    {
      id: 3,
      videoId: 'wX78iKhInsc',
      title: 'Video Title 3',
      description: 'Description for Video 3',
    },
    {
      id: 4,
      videoId: 'hg3umXU_qWc',
      title: 'Video Title 4',
      description: 'Description for Video 4',
    },
    {
      id: 5,
      videoId: '0NV1KdWRHck',
      title: 'Video Title 5',
      description: 'Description for Video 5',
    },
  ];

  const opts = {
    height: '230',
    width: '400',
    playerVars: {
      autoplay: 0, // Change to 1 if you want to autoplay
    },
  };

  const handleThumbnailClick = (videoId) => {
    setPlayingVideo(videoId);
  };

  return (
    <>

    <div className='my-20'>
      <h1 className='flex justify-center items-center font-bold text-3xl text-black my-8'>DEMOS</h1>
      <div className="flex justify-center items-center p-4 flex-wrap w-[83%] m-auto gap-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 ">
        {videoData.map((video) => (
          <div key={video.id} className="relative group">
            {playingVideo === video.videoId ? (
              <YouTube videoId={video.videoId} opts={opts} />
            ) : (
              <div
                className="cursor-pointer overflow-hidden shadow-lg transition-transform transform group-hover:scale-105"
                onClick={() => handleThumbnailClick(video.videoId)}
              >
                <img
                  src={`https://img.youtube.com/vi/${video.videoId}/0.jpg`}
                  alt={video.title}
                  className="w-full h-56 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 transition-opacity group-hover:opacity-100">
                  <span className="text-white text-xl font-bold">{video.title}</span>
                  <span className="text-white text-sm text-center p-2">{video.description}</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    </div>
    </>
  );
};

export default Media;