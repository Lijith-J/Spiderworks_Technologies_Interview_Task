import React, { useEffect } from 'react'

import { LuSearch } from "react-icons/lu";

import Aos from 'aos'
import 'aos/dist/aos.css'

const Forum_section = () => {

    useEffect(() => {
        Aos.init(
            {
                once: true,
            }
        );
    }, []);

    return (
        <>

            <div className='p-4 pl-4 sm:pl-14'>
                <span className='text-slate-400 text-[10px] cursor-pointer hover:text-black'>Home/Forum</span>
            </div>

            <div className=' p-2 flex flex-col items-center overflow-hidden' >

                <div className=' p-3 gap-4 flex flex-col items-center forum-section-titles-div' data-aos="fade-down" data-aos-duration="700" data-aos-offset="50">
                    <span className='text-[14px]'>FORUM</span>
                    <h1 className=' text-2xl sm:text-4xl'>Discuss <span>& Evolve</span></h1>
                    <p className=' text-gray-600 text-sm sm:text-base text-center sm:text-justify'>Engage with Fellow Proffecionals: Join the Program Forum Discussion!</p>
                </div>


                <div className=' sm:w-[50%] md:w-[50%] lg:w-[40%] p-2 md:px-10 overflow-hidden'>

                    <div className='bg-white p-1 ring-1 ring-slate-900 rounded-full flex  justify-evenly items-center overflow-hidden ' data-aos="zoom-in" data-aos-duration="700" data-aos-offset="50">
                        <input type="text" className=' p-1 sm:p-3 w-[90%] outline-none border-none placeholder:text-stone-900' placeholder='Search Topics' />
                        <div className=' bg-stone-900 sm:mr-2 p-2 flex rounded-full cursor-pointer' >
                            {/* <img src={searchIcon} className='w-100' alt="" /> */}
                            <LuSearch color='white' size={25} />
                        </div>
                    </div>

                </div>

            </div>


        </>
    )
}

export default Forum_section
