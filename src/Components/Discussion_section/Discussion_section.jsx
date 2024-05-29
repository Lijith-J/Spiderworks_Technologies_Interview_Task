import React from 'react'

import { LuMessageSquare } from "react-icons/lu";
import { AiOutlineBulb } from "react-icons/ai";
import { HiOutlineArrowNarrowDown } from "react-icons/hi";
import Avatars_section from './Avatars_section';

const Discussion_section = () => {
  return (
    <>


      <div className='p-3 w-full flex flex-col justify-center items-center'>

        <div className='w-[35%] p-3 flex justify-evenly items-center'>
          <div className=' w-[40%] flex justify-center items-center gap-2'>
            <div className='px-4 py-2 rounded-2xl bg-red-100'>
              <LuMessageSquare color='darkmagenta' />
            </div>
            <span className=' text-sm'>START DISCUSSING</span>
          </div>

          <div className=' h-[6px] w-[6px] bg-violet-800 rounded-full'></div>

          <div className=' w-[40%] flex justify-center items-center gap-2'>
            <div className='px-4 py-2 rounded-2xl bg-blue-200'>
              <AiOutlineBulb color='blue' />
            </div>
            <span className=' text-sm'>VIEW TOPICS</span>

          </div>
        </div> 

        <div className='  w-[35%] p-3 flex justify-evenly items-center'>
          <HiOutlineArrowNarrowDown size={35}/>
        </div>

      </div>

      <Avatars_section/>

    </>
  )
}

export default Discussion_section