import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestion from "./GPTMovieSuggestion";
import { BG_IMAGE } from "../../utils/constant";

const GPTSearch = () => {
  return (
    <div>
      <div className='fixed -z-10'>
        <img
          className='h-screen md:h-auto object-cover '
          src={BG_IMAGE}
          alt='logo'
        />
      </div>
      <div className='pt-[10%] md:pt-[5%] lg:pt-0'>
        <GPTSearchBar />
        <GPTMovieSuggestion />
      </div>
    </div>
  );
};

export default GPTSearch;
