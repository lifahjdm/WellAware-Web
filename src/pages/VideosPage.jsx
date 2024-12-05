import React from "react";
import useFetch from "../hooks/useFetch";

const VideosPage = () => {
  const {
    data: videosData,
    loading,
    error,
  } = useFetch("/data/who_videos.json");

  if (loading) {
    return <div className="text-center mt-32">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 mt-32">Error: {error}</div>;
  }

  return (
    <div className="p-10 mx-auto mt-32 container">
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Videos
      </h1>
      {videosData?.map((video, index) => (
        <div className="flex flex-col lg:flex-row gap-6" key={index}>
          <iframe
            className="mb-4 rounded-xl"
            width={300}
            height={200}
            src={video.link}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className="">
            <h1 className="text-2xl font-semibold mb-2">{video.title}</h1>
            <p className="mb-4">{video.subtitle}</p>
            <p className="text-sm text-gray-600">{video.channel}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideosPage;
