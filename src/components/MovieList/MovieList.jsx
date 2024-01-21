import React from "react";
import MovieCard from "../MovieCard/MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className='px-6 pb-6'>
      <h1 className='text-2xl py-3 text-white'>{title}</h1>
      <div className='flex overflow-x-scroll scrollFix'>
        <div className='flex gap-6'>
          {movies?.map((movie) => (
            <MovieCard
              key={movie.id}
              posterPath={movie.poster_path}
              title={movie.original_title}
              date={movie.release_date}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
