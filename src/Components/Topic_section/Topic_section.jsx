import React, { useEffect } from 'react'
import '../../Styles/Styles.scss'

import { LuMessageSquare } from "react-icons/lu";

import Aos from 'aos'
import 'aos/dist/aos.css'

const Topic_section = () => {

    useEffect(() => {
        Aos.init(
            {
                once: true,
            }
        );
    }, []);
    

    return (
        <>
            <div className=' p-3 sm:p-3 md:p-5 lg:p-24 lg:py-20 topic-section-parent-div'>

                <div className='flex flex-col overflow-hidden'>

                    <div className=' p-3 gap-3 flex flex-col items-center'>
                        <span className=''>TOPICS</span>
                        <h1 className='text-3xl sm:text-4xl font-serif' data-aos="zoom-out" data-aos-duration="700" data-aos-offset="50">Most Searched Ones</h1>
                    </div>

                    <div className='py-5 p-3 md:p-4 lg:p-7 grid  md:grid-cols-2 lg:grid-cols-3  gap-5 overflow-hidden'>

                        <div className='bg-slate-900 text-white  px-12 py-16 flex justify-center items-center font-serif text-2xl rounded-2xl cursor-pointer topic-items-divs' data-aos="fade-up" data-aos-duration="900" data-aos-offset="50">
                            Elibility
                        </div>
                        <div className='bg-slate-900 text-white lg:text-[22px]  px-12 py-16 flex justify-center items-center font-serif text-2xl rounded-2xl cursor-pointer topic-items-divs' data-aos="fade-up" data-aos-duration="900" data-aos-offset="50">
                            F1 Visa Students
                        </div>
                        <div className='bg-slate-900 text-white  px-12 py-16 flex justify-center items-center font-serif text-2xl rounded-2xl cursor-pointer topic-items-divs' data-aos="fade-up" data-aos-duration="900" data-aos-offset="50">
                            Universities
                        </div>
                        <div className='bg-slate-900 text-white  px-12 py-16 flex justify-center items-center font-serif text-2xl rounded-2xl cursor-pointer topic-items-divs' data-aos="fade-up" data-aos-duration="900" data-aos-offset="50">
                            Admission
                        </div>
                        <div className='bg-slate-900 text-white  px-12 py-16 flex justify-center items-center font-serif text-2xl rounded-2xl cursor-pointer topic-items-divs' data-aos="fade-up" data-aos-duration="900" data-aos-offset="50">
                            Companies
                        </div>
                        <div className='bg-slate-900 text-white  px-12 py-16 flex justify-center items-center font-serif text-2xl rounded-2xl cursor-pointer topic-items-divs' data-aos="fade-up" data-aos-duration="900" data-aos-offset="50">
                            Jobs
                        </div>

                    </div>

                    <div className='flex justify-center gap-4 p-4' data-aos="zoom-in-up" data-aos-duration="700" data-aos-offset="50">
                        <span className=' text-sm sm:text-base font-sans cursor-pointer'>Didn't find your topic?</span>

                        <div className='flex justify-center items-center gap-2 cursor-pointer'>
                            <LuMessageSquare color='darkmagenta' />
                            <span className=' text-sm sm:text-base font-serif italic'> Start discussing</span>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Topic_section
