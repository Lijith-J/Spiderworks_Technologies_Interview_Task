import React from 'react'
import '../../Styles/Styles.scss'

import avatar1 from './images/2151100226.jpg'
import avatar2 from './images/50955.jpg'
import avatar3 from './images/freepik-export-20240529133139mVT3.png'


const Avatars_section = () => {


    return (
        <>

            <div className='bg-red-400 w-full h-[470px] flex flex-shrink gap-1 items-center overflow-hidden'>

                <div className='bg-slate-300 w-[100%] h-[100%] py-10 grid grid-cols-2 items-center overflow-hidden' >

                    <div className='bg-white p-2 w-[170px] h-[170px] rounded-full avatar-bubbles-div-1'>
                        <div className=' rounded-full flex justify-center items-center overflow-hidden'>
                            <img src={avatar1} alt="" />
                        </div>
                    </div>

                    <div className='bg-white p-2 w-[170px] h-[170px] rounded-full flex  avatar-bubbles-div-2'>
                        <div className=' bg-yellow-300 rounded-full flex justify-center items-center '>
                            <img src={avatar3} alt="" />
                        </div>
                        <div className='bg-teal-700 text-white text-sm px-4 py-[2px]'>
                            How?
                        </div>
                    </div>

                </div>
                
                <div className='bg-slate-300 w-[100%] h-[100%] grid justify-evenly items-center overflow-hidden' >

                    <div className='bg-white p-2 w-[170px] h-[170px] rounded-full  avatar-bubbles-div-3'>
                        <div className=' bg-teal-500 rounded-full flex justify-center items-center overflow-hidden'>
                            <img src={avatar3} alt="" />
                        </div>
                    </div>
                    <div className='bg-white p-2 w-[170px] h-[170px] rounded-full flex  avatar-bubbles-div-4'>
                        <div className=' rounded-full flex justify-center items-center overflow-hidden'>
                            <img src={avatar1} alt="" />
                        </div>
                        <div className='bg-blue-500 text-white text-sm px-5 py-[2px]'>
                            That's it! Sir.
                        </div>
                    </div>

                </div>
                
                <div className='bg-slate-300 w-[100%] h-[100%] grid grid-cols-2 items-center overflow-hidden' >

                    <div className='bg-white p-2 w-[170px] h-[170px] rounded-full  avatar-bubbles-div-5'>
                        <div className=' rounded-full flex justify-center items-center overflow-hidden'>
                            <img src={avatar2} alt="" />
                        </div>
                    </div>
                    <div className='bg-white p-2 w-[170px] h-[170px] rounded-full  avatar-bubbles-div-6'>
                        <div className=' bg-blue-500 rounded-full flex justify-center items-center overflow-hidden'>
                            <img src={avatar3} alt="" />
                        </div>
                        <div className='bg-yellow-400 text-white text-sm px-5 py-[2px]'>
                            Hey Thanks
                        </div>
                    </div>

                </div>
                
                <div className='bg-slate-300 w-[100%] h-[100%] grid justify-items-center content-center overflow-hidden' >

                    <div className='bg-white p-2 w-[170px] h-[170px] rounded-full  avatar-bubbles-div-7'>
                        <div className=' rounded-full flex justify-center items-center overflow-hidden'>
                            <img src={avatar1} alt="" />
                        </div>
                    </div>
                    <div className='bg-white p-2 w-[170px] h-[170px] rounded-full  avatar-bubbles-div-8'>
                        <div className=' rounded-full flex justify-center items-center overflow-hidden'>
                            <img src={avatar2} alt="" />
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