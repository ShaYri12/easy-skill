import React, { useState } from "react";

import Logo from "../assets/Logo.svg";
import WhiteLogo from "../assets/white-logo.svg";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BiPhone } from "react-icons/bi";
import { HiMiniArrowRight } from "react-icons/hi2";
import { PiPhoneCall } from "react-icons/pi";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <header className="xxl:bg-white py-6 flex items-center px-4 xxl:px-20 bg-[#15508B] relative">
      <div className="flex items-center justify-between gap-2 w-full">
        <nav className="flex-1 hidden xxl:flex">
          <ul className="flex items-center gap-8">
            <li>
              <a href="#" className="text-lg font-medium">
                Home
              </a>
            </li>

            <li className="relative">
              <div className="flex items-center gap-1 text-lg font-medium">
                Courses
                <MdKeyboardArrowDown />
              </div>
            </li>

            <li>
              <a href="#" className="text-lg font-medium">
                Branches
              </a>
            </li>
            <li>
              <a href="#" className="text-lg font-medium">
                Placements
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button className="flex xxl:hidden" onClick={toggleDrawer}>
          <FaBarsStaggered className="text-white text-2xl" />
        </button>

        <div>
          <img src={Logo} alt="Logo" className="hidden xxl:flex" />
          <img src={WhiteLogo} alt="WhiteLogo" className="flex xxl:hidden" />
        </div>

        <div className="flex-1 hidden xxl:flex items-center justify-end gap-4">
          <button className="border border-[#15508B] flex items-center gap-2 rounded-lg py-2 px-4 text-lg font-medium text-[#15508B] leading-[24.59px]">
            <BiPhone size={24} />
            +91 908 154 5252
          </button>

          <button className="bg-[#15508B] border border-primary-100 text-white flex items-center gap-2 rounded-lg py-2 px-4 text-lg font-bold leading-[24.59px]">
            Enroll Now
            <HiMiniArrowRight size={24} />
          </button>
        </div>

        <span className="min-w-[26px] min-h-[26px] text-white">
          <PiPhoneCall size={26} />
        </span>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 w-[250px] h-full bg-[#15508B] text-white z-50 transition-transform duration-300 ease-in-out ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4">
          <img src={WhiteLogo} alt="WhiteLogo" />
          <button onClick={toggleDrawer}>
            <FaTimes className="text-white text-2xl" />
          </button>
        </div>
        <ul className="flex flex-col items-start gap-4 p-4">
          <li>
            <a href="#" className="text-lg font-medium">
              Home
            </a>
          </li>

          <li className="relative">
            <div className="flex items-center gap-1 text-lg font-medium">
              Courses
              <MdKeyboardArrowDown />
            </div>
          </li>

          <li>
            <a href="#" className="text-lg font-medium">
              Branches
            </a>
          </li>
          <li>
            <a href="#" className="text-lg font-medium">
              Placements
            </a>
          </li>
        </ul>

        <div className="flex flex-col items-start gap-4 p-4">
          <button className="border border-white flex items-center gap-2 rounded-lg py-2 px-4 text-lg font-medium text-white">
            <BiPhone size={24} />
            +91 908 154 5252
          </button>
          <button className="bg-white text-[#15508B] border border-[#15508B] flex items-center gap-2 rounded-lg py-2 px-4 text-lg font-bold">
            Enroll Now
            <HiMiniArrowRight size={24} />
          </button>
        </div>
      </div>

      {/* Overlay */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleDrawer}
        ></div>
      )}
    </header>
  );
};

export default Header;
