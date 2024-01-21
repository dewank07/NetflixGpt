import React from "react";
import { IMG_CDN_URL } from "../../utils/constant";
import { useSelector } from "react-redux";

const MovieCard = ({ posterPath, title, date }) => {
  if (!posterPath) return null;
  const gptPage = useSelector((state) => state.gpt.showGptSearch);
  return (
    <div>
      <div className='w-48 h-72 md:w-52 md:h-80 hover:scale-105 ease-in-out rounded-md my-4 '>
        <img
          src={IMG_CDN_URL + posterPath}
          alt='Movie-Poster'
          className='rounded-md'
        />
      </div>

      {gptPage && (
        <div className='w-48 md:w-52 overflow-hidden flex flex-col items-center justify-center'>
          <div className='text-center'>{title}</div>
          <div className='text-yellow-400'>{date}</div>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
