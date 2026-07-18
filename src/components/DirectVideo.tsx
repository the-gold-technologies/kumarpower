import React from "react";

const DriveEmbedVideo: React.FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <iframe
        src="https://drive.google.com/file/d/1IGnRZcLTq-ozHbA3tYG90F-zYHrtHz4F/preview"
        className="absolute inset-0 w-full h-full"
        allow="autoplay"
      ></iframe>
    </div>
  );
};

export default DriveEmbedVideo;
