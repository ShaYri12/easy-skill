import React from 'react'
import DownArrow from "../assets/icons/down-arrow.svg"
import PhoneIcon from "../assets/icons/blue-call.svg"
import RightArrow from "../assets/icons/white-right-arrow.svg"
import Phone from "../assets/icons/phone.svg"
import Logo from "../assets/Logo.svg"
import WhiteLogo from "../assets/white-logo.svg"
import { FaBarsStaggered } from "react-icons/fa6";


const Header = () => {
    return (
        <header className='xxl:bg-white py-6 flex items-center px-4 xxl:px-20 bg-[#15508B]'>
            <div className='flex items-center justify-between gap-2 w-full'>
                <nav className='flex-1 hidden xxl:flex'>
                    <ul className='flex items-center gap-8'>
                        <li>
                            <a href="#" className='text-lg font-medium'>Home</a>
                        </li>

                        <li className='relative'>
                            <div className='flex items-center gap-4 text-lg font-medium'>
                                Courses
                                <img src={DownArrow} alt="DownArrow" />
                            </div>
                        </li>

                        <li>
                            <a href="#" className='text-lg font-medium'>Branches</a>
                        </li>
                        <li>
                            <a href="#" className='text-lg font-medium'>Placements</a>
                        </li>
                    </ul>
                </nav>


                <button className='flex xxl:flex'>
                    <FaBarsStaggered className='text-white text-2xl' />
                </button>

                <div>
                    <img src={Logo} alt="Logo" className='hidden xxl:flex' />
                    <img src={WhiteLogo} alt="WhiteLogo" className='flex xxl:hidden' />
                </div>

                <div className='flex-1 hidden xxl:flex items-center justify-end gap-4'>
                    <button className='border border-[#15508B] flex items-center gap-2 rounded-lg py-2 px-4 text-lg font-medium text-[#15508B] leading-[24.59px]'>
                        <img src={PhoneIcon} alt="Phone Icon" />
                        +91 908 154 5252
                    </button>

                    <button className='bg-[#15508B] border border-primary-100 text-white flex items-center gap-2 rounded-lg py-2 px-4 text-lg font-bold leading-[24.59px]'>
                        Enroll Now
                        <img src={RightArrow} alt="Right Arrow" />
                    </button>
                </div>

                <img src={Phone} alt="Phone" className='block xxl:hidden' />
            </div>
        </header>
    )
}

export default Header