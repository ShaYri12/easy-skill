import React, { useState } from 'react'
import ChevronDown from "../assets/icons/chevron-down.svg"
import ChevronUp from "../assets/icons/chevron-up.svg"

const Faqs = () => {

    const [openFaq, setOpenFaq] = useState(null);

    // Function to toggle FAQ open state
    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    }

    return (
        <section className='py-4 md:py-20 px-4'>
            <div className='max-w-[800px] w-full mx-auto'>

                <div className='flex items-center flex-col justify-center text-center gap-2 md:gap-4 mb-4 md:mb-7'>
                    <div className='text-xs md:text-base leading-[13.2px] md:leading-[17.6px] text-[#15508B] font-bold bg-[#0084FE29] text-center py-2 px-4 rounded-[99px]'>Frequently Asked Questions</div>

                    <h1 className='text-xl md:text-[40px] leading-[27.32px] md:leading-[54.64px] font-bold text-center'>Got Questions? We’ve Got Answers!</h1>
                </div>

                <ul className='flex flex-col w-full gap-3 md:gap-4'>
                    <li className={`rounded-lg overflow-hidden transition-transform duration-300  ${openFaq === 0 ? "border-[#15508B] border-[1.5px]" : "border-[#DDDDDD] border-[1.5px]"}`}>
                        <div className={`flex gap-2 p-[10px] md:p-3 cursor-pointer ${openFaq === 0 ? "bg-[#15508B] text-white" : "bg-transparent text-[#4D4D4D]"}`} onClick={() => toggleFaq(0)}>
                            <h3 className="flex-1 tracking-[-0.17px] text-[15px] md:text-[19px] leading-[20.49px] md:leading-[25.95px] font-medium">
                                Who can join the UI-UX graphics designing Course?
                            </h3>

                            <img
                                src={openFaq === 0 ? ChevronUp : ChevronDown}
                                alt="chevron-arrow"
                                loading="lazy"
                                className="transition-transform duration-300"
                            />
                        </div>

                        <div className={`overflow-hidden transition-all duration-300 h-fit ${openFaq === 0 ? 'block p-2 md:p-3' : 'hidden'}`}>
                            <ul className='list-disc pl-6 text-[#101828] text-sm md:text-lg leading-[19.12px] md:leading-[24.59px] opacity-80'>
                                <li>Never a recession</li>
                                <li>An excellent source of Side Income</li>
                                <li>Constantly growing demand in every field.</li>
                                <li>UI-UX Graphics Design is required for the sale of any product</li>
                                <li>Compensation according to experience</li>
                            </ul>
                        </div>
                    </li>

                    <li className={`rounded-lg overflow-hidden transition-transform duration-300  ${openFaq === 1 ? "border-[#15508B] border-[1.5px]" : "border-[#DDDDDD] border-[1.5px]"}`}>
                        <div className={`flex gap-2 p-[10px] md:p-3 cursor-pointer ${openFaq === 1 ? "bg-[#15508B] text-white" : "bg-transparent text-[#4D4D4D]"}`} onClick={() => toggleFaq(1)}>
                            <h3 className="flex-1 tracking-[-0.17px] text-[15px] md:text-[19px] leading-[20.49px] md:leading-[25.95px] font-medium">
                                Why should I learn UI-UX graphics design?
                            </h3>

                            <img
                                src={openFaq === 1 ? ChevronUp : ChevronDown}
                                alt="chevron-arrow"
                                loading="lazy"
                                className="transition-transform duration-300"
                            />
                        </div>

                        <div className={`overflow-hidden transition-all duration-300 h-fit ${openFaq === 1 ? 'block p-2 md:p-3' : 'hidden'}`}>
                            <ul className='list-disc pl-6 text-[#101828] text-sm md:text-lg leading-[19.12px] md:leading-[24.59px] opacity-80'>
                                <li>Never a recession</li>
                                <li>An excellent source of Side Income</li>
                                <li>Constantly growing demand in every field.</li>
                                <li>UI-UX Graphics Design is required for the sale of any product</li>
                                <li>Compensation according to experience</li>
                            </ul>
                        </div>
                    </li>

                    <li className={`rounded-lg overflow-hidden transition-transform duration-300  ${openFaq === 2 ? "border-[#15508B] border-[1.5px]" : "border-[#DDDDDD] border-[1.5px]"}`}>
                        <div className={`flex gap-2 p-[10px] md:p-3 cursor-pointer ${openFaq === 2 ? "bg-[#15508B] text-white" : "bg-transparent text-[#4D4D4D]"}`} onClick={() => toggleFaq(2)}>
                            <h3 className="flex-1 tracking-[-0.17px] text-[15px] md:text-[19px] leading-[20.49px] md:leading-[25.95px] font-medium">
                                What after the UI-UX graphics design course?
                            </h3>

                            <img
                                src={openFaq === 2 ? ChevronUp : ChevronDown}
                                alt="chevron-arrow"
                                loading="lazy"
                                className="transition-transform duration-300"
                            />
                        </div>

                        <div className={`overflow-hidden transition-all duration-300 h-fit ${openFaq === 2 ? 'block p-2 md:p-3' : 'hidden'}`}>
                            <ul className='list-disc pl-6 text-[#101828] text-sm md:text-lg leading-[19.12px] md:leading-[24.59px] opacity-80'>
                                <li>Never a recession</li>
                                <li>An excellent source of Side Income</li>
                                <li>Constantly growing demand in every field.</li>
                                <li>UI-UX Graphics Design is required for the sale of any product</li>
                                <li>Compensation according to experience</li>
                            </ul>
                        </div>
                    </li>

                    <li className={`rounded-lg overflow-hidden transition-transform duration-300  ${openFaq === 3 ? "border-[#15508B] border-[1.5px]" : "border-[#DDDDDD] border-[1.5px]"}`}>
                        <div className={`flex gap-2 p-[10px] md:p-3 cursor-pointer ${openFaq === 3 ? "bg-[#15508B] text-white" : "bg-transparent text-[#4D4D4D]"}`} onClick={() => toggleFaq(3)}>
                            <h3 className="flex-1 tracking-[-0.17px] text-[15px] md:text-[19px] leading-[20.49px] md:leading-[25.95px] font-medium">
                                Who can join the UI-UX graphics designing Course?
                            </h3>

                            <img
                                src={openFaq === 3 ? ChevronUp : ChevronDown}
                                alt="chevron-arrow"
                                loading="lazy"
                                className="transition-transform duration-300"
                            />
                        </div>

                        <div className={`overflow-hidden transition-all duration-300 h-fit ${openFaq === 3 ? 'block p-2 md:p-3' : 'hidden'}`}>
                            <ul className='list-disc pl-6 text-[#101828] text-sm md:text-lg leading-[19.12px] md:leading-[24.59px] opacity-80'>
                                <li>Never a recession</li>
                                <li>An excellent source of Side Income</li>
                                <li>Constantly growing demand in every field.</li>
                                <li>UI-UX Graphics Design is required for the sale of any product</li>
                                <li>Compensation according to experience</li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Faqs;
