const BryanLiked = () => {
  return (
    <div className='relative'>
      <div className='flex items-center justify-center py-1 px-2 bg-white rounded-4xl shadow-md w-44 '>
        {/* Profile Picture */}
        <div className='flex-shrink-0'>
          <div className='w-10 h-10  rounded-full flex items-center justify-center'>
            <img src='bryandp.png' alt='' />
          </div>
        </div>

        {/* Text Content */}
        <div className='flex-1'>
          <p className='text-gray-600'>Bryan has</p>
          <p className='text-gray-600'>liked</p>
        </div>
      </div>
      <div className='absolute -top-2 right-1.5  '>
        <img className='w-7 h-7 rounded-full' src='love.svg' alt='' />
      </div>
    </div>
  );
};

export default BryanLiked;
