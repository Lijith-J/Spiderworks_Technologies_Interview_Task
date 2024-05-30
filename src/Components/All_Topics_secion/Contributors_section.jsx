import React from 'react'


import { MdStar } from "react-icons/md";
import { PiStarFourFill } from "react-icons/pi";
import { MdArrowRightAlt } from "react-icons/md";

import picture1 from './images/close-up-portrait-curly-handsome-european-male.jpg'
import picture2 from './images/WhatsApp_Image_2024-05-30_at_2.49.48_PM-removebg-preview.png'


import { BiMessageRounded } from "react-icons/bi";

const Contributors_section = () => {
  return (
    <>

    <div className='p-2  bg-blue-400 flex flex-col justify-center gap-20'>

      <div className=' rounded-2xl bg-red-100 flex flex-col justify-center py-10'>

        <div className=' py-4 contributor-top-div'>

          <div className='w-full p-3 flex flex-col items-center'>
            <h2 className=' text-3xl font-serif'>Top Contributer</h2>
            <h2 className=' text-3xl font-serif italic'>this week</h2>

          </div>

          <div className=' p-3 flex justify-center items-center'>

            <div className=' absolute bg-pink-900 text-white top-contributor-response-tag '>
              <BiMessageRounded size={12} />
              <span>100+ RESPONSES</span>

            </div>

            <div className=' w-[170px] h-[170px] flex justify-center object-fill overflow-hidden rounded-full'>
              <img src={picture1} className='object-cover' alt="" />
            </div>

            <div className='absolute bg-teal-800 text-white top-contributor-rating-tag'>

              <MdStar color='gold' />
              <span>
                4.2 POSITIVE RATING
              </span>
            </div>

          </div>

          <div className=' p-3 flex justify-center items-center text-xl font-medium '>
            Jishnu Ambadi
          </div>

        </div>

        <div className='p-3 px-10 flex flex-col gap-3 items-center'>
          <p>You can be next one! Be a part of USA's 1st CPT Program Directory</p>

          <button className='flex gap-1 px-[3rem] py-[1.5rem] rounded-full text-white join-community-button'>
            Join Community & Ask
            <PiStarFourFill color='gold' />
          </button>
        </div>

      </div>


      {/* Bottom Part ===================================================================== */}

      <div className=' rounded-2xl p-4 contibutors-bottom-parent-div'>

        <div className='  w-full h-[300px] p-5 flex justify-center items-center'>

          <div className='backside-image-rounded-div1'></div>
          <div className='backside-image-rounded-div2'></div>

          <div className=' backside-image-rounded-div3'>
            <img src={picture2} alt="" />
          </div>

        </div>

        <div className='  text-white p-2 flex gap-3 flex-col items-center'>
          <span className='text-sm'>E-BOOK</span>
          <p className=' text-[18px] text-center font-serif'>Charting Paths:Program Through a <br /> <span className='italic'>Student's Eyes</span></p>
        </div>

        <div className='p-3 flex justify-center items-center'>
          <button className=' text-white ring-1 ring-white px-4 py-2 flex gap-1 items-center rounded-full hover:bg-white hover:text-stone-900 hover:ring-stone-900'>
            Get the guide
            <MdArrowRightAlt size={40} />
          </button>
        </div>


      </div>

      </div>

    </>
  )
}

export default Contributors_section
