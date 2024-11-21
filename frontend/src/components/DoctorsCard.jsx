import React, { useState } from "react";
import { doctors } from "../tools/Doctors";

export default function DoctorsCard() {
    const [activeIndex, setActiveIndex] = useState(null);


    return (
        
        <div className="max-w-full py-5 px-6 ">
            <div className="bg-gray-50 top-[30px] "/>

            {/* Title Section */}
            <div className="text-center my-[60px]">
                <h1 className="text-[#444444] text-4xl font-semibold">
                    Our Best Doctors
                </h1>
                <p className="text-[#878787] text-lg font-['Helvetica'] mt-2">
                    Beyond genius really enough passed is up.
                </p>
            </div>
            

            {/* Doctor Cards Section */}
            <div className="flex overflow-x-scroll space-x-8 pb-8">
                
                {doctors.map((doctor, index) => (
                    <div
                        key={index}
                        className="flex-none bg-white shadow-lg rounded-lg flex flex-col 
                                    items-center p-4 w-[300px] sm:w-[350px] lg:w-[400px]"
                    >
                        <img
                            className="w-full h-[300px] object-cover rounded-md"
                            src=""
                            alt={doctor.name}
                        />
                        <div
                            key={index}
                            className={`snap-always bg-white shadow-lg rounded-lg flex flex-col items-center p-4 
                                        transition-all duration-300 ${activeIndex === index ? "scale-105" : "scale-100"
                                }`}
                            onMouseEnter={() => setActiveIndex(index)}
                            onMouseLeave={() => setActiveIndex(null)}
                        />
                        <div className="mt-6 mx-4">
                            <h3 className="text-[#444444] text-3xl font-semibold">
                                {doctor.name}
                                <span className="text-[#878787] text-lg ml-3">
                                ({doctor.title})
                            </span>
                            </h3>
                            
                            <p className="text-[#878787] text-lg font-['Helvetica'] mt-4">
                                {doctor.description}
                            </p>
                        </div>
                        <div className="mt-6 flex gap-4">

                            <button className="rounded-md shadow px-6 py-2 bg-blue-500 text-sm font-semibold text-white">
                                Schedule Appointment
                            </button>
                            <button className="border border-[#878787] rounded-md shadow px-4 py-2 text-sm text-dark">
                                View Details
                            </button>
                        </div>
                    </div>
                ))}
                
            </div>

        </div>

    );
}
