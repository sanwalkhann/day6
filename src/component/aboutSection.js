import React from 'react';
import phobia from '../images/phobia.png';
import Logolite from '../images/logo-light.f6ce2960 1.png';
import homework from '../images/homework.png';
import familyfund from '../images/familyfund.png';
import brightpath from '../images/Brightpath.png';
import northadventure from '../images/northadventure.png';
import mailssmirk from '../images/mailssmirk.png';
import greenlife from '../images/greenlife.png';

const AboutSection = () => {
  return (
    <div className="w-full h-auto px-[0.6rem]">
    <div className="max-w-full h-auto bg-black grid grid-cols-1 container rounded-2xl py-8 md:py-16 md:px-[8rem] px-[0.2rem]">
      <div className="md:block hidden">
        <div className="w-full h-auto col-span-1 flex items-center justify-start px-[0.5rem] mb-10">
          <div className="flex items-center gap-5">
            <div className="text-white">
              We’ve worked with hundreds of amazing people
            </div>
            <hr className="text-white w-[687px]" />
          </div>
        </div>
      </div>
      <div className="md:hidden block">
        <div className="w-full h-auto col-span-1 flex items-center justify-center gap-6 px-[0.5rem] mb-5">
          <hr className="text-white w-[8rem]" />
          <div className="text-white text-center">
            We’ve worked with hundreds of amazing people
          </div>
          <hr className="text-white w-[8rem]" />
        </div>
      </div>
      <div className="w-full h-auto col-span-1 px-[0.5rem]">
        <div className="w-full h-auto flex items-center justify-between flex-wrap mb-5">
          <img className="w-[10rem]" src={phobia} alt="A1" />
          <img className="w-[10rem]" src={Logolite} alt="A2" />
          <img className="w-[10rem]" src={homework} alt="A3" />
          <img className="w-[10rem]" src={familyfund} alt="A4" />
        </div>
        <div className="w-full h-auto flex items-center justify-between flex-wrap">
          <img className="w-[10rem]" src={brightpath} alt="A5" />
          <img className="w-[10rem]" src={northadventure} alt="A6" />
          <img className="w-[10rem]" src={mailssmirk} alt="A7" />
          <img className="w-[10rem]" src={greenlife} alt="A8" />
        </div>
      </div>
    </div>
  </div>
  );
};

export default AboutSection;
