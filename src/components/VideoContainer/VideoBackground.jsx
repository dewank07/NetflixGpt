import React, { useEffect, useState } from "react";
import { API_OPTION } from "../../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addTrailer } from "../../utils/moviesSlice";
import useMovieTrailer from "../../hooks/useMovieTrailer";

const VideoBackground = ({ id }) => {
  const trailer = useSelector((store) => store.movies?.trailerVideo);
  useMovieTrailer(id);
  return (
    <div className='w-full'>
      <iframe
        className='w-full aspect-video'
        src={
          "https://www.youtube.com/embed/" +
          trailer?.key +
          "?autoplay=1&autohide=1&rel=0&showinfo=0&controls=0&loop=1&mute=1"
        }
        title='YouTube video player'
        allowFullScreen
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
      ></iframe>
    </div>
  );
};

export default VideoBackground;
