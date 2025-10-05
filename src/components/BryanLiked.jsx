const BryanLiked = () => {
  return (
    <div className='relative'>
      <div className='flex items-center py-1 px-2 bg-white rounded-4xl shadow-md w-[164px]'>
        {/* Profile Picture */}
        <div className='flex-shrink-0'>
          <div className='w-10 h-10 rounded-full flex items-center justify-center'>
            <img src='bryandp.png' alt='Bryan' />
          </div>
        </div>

        {/* Text Content - Left aligned starting right after image */}
        <div className='flex-1 ml-3 text-left'>
          <p className='text-gray-400 text-[15px] leading-tight font-[450] '>Bryan has</p>
          <p className='text-gray-400 text-[15px] leading-tight font-[450]'>liked</p>
        </div>
      </div>
      <div className='absolute -top-2 right-1.5'>
        <img className='w-7 h-7 rounded-full' src='love.svg' alt='love' />
      </div>
    </div>
  );
};

export default BryanLiked;
