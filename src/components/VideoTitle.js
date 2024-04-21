import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[15%] px-20 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="text-md py-6 w-1/3">{overview}</p>
      <div>
        <button className="bg-white text-black text-lg px-9 p-2 rounded-lg hover:bg-opacity-70">▶️ Play</button> 
        <button className="mx-2 bg-gray-500 text-white text-lg px-7 p-2 rounded-lg bg-opacity-50">More Info</button>
      </div>
    </div>
  );
};
export default VideoTitle;
