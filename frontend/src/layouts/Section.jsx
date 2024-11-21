import React from 'react';


export default function Section() {
    return (
        <div className="w-full lg:w-[581px] h-auto lg:h-[532px] flex flex-col-reverse lg:flex-row-reverse relative lg:left-[200px]">
            <div className="absolute w-full lg:w-[570px] lg:left-[754px] lg:top-[-113px] h-[850px] 
                            bg-gradient-to-b from-[#cce7ff] to-[#e5f3ff] z-0" />
            <div>
                <img src="/images/girl.png" className="absolute w-full lg:w-[781px] h-auto lg:h-[738px]" alt="girl" />
            </div>

            {/* Title */}
            <div className="absolute lg:w-[141.15px] h-[17px] left-2 lg:left-[6px] top-0">
                <div className="left-0 top-0 absolute text-[#444444] text-sm font-normal font-['Gilroy-Medium']">
                    Meet With
                </div>

                {/* line */}
                <div className="w-[64px] h-[2px] left-[78px] top-[9px] absolute opacity-30 bg-[#444444]" />
            </div>

            <div className="absolute lg:w-[581px] left-0 top-[43px]">
                <span className="text-[#444444] text-[2.5rem] lg:text-[111.14px] font-normal font-['Gilroy-Light'] leading-tight lg:leading-[94.90px]">
                    Our Best <br />
                </span>
                <span className="text-[#0594ff] text-[2.5rem] lg:text-[111.14px] font-normal font-['Gilroy-Regular'] leading-tight lg:leading-[94.90px]">
                    Doctors <br />
                </span>
                <span className="text-[#0594ff] text-[2rem] lg:text-[85px] font-normal font-['Gilroy-Regular'] leading-tight lg:leading-[94.90px]">
                    Online
                </span>
            </div>

            <div className="absolute w-full lg:w-[487px] left-0 top-[250px] lg:top-[352px] text-[#878787] text-base lg:text-lg font-normal font-['Helvetica'] leading-[21px]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid architecto accusantium blanditiis, 
                dignissimos porro ea eligendi nulla quis labore ratione quas
            </div>

            {/* Buttons */}
            <button className="absolute w-full lg:w-auto h-[57px] px-10 py-[18px] left-0 top-[400px] lg:top-[475px] bg-[#0594ff] rounded-[5px] shadow justify-center items-center gap-2.5 inline-flex">
                <a href='#' className="text-white text-base font-normal font-['Gilroy-SemiBold'] leading-[21px]">
                    Schedule Appointment
                </a>
            </button>

            <button className="absolute w-full lg:w-auto h-[57px] px-10 py-[18px] left-0 lg:left-[275px] top-[470px] lg:top-[475px] rounded-[5px] border border-[#878787] justify-center items-center gap-2.5 inline-flex">
                <a href='#' className="text-[#878787] text-base font-normal font-['Gilroy-SemiBold'] leading-[21px]">
                    Learn More
                </a>
            </button>
        </div>
    );
}
