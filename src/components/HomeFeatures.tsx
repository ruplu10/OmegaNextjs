import React from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { BsTrophy } from "react-icons/bs";
import { PiMedal } from "react-icons/pi";

const HomeFeatures = () => {
  return (
    <div className="mx-10 mt-5 mb-5">
      <div className="featuresTitle flex justify-center pt-10 pb-6 mb-4">
        <h3 className="text-2xl">
          <b>Our vision is to care for your vision</b>
        </h3>
      </div>

      <div className="HomeFeatures pb-10 pl-2 pr-2 flex justify-around ">
        <div className="HomeAboutUs flex flex-col items-center pl-6 pr-6">
          <IoIosInformationCircleOutline fontSize={50} />
          <h2><b>About Us</b></h2>
          <h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            
          </h1>
        </div>

        <div className="HomeMilestones flex flex-col items-center pl-6 pr-6">
          <BsTrophy fontSize={50} />
          <h2><b>Milestones</b></h2>
          <h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            
          </h1>
        </div>

        <div className="HomeLeadership flex flex-col items-center pl-6 pr-6">
          <PiMedal fontSize={50} />
          <h2><b>Leadership</b></h2>
          <h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HomeFeatures;
