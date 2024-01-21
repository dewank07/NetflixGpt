import React, { useEffect } from "react";
import Header from "../Header/Header";
import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";
import VideoContainer from "../VideoContainer/VideoContainer";
import ListContainer from "../ListContainer/ListContainer";
import useTrendingMovies from "../../hooks/useTrendingMovies";
import useUpcomingMovies from "../../hooks/useUpcomingMovies";
import useTopRatedMovies from "../../hooks/useTopRatedMovies";
import GPTSearch from "../GPTSearch/GPTSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  useNowPlayingMovies();
  useTrendingMovies();
  useUpcomingMovies();
  useTopRatedMovies();
  const gptToggle = useSelector((store) => store.gpt.showGptSearch);
  return (
    <div className=''>
      <Header />
      {gptToggle ? (
        <GPTSearch />
      ) : (
        <div className='pt-[22%] md:pt-0 bg-black'>
          <VideoContainer />
          <ListContainer />
        </div>
      )}
    </div>
  );
};

export default Browse;
