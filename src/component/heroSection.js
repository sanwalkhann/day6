import React from 'react';

const HeroSection = () => {
  return (
    <div className=" flex flex-col items-center md:items-left md:items-start my-10 mx-10 md:my-56 md:ml-20">
      
    <div className="max-w-screen-md text-black text-4xl md:text-5xl lg:text-6xl font-semibold font-monasans mb-4 md:mb-0">
        Award-winning Ecommerce Application based in Denmark.
      </div>
      <div className="max-w-[745px] text-black text-base md:text-lg lg:text-xl font-light font-monasans leading-[23px]">
        We are a development studio working at the intersection of design and technology. It’s a really busy intersection though — a lot of our staff have been involved in hit and runs.<br/>
      </div>
    </div>
  );
};

export default HeroSection;
