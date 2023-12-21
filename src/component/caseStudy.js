import React from "react";
import F1 from "../images/Frame (1).png";
import F2 from "../images/Frame (2).png";
import F3 from "../images/Frame (3).png";

const CaseStudy = () => {
  return (
    <div className="p-4 md:ml-10 md:mt-20 box-border">
      <div className="max-w-screen-md text-black text-4xl md:text-4xl lg:text-6xl font-semibold font-monasans mb-4 md:mb-0">
        Harnessing technology for a brighter future
      </div>

      <div className="max-w-[745px] text-black text-base md:text-lg lg:text-xl font-light font-monasans leading-[23px]">
        We believe technology is the answer to the world’s greatest challenges.
        It’s also the cause, so we find ourselves in a bit of a catch 22
        situation.
      </div>

      <div className="flex flex-col justify-center items-center md:flex-row mt-14 gap-8">
        {/* Case Study 1 */}
        <div className="w-full md:w-[400px] lg:w-[400px] h-[400px] justify-start items-start gap-8 inline-flex">
          <div className="self-stretch px-4 md:px-0 pt-4 md:pt-0 pb-10 bg-white rounded-[25px] border border-zinc-300 flex-col justify-start items-start gap-2.5 inline-flex">
            <div className="flex-col justify-start items-start gap-4 p-4 flex">
              <div className="w-full h-[70px] relative bg-white">
                <img src={F1} alt="Case Study 1" className="rounded-[25px]" />
              </div>
              <div>
                <span className="text-black text-base font-bold font-Mona-Sans leading-[18.40px]">
                  2023
                </span>
                <span className="text-black text-base font-light font-Mona-Sans leading-[18.40px]">
                  {" "}
                </span>
                <span className="text-black text-base font-medium font-Mona-Sans leading-[18.40px]">
                  / Case study
                </span>
              </div>
              <div className="w-full text-black text-2xl font-semibold font-Mona-Sans leading-7">
                Skip the bank, borrow from those you trust
              </div>
              <div className="w-full text-neutral-600 text-base font-light font-Mona-Sans leading-tight">
                FamilyFund is a crowdfunding platform for friends and family.
                Allowing users to take personal loans from their network without
                a traditional financial institution.
              </div>
            </div>
          </div>
        </div>

        {/* Case Study 2 */}
        <div className="w-full md:w-[400px] lg:w-[400px] h-[400px] justify-start items-start gap-8 inline-flex">
          <div className="self-stretch px-4 md:px-0 pt-4 md:pt-0 pb-10 bg-white rounded-[25px] border border-zinc-300 flex-col justify-start items-start gap-2.5 inline-flex">
            <div className="flex-col justify-start items-start gap-4 p-4 flex">
              <div className="w-full h-[70px] relative bg-white">
                <img src={F2} alt="Case Study 2" className="rounded-[25px]" />
              </div>
              <div>
                <span className="text-black text-base font-bold font-Mona-Sans leading-[18.40px]">
                  2022
                </span>
                <span className="text-black text-base font-light font-Mona-Sans leading-[18.40px]">
                  {" "}
                </span>
                <span className="text-black text-base font-medium font-Mona-Sans leading-[18.40px]">
                  / Case study
                </span>
              </div>
              <div className="w-full text-black text-2xl font-semibold font-Mona-Sans leading-7">
                Get a hodl of your health
              </div>
              <div className="w-full text-neutral-600 text-base font-light font-Mona-Sans leading-tight">
                Unseal is the first NFT platform where users can mint and trade
                NFTs of their own personal health records, allowing them to take
                control of their data.
              </div>
            </div>
          </div>
        </div>

        {/* Case Study 3 */}
        <div className="w-full md:w-[400px] lg:w-[400px] h-[400px] justify-start items-start gap-8 inline-flex">
          <div className="self-stretch px-4 md:px-0 pt-4 md:pt-0 pb-10 bg-white rounded-[25px] border border-zinc-300 flex-col justify-start items-start gap-2.5 inline-flex">
            <div className="flex-col justify-start items-start gap-4 p-4 flex">
              <div className="w-full h-[70px] relative bg-white">
                <img src={F3} alt="Case Study 3" className="rounded-[25px]" />
              </div>
              <div>
                <span className="text-black text-base font-bold font-Mona-Sans leading-[18.40px]">
                  2023
                </span>
                <span className="text-black text-base font-light font-Mona-Sans leading-[18.40px]">
                  {" "}
                </span>
                <span className="text-black text-base font-medium font-Mona-Sans leading-[18.40px]">
                  / Case study
                </span>
              </div>
              <div className="w-full text-black text-2xl font-semibold font-Mona-Sans leading-7">
                Overcome your fears, find your match
              </div>
              <div className="w-full text-neutral-600 text-base font-light font-Mona-Sans leading-tight">
                Find love in the face of fear — Phobia is a dating app that
                matches users based on their mutual phobias so they can be
                scared together.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
