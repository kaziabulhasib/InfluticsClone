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
      <div className='flex gap-2 items-center ml-8'>
        <button className='text-white px-6 py-3 rounded-lg font-medium text-lg transition-all duration-300 ease-in-out bg-gradient-to-r from-[#fe9f54] to-[#f73197] hover:bg-gradient-to-r hover:from-[#f73197] hover:to-[#fe9f54]  shadow-md hover:shadow-lg  active:shadow-sm'>
          About me
        </button>
        <button className='bg-none hover:bg-[#f73197] border-gradient-to-r from-[#f28fcd] to-white border-1 hover:border-none  text-white px-6 py-3 rounded-lg  font-medium text-lg transition-all duration-300 ease-in-out  shadow-md hover:shadow-lg  active:shadow-sm'>
          Contact me
        </button>
      </div>
    </div>
  );
};

export default Hero;
