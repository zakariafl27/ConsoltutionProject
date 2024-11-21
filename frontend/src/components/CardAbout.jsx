import React from 'react'

export default function CardAbout() {
    return (
        <div className="relative w-full max-w-[1146px] h-auto md:h-[536px] mx-auto mt-10 md:mt-[350px] px-4 md:px-0">
            <div className="absolute w-[100px] h-[116px] left-[20%] md:left-[338px] top-[80%] md:top-[420px]"/>

            {/* Main Image and Overlays */}
            <div className="relative w-full h-auto md:h-[495px] flex z-10">
                <div className="relative w-full md:w-[754px] h-full ml-auto">
                    <div className="absolute bg-[#0594ff] opacity-10 shadow"/>
                    <img
                        className="absolute w-full h-full md:h-[530px] object-cover"
                        src="/images/doctor.png"
                        alt=""
                    />
                </div>
            </div>

            <div className="absolute top-[43px] left-0 w-full md:w-[592px] h-auto md:h-[389px] bg-white/40 backdrop-blur-[50px] z-10 p-8">
                <h2 className="text-[30px] md:text-[50px] font-normal text-[#444444] leading-[36px] md:leading-[60px] my-5">About Us</h2>
                <p className="text-[#878787] text-sm md:text-lg font-['Helvetica'] leading-[18px] md:leading-[21px] my-5 md:my-[40px]">
                    And residence for met the estimable disposing. Mean if he they been no hold mr. 
                    Is at much do made took held help. Latter person am secure of estate genius at.
                </p>
                <button className="absolute md:relative">
                    <a href="#" className="text-[#444444] text-sm md:text-base font-['Helvetica'] mr-1">Read More
                        <img src="/images/flesh.png" className="absolute md:relative top-[-16px] left-[92px]" alt="" />
                    </a>
                </button>   
            </div>
            <img src="/images/DOTS.png" className="absolute top-[90%] md:top-[390px] left-[25%] md:left-[370px] z-0" alt="" />
        </div>
    )
}
