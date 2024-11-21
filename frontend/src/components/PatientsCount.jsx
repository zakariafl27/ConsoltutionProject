import React from 'react';
import { stats } from '../tools/Stats';

export default function PatientsCount() {
    return (
        <div className="relative w-full lg:w-[1543px] top-[205px] left-0 lg:left-[-20px] mx-auto bg-[#f8f8f8] py-12 px-4 flex flex-col items-center">
            
            <h2 className="w-full max-w-[701px] h-auto text-center text-[#444444] text-3xl lg:text-[47px] not-italic font-semibold leading-tight lg:leading-[60px]">
                Our Stats show that we've Happy Patients
            </h2>
            
            <p className="w-full max-w-[618px] h-auto mt-8 lg:mt-[50px] text-center text-[#878787] text-base lg:text-lg font-normal font-['Helvetica'] leading-relaxed lg:leading-[21px]">
                And excellence partiality estimating terminated day everything.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 lg:gap-8 mt-6">
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className="w-[180px] lg:w-[264px] h-[180px] lg:h-[207px] flex flex-col items-center justify-center bg-[#f8f8f8] m-2"
                    >
                        <div className="text-center text-[#444444] text-3xl lg:text-[50px] not-italic mb-2">
                            {stat.value}
                        </div>

                        <div className="text-center text-[#878787] text-base lg:text-lg font-normal mt-4">
                            {stat.title}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
