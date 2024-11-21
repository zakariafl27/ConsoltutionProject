import React, { useState } from 'react';
import { Cards } from '../tools/CardsWork';

export default function HowItWork() {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <div className="relative container mx-auto w-[1146px] h-[455px]">
            <h1 className="title text-center my-10 text-[#444444] text-[50px] font-medium leading-[60px]">
                How it Works
            </h1>
            <p className="subtitle text-center text-[#878787] text-lg leading-[21px] mt-[10px]">
                We have been providing great flooring solutions service.
            </p>
            <div className="steps flex justify-between mt-[50px]">
                {Cards.map((card, index) => (
                    <div
                        key={index}
                        className="step-card relative w-[264px] h-[264px] bg-white shadow transform hover:scale-110 group"
                        onMouseEnter={() => setActiveIndex(index)}
                        onMouseLeave={() => setActiveIndex(null)}
                    >

                        <div className={`underline absolute bottom-0 w-full h-1 ${activeIndex === index ? 'bg-[#0594ff]' : 'bg-[#dcdcdc]'
                                } group-hover:bg-blue-700 transition-colors`}
                        />
                        <div className="step-number absolute left-[71px] top-0 text-[#444444] text-[100px] font-extrabold opacity-5 leading-[130px]">
                            {card.step}
                        </div>
                        <h2 className="step-title absolute left-8 top-[84px] text-[#444444] text-[28px] font-semibold leading-9">
                            {card.title}
                        </h2>
                        <p className="step-description absolute left-8 top-[168px] text-[#878787] text-lg leading-[21px]">
                            {card.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
