import React from 'react'

export default function NavLogo() {
    return (
        <div>
            <div className='relative max-w-screen-xl'>
                <div className='absolute'>
                    <img src='/images/logo.png' className='w-[232px] h-[235px]' alt='Logo' />
                </div>
                <div className=' absolute left-[162px] top-[1px] '>
                    <span className="text-[#0594ff] text-[26px] font-bold font-['Helvetica']" >O</span>
                    <span className="text-[#444444] text-[26px] font-bold font-['Helvetica'] Capitalized">.Consoltution</span>
                </div>

            </div>
        </div>
    )
}
