import React from 'react';

export const Footer = () => {
  return (
    <div className="max-w-screen-xl mx-auto flex justify-between items-center h-[30px] p-4 md:p-8  bottom-0 left-0 right-0 bg-white border-t border-gray-300">
      <div className="flex items-center gap-2.5">
        <div className="w-6 h-[30px] relative"></div>
        <div className="text-black text-xl font-semibold font-['Mona-Sans']">Ecommerce App</div>
      </div>
      <div className="text-center text-black text-base font-light font-['Mona-Sans'] leading-tight">
        © Ecommerce Agency Inc. 2023
      </div>
    </div>
  );
};
