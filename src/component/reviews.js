import React from 'react';
import Logo from "../images/logo-light..png";
import BGstudio from "../images/screencapturestudio.png"

export default function Reviews() {
  return (
    <div className="w-full h-[400px] flex flex-col justify-center items-center bg-cover bg-center relative" style={{ backgroundImage: `url(${BGstudio})` }}>
      <div className="text-black text-center">
        <div className="w-full md:w-2/3 lg:w-1/2 mx-auto text-lg md:text-2xl lg:text-4xl font-medium font-['Mona-Sans'] leading-[41.40px] mb-6">
          The team at Studio went above and beyond with our onboarding, even finding a way to access the user’s microphone without triggering one of those annoying permission dialogs.
          <img className="w-[184px] h-9 mt-4" src={Logo} alt="Logo" />
        </div>
      </div>
    </div>
  );
}
