import React from "react";
import MovieList from "../MovieList/MovieList";
import { useSelector } from "react-redux";

const ListContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className='bg-black'>
      <div className='-mt-0 sm:-mt-24 md:-mt-24 lg:-mt-28 xl:-mt-64 z-20 relative'>
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Trending Movies"} movies={movies.trendingMovies} />
        <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
        <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
      </div>
    </div>
  );
};

export default ListContainer;
