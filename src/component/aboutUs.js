import React from "react";
import arrow from "../images/arrow.png"
const Footer = () => {
    return (
      <div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 px-[1rem]">
          <div>
            <p className="font-medium text-[1.2rem] pt-[1rem]">Work</p>
            <p className="text-[1rem] font-weight-500 text-[#404040] pt-[1rem]">
              FamilyFund
            </p>
            <p className="pt-[0.5rem]">Unseal</p>
            <p className="pt-[0.5rem]">Phobia</p>
            <p className="pt-[0.5rem]">See All</p>
          </div>
          <div>
            <p className="font-medium text-[1.2rem] pt-[1rem]">Company</p>
            <p className="text-[1rem] font-weight-500 text-[#404040] pt-[1rem]">About</p>
            <p className="pt-[0.5rem]">Process</p>
            <p className="pt-[0.5rem]">Blog</p>
            <p className="pt-[0.5rem]">Contact us</p>
          </div>
          <div>
            <p className="font-medium text-[1.2rem] pt-[1rem]">Connect</p>
            <p className="text-[1rem] font-weight-500 text-[#404040] pt-[1rem]">Facebook</p>
            <p className="pt-[0.5rem]">Instagram</p>
            <p className="pt-[0.5rem]">Twitter</p>
            <p className="pt-[0.5rem]">Github</p>
            <p className="pt-[0.5rem]">Dribbble</p>
          </div>
          <div>
            <p className="font-medium text-[1.2rem] pt-[1rem]">
              Sign up for our newsletter
            </p>
            <p className="text-[1rem] font-weight-500 text-[#404040] pt-[1rem]">
              Subscribe to get the latest design news, articles, resources and
              inspiration.
            </p>
            <div class="relative mt-[0.8rem]">
    <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pr-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email Address" required />
    <img src={arrow} alt="Arrow" class="absolute right-2 mr-[-8px] top-1/2 transform -translate-y-1/2 w-10 h-auto" />
  </div>
          </div>
        </div>
      </div>
    );
  };
  export default Footer;