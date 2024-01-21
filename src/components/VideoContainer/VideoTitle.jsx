import React from "react";

const VideoTitle = ({ title, desc }) => {
  return (
    <div className='w-full aspect-video pt-[20%] px-10 md:px-24 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-3xl md:text-5xl w-4/12 font-semibold'>{title}</h1>
      <p className='w-9/12 md:w-4/12 pt-4 md:text-lg'>{desc}</p>
      <div className=' pt-10 md:pt-8 flex gap-6 text-white text-sm md:text-base font-semibold'>
        <button className=' px-10 py-2 md:py-3 bg-white rounded-sm shadow-xl text-black cursor-pointer hover:bg-opacity-50'>
          Play
        </button>
        <button className='px-8 py-2 md:py-3 bg-slate-500 rounded-sm shadow-xl cursor-pointer bg-opacity-50 hover:bg-gray-500'>
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
