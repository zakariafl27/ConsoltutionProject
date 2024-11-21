import React from 'react';

export default function Footer() {
  return (
    <div className="relative w-full max-w-[1560px] left-0 h-[431px] top-[200px]  text-white">
      
      <div className="absolute left-0 mt-3 top-[493px] w-full h-[45px] flex justify-center items-center text-sm bg-blue-600 font-normal font-['Helvetica']">
        Copyright © 2024 all rights reserved ZAKARIA-FLAFI
      </div>
      
      
      <div className="absolute left-[491px] top-[81px] w-[206px] h-full flex flex-col justify-center space-y-6 text-lg text-stone-950">
        <div className="text-2xl font-bold mb-10">CATEGORIES</div>
        <a href='#'>Doctors</a>
        <a href='#'>Surgeons</a>
        <a href='#'>Nursing Staff</a>
        <a href='#'>Medicines</a>
        <a href='#'>Billing Info</a>
        <a href='#'>Customer Support</a>
      </div>
      
      
      <div className="absolute left-[848px] top-[81px] w-[202px] h-full flex flex-col justify-center space-y-6 text-lg text-stone-950">
        <div className="text-2xl font-bold mb-10">ABOUT</div>
        <a href='#'>About Us</a>
        <a href='#'>Partnerships</a>
        <a href='#'>Finance Experts</a>
        <a href='#'>Project Management</a>
        <a href='#'>Product Manager</a>
        <a href='#'>The Team</a>
      </div>
      
      
      <div className="absolute left-[1130px] top-[29px] w-[181.26px] h-full flex flex-col justify-center space-y-6 text-lg text-stone-950">
        <div className="text-2xl font-bold mb-10">Follow Us</div>
        <a href='#'>Facebook</a>
        <a href='#'>Twitter</a>
        <a href='#'>Instagram</a>
        <a href='#'>Linkedin</a>
      </div>

      
      <div className="absolute left-[124px] top-[203px] w-[249px] text-[#878787] text-lg font-normal font-['Helvetica']">
        <p className="leading-relaxed">
          Automate your entire healthcare hiring, onboarding and compliance with a true technology platform.
        </p>
        <div className="flex space-x-2 mt-6">
          <a a href='#' className="relative w-9 h-9 bg-[#444444] hover:bg-blue-700 rounded-lg">
            <img src="/images/social-media/Facebook.png" className='absolute w-3 left-[11px] top-[7px]' alt="Faceebook" />
            </a>
          <a a href='#' className="relative w-9 h-9 bg-[#444444] hover:bg-blue-700 rounded-lg">
            <img src="/images/social-media/Linkedin.png" className='absolute w-5 left-[8px] top-[8px]' alt="Linkedin" />
          </a>
          <a a href='#' className="relative w-9 h-9 bg-[#444444] hover:bg-blue-700 rounded-lg">
            <img src="/images/social-media/Twitter.png" className='absolute w-5 left-[8px] top-[9px]' alt="Twitter" />
          </a>
        </div>
      </div>

      
      <div className="absolute left-[124px] top-[98px] flex items-center text-[26px] font-bold">
        <span className="text-[#0594ff]">O</span>
        <span className="text-[#444444]">.Consultation</span>
      </div>
    </div>
  );
}
