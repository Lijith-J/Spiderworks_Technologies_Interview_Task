import React from 'react'


import { MdStar } from "react-icons/md";
import { PiStarFourFill } from "react-icons/pi";

import picture1 from './images/bearded-man-with-striped-shirt.jpg'
import picture2 from './images/close-up-portrait-curly-handsome-european-male.jpg'
import pic from './images/WhatsApp_Image_2024-05-30_at_2.49.48_PM-removebg-preview.png'


import { BiMessageRounded } from "react-icons/bi";

const Contributors_section = () => {
  return (
    <>

      <div className=' rounded-2xl bg-red-50 flex flex-col justify-center py-10'>

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
              <img src={picture1} alt="" />
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

          <button className='flex gap-1 px-[3.5rem] py-[1.5rem] rounded-full text-white join-community-button'>
            Join Community & Ask

            <PiStarFourFill color='gold' />
          </button>
        </div>

      </div>



      <div className='  p-4 contibutors-bottom-parent-div'>

        <div className='  w-full h-[300px] p-5 flex justify-center items-center'>

          <div className='backside-image-rounded-div1'>

          </div>
          <div className='backside-image-rounded-div2'>

          </div>
          <div className=' backside-image-rounded-div3'>
            <img src={pic} alt="" />

          </div>

        </div>

        <div>
          <span>E-BOOK</span>


        </div>


      </div>

    </>
  )
}

export default Contributors_section
