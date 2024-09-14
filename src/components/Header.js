import React, { useState, useEffect, useRef } from "react";
import Logo from "../assets/Logo.svg";
import WhiteLogo from "../assets/white-logo.svg";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BiPhone } from "react-icons/bi";
import { HiMiniArrowRight } from "react-icons/hi2";
import { PiPhoneCall } from "react-icons/pi";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <header className="sticky top-0 xxl:bg-white py-6 flex items-center px-4 sxl:px-20 bg-[#15508B] relative z-[50] shadow">
      <div className="flex items-center justify-between gap-2 w-full">
        <nav className="flex-1 hidden xxl:flex">
          <ul className="flex items-center">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-lg font-medium px-[16px] py-[8px] ${
                    isActive ? "text-[#15508B] underline" : ""
                  }`
                }
              >
                Home
              </NavLink>
            </li>

            <li className="relative" ref={dropdownRef}>
              <div
                onClick={toggleDropdown}
                className="flex items-center gap-1 text-lg font-medium px-[16px] py-[8px] cursor-pointer"
              >
                Courses
                <MdKeyboardArrowDown />
              </div>
              {isDropdownOpen && (
                <ul className="absolute left-0 mt-2 bg-white shadow rounded p-2">
                  <li className="px-4 py-2">
                    <NavLink
                      to="/course-1"
                      onClick={closeDropdown}
                      className=""
                    >
                      Course 1
                    </NavLink>
                  </li>
                  <li className="px-4 py-2">
                    <NavLink
                      to="/course-2"
                      onClick={closeDropdown}
                      className=""
                    >
                      Course 2
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <NavLink
                to="/branches"
                className={({ isActive }) =>
                  `text-lg font-medium px-[16px] py-[8px] ${
                    isActive ? "text-[#15508B] underline" : ""
                  }`
                }
              >
                Branches
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/placements"
                className={({ isActive }) =>
                  `text-lg font-medium px-[16px] py-[8px] ${
                    isActive ? "text-[#15508B] underline" : ""
                  }`
                }
              >
                Placements
              </NavLink>
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
            <NavLink
              to="/"
              onClick={closeDrawer}
              className={({ isActive }) =>
                `text-lg font-medium ${isActive ? "underline" : ""}`
              }
            >
              Home
            </NavLink>
          </li>

          <li className="relative">
            <div
              onClick={toggleDropdown}
              className="flex items-center gap-1 text-lg font-medium cursor-pointer"
            >
              Courses
              <MdKeyboardArrowDown />
            </div>
            {isDropdownOpen && (
              <ul className="ml-4">
                <li className="py-2">
                  <NavLink to="/course-1" onClick={closeDrawer}>
                    Course 1
                  </NavLink>
                </li>
                <li className="py-2">
                  <NavLink to="/course-2" onClick={closeDrawer}>
                    Course 2
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          <li>
            <NavLink
              to="/branches"
              onClick={closeDrawer}
              className={({ isActive }) =>
                `text-lg font-medium ${isActive ? "underline" : ""}`
              }
            >
              Branches
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/placements"
              onClick={closeDrawer}
              className={({ isActive }) =>
                `text-lg font-medium ${isActive ? "underline" : ""}`
              }
            >
              Placements
            </NavLink>
          </li>
        </ul>
        <div className="h-[1px] border-t border-dashed w-[87%] mx-auto opacity-[0.8]"></div>
        <div className="flex flex-col items-start gap-4 p-4">
          <button className="border border-white flex items-center md:gap-2 gap-1 rounded-lg py-2 px-4 text-lg font-medium text-white">
            <BiPhone size={24} />
            +91 908 154 5252
          </button>
          <button className="bg-white text-[#15508B] border border-[#15508B] flex items-center md:gap-2 gap-1 rounded-lg py-2 px-4 text-lg font-bold">
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
