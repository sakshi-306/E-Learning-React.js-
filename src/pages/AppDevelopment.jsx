import React, { useState } from 'react';
import v1 from "../assets/v1.mp4";

const AppDevelopment = () => {
  const [unlockedVideos, setUnlockedVideos] = useState([0]); // First video is unlocked

  const videos = [
    { title: "Session 1", src: v1 },
    { title: "Session 2", src: v1 },
    { title: "Session 3", src: v1 },
  ];

  const handleEnded = (index) => {
    if (index + 1 < videos.length) {
      setUnlockedVideos((prev) => [...new Set([...prev, index + 1])]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-6">
        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-4">App Development Course</h1>
        <p className="text-center text-gray-700 mb-6">
          {unlockedVideos.length} of {videos.length} videos completed
        </p>

        <div className="space-y-6">
          {videos.map((video, index) => (
            <div key={index} className="border border-gray-300 rounded-md p-4">
              <h3 className="text-xl font-semibold mb-2">{video.title}</h3>

              {unlockedVideos.includes(index) ? (
                <>
                  <video
                    width="100%"
                    controls
                    className="rounded-lg mb-2"
                    onEnded={() => handleEnded(index)}
                  >
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <p className={`text-sm font-medium ${unlockedVideos.includes(index + 1) ? 'text-green-600' : 'text-yellow-600'}`}>
                    {unlockedVideos.includes(index + 1) ? " Completed" : " In Progress"}
                  </p>
                </>
              ) : (
                <p className="text-red-500 font-medium"> Locked. Watch previous video to unlock.</p>
              )}
            </div>
          ))}
        </div>

        {unlockedVideos.length === videos.length && (
          <div className="mt-8 text-center">
            <h2 className="text-2xl font-bold text-green-600 mb-4"> Congratulations! You've completed the course.</h2>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded">
              Download Certificate
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppDevelopment;
