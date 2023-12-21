import React from 'react';

export default function AboutProjects() {
  return (
    <div className="max-w-screen-xl mx-auto md:p-8 lg:p-16">
      <div className="md:w-4/5  lg:w-3/4 mx-auto bg-black rounded-[41px] p-8 md:p-12 lg:p-16">
        <div className="mx-auto flex flex-col justify-center items-center  gap-8">
          <div className="md:w-1/2">
            <div className="text-white text-3xl font-medium font-'Mona-Sans' leading-9">
              Tell us about your project
            </div>
            <div className="w-28 mt-4 md:mt-6 flex-col justify-start items-start gap-4 md:gap-6">
              <div className="px-4 py-3 bg-white rounded-full justify-center items-center gap-2.5 inline-flex">
                <div className="text-black text-lg font-medium font-'Mona-Sans'">Say Hej</div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 opacity-60 border border-zinc-500 my-8 md:my-0"></div>
          <div className="md:w-1/2">
            <div className="text-white text-2xl font-medium font-'Mona-Sans' leading-7">Our offices</div>
            <div className="mt-4 md:mt-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-8">
                <div className="flex flex-col justify-start items-start gap-2.5">
                  <div className="text-white text-lg font-bold font-'Mona-Sans' leading-[18.40px]">Copenhagen</div>
                  <div className="text-white text-base font-light font-'Mona-Sans' leading-tight">
                    1 Carlsberg Gate<br />
                    1260, København, Denmark
                  </div>
                </div>
                <div className="flex flex-col justify-start items-start gap-2.5">
                  <div className="text-white text-lg font-bold font-'Mona-Sans' leading-[18.40px]">Billund</div>
                  <div className="text-white text-base font-light font-'Mona-Sans' leading-tight">
                    24 Lego Allé<br />
                    7190, Billund, Denmark
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
