import React from 'react';

export default function Subscribe() {
  return (
    <div className="relative w-full top-[70px] max-w-screen-xl h-[300px]">

      <div className="absolute w-full h-full bg-[#0594ff] rounded-[20px]" />
      
      <div className="absolute left-[100px] top-[115px] text-[#fdfdff] text-5xl font-semibold leading-[56px]">
        Subscribe to get updated
      </div>
      <div className="absolute left-[100px] top-[205px] text-white text-lg font-light leading-[21px]">
        Warrant present garrets limited cordial in inquiry to. <br/> 
        Supported me sweetness behaviour shameless excellent so arranging.
      </div>
      

      <div className="absolute left-[100px] top-[71px] text-[#fdfdff] text-lg font-light">
        Newsletter
      </div>
      

      <div className="absolute w-[220px] h-[70px] left-[958px] top-[135px]">
        <button className="w-full h-full absolute rounded-[10px] shadow-lg 
                            border border-white flex items-center justify-center bg-white ">
            <a className="text-base font-semibold">
                Get Started
            </a>
        </button>
      </div>
    </div>
  );
}
