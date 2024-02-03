import React from "react";

const VideoTitle = ({ title, desc }) => {
  return (
    <div className='w-full aspect-video pt-[25%] sm:pt-[10%] md:pt-[20%] lg:pt-[22%] xl:pt-[25%] px-10 md:px-24 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-lg sm:text-2xl md:text-3xl xl:text-5xl w-8/12 md:w-11/12 font-semibold'>
        {title}
      </h1>
      <p className='hidden sm:block w-11/12 lg:w-10/12 pt-3 md:text-sm lg:text-base'>
        {desc}
      </p>
      <div className=' pt-2 md:pt-2 lg:pt-8 flex gap-6 text-white text-xs sm:text-sm md:text-base font-semibold'>
        <button className='px-5 sm:px-10 py-1 lg:py-3 bg-white rounded-md shadow-xl text-black cursor-pointer hover:bg-opacity-50'>
          Play
        </button>
        <button className='px-4 sm:px-8 py-1 lg:py-3 bg-slate-500 rounded-md shadow-xl cursor-pointer bg-opacity-50 hover:bg-gray-500'>
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
