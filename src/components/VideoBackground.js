import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useMovieTrailer(movieId);
  
  return (
    <div className="">
      <iframe
        // width="560"
        // height="315"
        className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/"+trailerVideo?.key +"??&autoplay=1&mute=1"}
        title="YouTube video player"
        // frameBorder="0"
        aut
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        // allowFullscreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
