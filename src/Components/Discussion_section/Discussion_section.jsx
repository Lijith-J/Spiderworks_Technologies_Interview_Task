import React, { useEffect } from 'react'

import { LuMessageSquare } from "react-icons/lu";
import { AiOutlineBulb } from "react-icons/ai";
import { HiOutlineArrowNarrowDown } from "react-icons/hi";
import Avatars_section from './Avatars_section';

import Aos from 'aos'
import 'aos/dist/aos.css'


const Discussion_section = () => {

  useEffect(() => {
        Aos.init(
            {
                once: true,
            }
        );
    }, []);

  return (
    <>


      <div className='p-3 w-full flex flex-col justify-center items-center'>

        <div className=' md:w-[50%] lg:w-[38%] p-3 flex flex-col gap-5 md:gap-0 md:flex-row justify-evenly items-center'>

          <div className=' md:w-[45%] flex justify-center items-center gap-2 cursor-pointer text-black hover:text-gray-600'>
            <div className='px-4 py-2 rounded-2xl bg-red-100 hover:bg-red-200'>
              <LuMessageSquare color='darkmagenta' />
            </div>
            <span className='text-xs md:text-[11px] lg:text-xs'>START DISCUSSING</span>
          </div>

          <div className='bg-violet-800 h-[6px] w-[6px] hidden md:block  rounded-full'></div>

          <div className=' md:w-[45%] flex justify-center items-center gap-2 cursor-pointer text-black hover:text-gray-600'>
            <div className='px-4 py-2 rounded-2xl bg-blue-200 hover:bg-blue-300'>
              <AiOutlineBulb color='blue' />
            </div>
            <span className='text-xs md:text-[11px] lg:text-xs'>VIEW TOPICS</span>

          </div>
        </div> 

        <div className='  w-[35%] p-3 flex justify-evenly items-center'>
          <HiOutlineArrowNarrowDown size={35} className='downArrow'/>
        </div>

      </div>

      <Avatars_section/>

    </>
  )
}

export default Discussion_section