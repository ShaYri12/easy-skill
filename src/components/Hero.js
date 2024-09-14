import React from "react";
import HeroImg from "../assets/hero-img.png";
import { HiMiniArrowRight } from "react-icons/hi2";
import Line from "../assets/thankyou-line.svg";
import G from "../assets/icons/G.svg";
import Jd from "../assets/icons/jd.svg";
import { FaStar } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row md:gap-[24px] items-center justify-between px-4 xxl:px-12 md:py-[56px] py-[16px] bg-white">
      <div className="w-full md:w-1/2 text-left md:order-1 order-2">
        <h3 className="text-[#15508B] md:text-[24px] text-[20px] font-[700] leading-[20px] mb-[12px] md:mt-0 mt-[16px] text-center">
          Join Us Today to Start Your
        </h3>
        <div className="relative flex flex-col items-center justify-center">
          <h1 className="md:text-[64px] w-max text-[32px] font-[800] md:leading-[70.4px] leading-[32px]">
            IT Learning
          </h1>
          <img className="md:w-[319px] w-[141px] mt-[3px]" src={Line} />

          <p className="text-[#15508B] md:text-[24px] text-[20px] leading-[20px] font-[700] md:mt-[11px] mt-[2px]">
            for Assured Earnings
          </p>
        </div>

        <button className="max-w-[682px] w-full mx-auto bg-[#1A8F25] rounded-[4px] md:rounded-lg md:mt-[24px] mt-[20px] py-[12px] px-4 flex flex-col md:gap-2 gap-[4px] cursor-pointer items-center justify-center">
          <p className="text-white tracking-[1.2%] font-[600] text-center lg:text-[16px] md:text-[1.7vw] leading-[12px] text-[12px] uppercase">
            get free career counseling from experts
          </p>

          <div className="flex items-center gap-1">
            <p className="text-white uppercase text-[18px] lg:text-[24px] md:text-[2.5vw] font-[700] leading-[20px] tracking-[1.2%]">
              Book YOUR SEAT Now
            </p>
            <HiMiniArrowRight
              className="md:text-[24px] text-[20px]"
              color="white"
              strokeWidth={0.6}
            />
          </div>
        </button>

        <p className="text-black opacity-[0.6] lg:text-[20px] md:text-[17px] text-[14px] md:leading-[27.32px] leading-[16px] font-[400] md:mt-[24px] mt-[20px]">
          Enroll in the Best Python Training Institute for Comprehensive Python
          Course & Classes. Learn Python Language with Certificate & Job
          Placement!
        </p>

        <div className="flex items-center justify-center md:mt-[24px] mt-[20px] gap-[16px]">
          <div className="flex items-center gap-[8px]">
            <img
              src={G}
              className="md:w-[48px] w-[32px] md:h-[48px] h-[32px]"
              alt="JustDial"
            />
            <div className="flex flex-col gap-[4px]">
              <span className="text-[#0F172A] md:text-[20px] text-[18px] font-[700] md:leading-[22px] leading-[20px]">
                4.9 (189)
              </span>
              <div className="flex items-center">
                <span className="min-w-[16px] min-h-[16px] flex gap-[4px]">
                  <FaStar color="#F2BE0B" size={16} />
                  <FaStar color="#F2BE0B" size={16} />
                  <FaStar color="#F2BE0B" size={16} />
                  <FaStar color="#F2BE0B" size={16} />
                  <FaStar color="#F2BE0B" size={16} />
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-[8px]">
            <img
              src={Jd}
              className="md:w-[48px] w-[32px] md:h-[48px] h-[32px]"
              alt="JustDial"
            />
            <div className="flex flex-col gap-[4px]">
              <span className="text-[#0F172A] md:text-[20px] text-[18px] font-[700] md:leading-[22px] leading-[20px]">
                4.9 (480)
              </span>
              <div className="flex items-center">
                <span className="min-w-[16px] min-h-[16px] flex gap-[4px]">
                  <FaStar color="#F2BE0B" size={16} />
                  <FaStar color="#F2BE0B" size={16} />
                  <FaStar color="#F2BE0B" size={16} />
                  <FaStar color="#F2BE0B" size={16} />
                  <FaStar color="#F2BE0B" size={16} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:order-2 order-1 md:w-1/2 mb-[16px] md:mb-0 flex justify-center">
        <div className="relative md:h-[454px] h-[473px] md:w-[473px] w-full">
          <img
            src={HeroImg}
            alt="Video Placeholder"
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
