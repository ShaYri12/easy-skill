import React from "react";
import G from "../assets/icons/G.svg";
import { FaStar } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

const SendEnquiry = () => {
  return (
    <section className="px-4 xxl:px-20 py-8 xxl:py-20 bg-[#15508B]">
      <div className="bg-white md:p-[40px] p-8  rounded-[24px] w-full mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2">
            <h2 className="text-[40px] font-[700] leading-[54.64px] text-black mb-[8px]">
              Free Career Counselling
            </h2>
            <p className="text-black text-[18px] leading-[24.59px] mb-[40px] opacity-[0.8]">
              We are happy to help you 24/7
            </p>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                placeholder="Bhavin Patel"
                className="w-full rounded border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Email ID</label>
              <input
                type="email"
                placeholder="easyskill@gmail.com"
                className="w-full rounded border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">
                Best time for a callback?
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Afternoon 4 PM - 6 PM"
                  className="w-full rounded border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <span className="absolute top-1/2 right-4 transform -translate-y-1/2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H3a1 1 0 00-1 1v11a1 1 0 001 1h14a1 1 0 001-1V5a1 1 0 00-1-1h-2V3a1 1 0 00-1-1H6zM4 8v6h12V8H4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">
                WhatsApp Number
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="+91 9895545647"
                  className="w-full rounded border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <span className="absolute top-1/2 right-4 transform -translate-y-1/2 text-blue-500">
                  Change Number
                </span>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Enter OTP</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="1 2"
                  className="w-full rounded border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <span className="absolute top-1/2 right-4 transform -translate-y-1/2 text-blue-500">
                  Resend OTP
                </span>
              </div>
            </div>

            <div className="flex gap-[20px]">
              <p className="text-sm text-gray-500 mt-4">
                By sending this form I confirm that I have read and accept the
                <a href="#" className="text-blue-500 underline">
                  Privacy Policy
                </a>
                .
              </p>
              <button className="bg-blue-600 text-white w-full md:w-auto px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700">
                Send Enquiry &rarr;
              </button>
            </div>
          </div>

          <div className="w-full flex flex-col min-h-full justify-between md:w-1/2">
            <div>
              <h2 className="text-[40px] font-[700] leading-[54.64px]">
                What our Students Says
              </h2>

              <div className="flex items-center md:mt-[24px] mt-[20px] gap-[16px]">
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
                  <span className="md:w-[48px] w-[32px] md:h-[48px] h-[32px]">
                    <FaFacebook color="#1877F2" size={48} />
                  </span>
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
              </div>

              <p className="text-black opacity-[0.8] text-[18px] leading-[23.4px] font-[500] md:mt-[24px] mt-[20px]">
                Easyskill Career Academy is very good institute for IT training;
                I have completed web design course from here and got placed on
                Company as Web designer. This institute gives me very good
                career, thank you Easyskill.
              </p>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <img
                  src="https://randomuser.me/api/portraits/women/10.jpg"
                  alt="Student"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="text-lg font-bold">Ishita Chopra</h4>
                  <p className="text-sm text-gray-500">
                    Flutter Developer @ Samp Technology
                  </p>
                  <p className="text-yellow-500 text-sm">
                    ★★★★★ <span className="text-gray-500">20 Oct, 23</span>
                  </p>
                </div>
              </div>

              <div className="flex justify-end space-x-4">
                <button className="p-2 bg-gray-200 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.707 14.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L9.414 10l4.293 4.293a1 1 0 010 1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
                <button className="p-2 bg-gray-200 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.293 5.293a1 1 0 011.414 0L12 8.586l3.293-3.293a1 1 0 011.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SendEnquiry;
