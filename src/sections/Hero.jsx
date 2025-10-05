import React from "react";
import Navbar from "../components/Navbar";
import BryanLiked from "../components/BryanLiked";

const Hero = () => {
  return (
    <div className=' min-h-screen  bg-gradient-to-r from-[#f28fcd] via-[#ffd4a5] to-[#f9babb]'>
      {/* LEFT SIDE */}
      <div className='flex flex-col flex-1 justify-center items-center text-center px-6 py-12 lg:px-8'>
        {/* TOP  */}
        <BryanLiked />
        {/* MIDDLE */}
        <div className=''>
          <h1 className='text-white font-bold text-4xl w-1/2'>
            I'm Linda Susan Beauty & Lifestyle Influencer
          </h1>
        </div>
        {/* BOTTOM */}
        <div className=''></div>
      </div>
      {/* RIGHT SIDE */}
      <div className='flex gap-2 items-center'>
        <button className='bg-blue-500 text-white px-4 py-2 rounded'>
          Button 1
        </button>
        <button className='bg-blue-500 text-white px-4 py-2 rounded'>
          Button 2
        </button>
      </div>
    </div>
  );
};

export default Hero;
