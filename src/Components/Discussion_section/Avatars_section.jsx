import React, { useEffect } from 'react'
import '../../Styles/Styles.scss'

import avatar1 from './images/2151100226.jpg'
import avatar2 from './images/freepik-export-20240529133139mVT3.png'
import avatar3 from './images/50955.jpg'
import avatar4 from './images/2151100205.jpg'
import avatar5 from './images/40542.jpg'
import avatar6 from './images/51154.jpg'
import avatar7 from './images/51267.jpg'
import avatar8 from './images/51725.jpg'


import Aos from 'aos'
import 'aos/dist/aos.css'

const Avatars_section = () => {

  useEffect(() => {
        Aos.init(
            {
                once: true,
            }
        );
    }, []);

    return (
        <>

            <div className=' w-full h-[280px] sm:h-[400] md:h-[430px] lg:h-[470px] flex justify-between gap-1 items-center overflow-x-hidden' data-aos="zoom-in-up" data-aos-duration="1000" data-aos-offset="50">

                <div className=' w-[100%] h-[100%] py-10 grid grid-cols-2 items-center '  >

                    <div className='bg-white p-2 w-[70px] sm:w-[100px] md:w-[140px] lg:w-[170px] h-[70px] sm:h-[100px] md:h-[140px] lg:h-[170px] rounded-full avatar-bubbles-div-1' >
                        <div className=' rounded-full flex justify-center items-center overflow-hidden'>
                            <img src={avatar1} alt="" />
                        </div>
                    </div>

                    <div className='bg-white p-2 w-[70px] sm:w-[100px] md:w-[140px] lg:w-[170px] h-[70px] sm:h-[100px] md:h-[140px] lg:h-[170px] rounded-full flex  avatar-bubbles-div-2'>
                        <div className=' bg-yellow-300 rounded-full flex justify-center items-center '>
                            <img src={avatar2} alt="" />
                        </div>
                        <div className='bg-teal-700 text-white text-sm px-4 py-[2px]'>
                            How?
                        </div>
                    </div>

                </div>
                
                <div className=' w-[100%] h-[100%] grid justify-evenly items-center ' >

                    <div className='bg-white p-2 w-[70px] sm:w-[100px] md:w-[140px] lg:w-[170px] h-[70px] sm:h-[100px] md:h-[140px] lg:h-[170px] rounded-full  avatar-bubbles-div-3'>
                        <div className='  rounded-full flex justify-center items-center overflow-hidden'>
                            <img src={avatar3} alt="" />
                        </div>
                    </div>
                    <div className='bg-white p-2 w-[70px] sm:w-[100px] md:w-[140px] lg:w-[170px] h-[70px] sm:h-[100px] md:h-[140px] lg:h-[170px] rounded-full flex  avatar-bubbles-div-4'>
                        <div className=' rounded-full flex justify-center items-center overflow-hidden'>
                            <img src={avatar4} alt="" />
                        </div>
                        <div className='bg-blue-500 text-white text-sm px-3 sm:px-5 py-[2px]'>
                            That's it! Sir.
                        </div>
                    </div>

                </div>
                
                <div className=' w-[100%] h-[100%] grid grid-cols-2 items-center ' >

                    <div className='bg-white p-2 w-[70px] sm:w-[100px] md:w-[140px] lg:w-[170px] h-[70px] sm:h-[100px] md:h-[140px] lg:h-[170px] rounded-full  avatar-bubbles-div-5'>
                        <div className=' rounded-full flex justify-center items-center overflow-hidden'>
                            <img src={avatar5} alt="" />
                        </div>
                    </div>
                    <div className='bg-white p-2 w-[70px] sm:w-[100px] md:w-[140px] lg:w-[170px] h-[70px] sm:h-[100px] md:h-[140px] lg:h-[170px] rounded-full  avatar-bubbles-div-6'>
                        <div className='  rounded-full flex justify-center items-center overflow-hidden'>
                            <img src={avatar6} alt="" />
                        </div>
                        <div className='bg-yellow-400 text-white text-sm px-5 py-[2px]'>
                            Hey Thanks
                        </div>
                    </div>

                </div>
                
                <div className=' w-[100%] h-[100%] grid justify-items-center content-center ' >

                    <div className='bg-white p-2 w-[70px] sm:w-[100px] md:w-[140px] lg:w-[170px] h-[70px] sm:h-[100px] md:h-[140px] lg:h-[170px] rounded-full  avatar-bubbles-div-7'>
                        <div className=' rounded-full flex justify-center items-center overflow-hidden'>
                            <img src={avatar7} alt="" />
                        </div>
                    </div>
                    <div className='bg-white p-2 w-[70px] sm:w-[100px] md:w-[140px] lg:w-[170px] h-[70px] sm:h-[100px] md:h-[140px] lg:h-[170px] rounded-full  avatar-bubbles-div-8'>
                        <div className=' rounded-full flex justify-center items-center overflow-hidden'>
                            <img src={avatar8} alt="" />
                        </div>
                        <div className='bg-orange-500 text-white text-sm px-3 py-[2px]'>
                            Thats's Awesome
                        </div>
                    </div>

                </div>
            

            </div>

        </>
    )
}

export default Avatars_section