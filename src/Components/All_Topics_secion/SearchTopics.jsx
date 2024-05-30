import React from 'react'
import { RiRectangleFill } from "react-icons/ri";
import { AiOutlineBulb } from "react-icons/ai";
import { RiSearch2Line } from "react-icons/ri";


const SearchTopics = () => {
  return (
    <>
      <div className='bg-white p-2 text-xs flex justify-between'>

        <div className='flex items-center p-2 gap-3'>
          <span className=''>LATEST DISCUSSIONS AS OF</span>

          <div className=' flex items-center gap-1'>
            <RiRectangleFill color='maroon' />
            <span className=' font-medium'>MAY 30 2024</span>
          </div>
        </div>


        <div className=' bg-blue-300 rounded-full p-2 flex items-center'>
          <AiOutlineBulb  color='blue' size={16}/>

          <select name="" id="" className='bg-blue-300 font-medium border-none outline-none flex w-[100px]'>
            <option value="">ALL TOPICS</option>
          </select>
        </div>

      </div>

      <div className=' py-4'>

        <div className=' ring-1 px-4  bg-white ring-stone-900 w-full rounded-full overflow-hidden flex justify-between items-center'>
          <input type="text" className=' w-[95%] p-4 outline-none border-none placeholder:text-stone-900 placeholder:font-medium' 
          placeholder='Search Topics'
          />
          <RiSearch2Line size={27} className=' cursor-pointer' />

        </div>
      </div>

    </>
  )
}

export default SearchTopics