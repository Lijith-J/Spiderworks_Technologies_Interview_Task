import React, { useEffect } from 'react'


import { MdStar } from "react-icons/md";
import { PiStarFourFill } from "react-icons/pi";
import { MdArrowRightAlt } from "react-icons/md";
import { BiMessageRounded } from "react-icons/bi";

import picture1 from './images/close-up-portrait-curly-handsome-european-male.jpg'
import picture2 from './images/WhatsApp_Image_2024-05-30_at_2.49.48_PM-removebg-preview.png'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Contributors_section = () => {

  useEffect(() => {
    Aos.init(
      {
        once: true,
      }
    );
  }, []);

  return (
    <>

      <div className=' p-3  hidden lg:flex lg:flex-col  items-center justify-center md:gap-20 overflow-hidden contributors-section-main'>

        <div className='  rounded-2xl  flex flex-col justify-center py-10 contributor-to-main-div' data-aos="fade-left" data-aos-duration="700" data-aos-offset="50">

          <div className=' py-3 contributor-top-div'>

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

          <div className='py-3 px-5 flex flex-col gap-3 items-center'>
            <p className='text-sm'>You can be next one! Be a part of USA's 1st <br /> CPT Program Directory</p>

            <button className=' flex gap-1 px-[3rem] py-[1.5rem] rounded-full text-white hover:ring-stone-900 hover:ring-1 hover:text-stone-900 join-community-button'>
              Join Community & Ask
              <PiStarFourFill color='gold' />
            </button>
          </div>

        </div>


        {/* Bottom Part ===================================================================== */}

        <div className=' px-3 rounded-2xl contibutors-bottom-parent-div' data-aos="fade-right" data-aos-duration="700" data-aos-offset="50">

          <div className='  w-full h-[300px] p-5 flex justify-center items-center'>

            <div className='backside-image-rounded-div1'></div>
            <div className='backside-image-rounded-div2'></div>

            <div className=' backside-image-rounded-div3'>
              <img src={picture2} alt="" />
            </div>

          </div>

          <div className=' text-white p-2 flex gap-3 flex-col items-center'>
            <span className='text-sm'>E-BOOK</span>
            <p className='p-0 text-[17px] text-center font-serif'>Charting Paths:Program Through a <br /> <span className='italic'>Student's Eyes</span></p>
          </div>

          <div className='p-3 flex justify-center items-center'>
            <button className=' text-white ring-1 ring-white px-4 py-2 flex gap-1 items-center rounded-full hover:bg-white hover:text-stone-900 hover:ring-stone-900'>
              Get the guide
              <MdArrowRightAlt size={40} className='rightArrow' />
            </button>
          </div>


        </div>

      </div>


      {/* Small screen view =========================================================== 
      ========================================================================================= */}


      <div className=' py-5 sm:p-4  lg:hidden grid gap-5 sm:grid-col-1 md:grid-cols-2 justify-center content-center overflow-hidden'>

        <div className=' w-[100%] h-[100%] grow rounded-2xl  flex flex-col justify-center py-10 contributor-to-main-div' data-aos="fade-left" data-aos-duration="900" data-aos-offset="50">

          <div className=' py-3 contributor-top-div'>

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

          <div className='py-3 px-5 flex flex-col gap-3 items-center'>
            <p className='text-sm'>You can be next one! Be a part of USA's 1st <br /> CPT Program Directory</p>

            <button className='flex gap-1 md:text-sm lg:text-base px-[2rem] md:px-[3rem] py-[1.5rem] rounded-full text-white hover:ring-stone-900 hover:ring-1 hover:text-stone-900 join-community-button'>
              Join Community & Ask
              <PiStarFourFill color='gold' />
            </button>
          </div>

        </div>


        {/* Right Part ===================================================================== */}

        <div className='w-[100%] h-[100%] px-3 rounded-2xl contibutors-bottom-parent-div' data-aos="fade-right" data-aos-duration="900" data-aos-offset="50">

          <div className='  w-full h-[300px] p-5 flex justify-center items-center'>

            <div className='backside-image-rounded-div1'></div>
            <div className='backside-image-rounded-div2'></div>

            <div className=' backside-image-rounded-div3'>
              <img src={picture2} alt="" />
            </div>

          </div>

          <div className=' text-white p-2 flex gap-3 flex-col items-center'>
            <span className='text-sm'>E-BOOK</span>
            <p className='p-0 text-[17px] text-center font-serif'>Charting Paths:Program Through a <br /> <span className='italic'>Student's Eyes</span></p>
          </div>

          <div className='p-3 flex justify-center items-center'>
            <button className=' text-white ring-1 ring-white px-4 py-2 flex gap-1 items-center rounded-full hover:bg-white hover:text-stone-900 hover:ring-stone-900'>
              Get the guide
              <MdArrowRightAlt size={40} className='rightArrow' />
            </button>
          </div>


        </div>

      </div>

    </>
  )
}

export default Contributors_section
