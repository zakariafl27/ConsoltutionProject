import React from 'react'

export default function Button(props) {
    return (
        <div className="relative left-[1350px] w-[130px] h-12 ">
            <button className="absolute w-[130px] h-12 top-0 bg-[#0594ff] rounded-[15px]" />
            <a href='#' className="absolute left-[46px] top-[11px] text-center 
            text-white text-lg font-['Helvetica']">
                {props.text}
            </a>
        </div>
    )
}
