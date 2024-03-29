import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const VideoContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return; // early return
  const mainMovies = movies[0];
  const { original_title, overview, id } = mainMovies;
  return (
    <div>
      <VideoTitle title={original_title} desc={overview} />
      <VideoBackground id={id} />
    </div>
  );
};
export default VideoContainer;
