import React, { useEffect } from 'react'

import '../../Styles/Styles.scss'


import mainLogo from './images/logo.png'
import { LuMessageSquare } from "react-icons/lu";
import { IoIosMenu } from "react-icons/io";

import searchIcon from './images/search.png'

const Second_Navbar = () => {


    return (

        <>


            <div className='fixed z-10 p-2 top-[15px] sm:top-[20px] w-full flex justify-center second-navbar-parent overflow-hidden'>


                <div className=' w-[85%] sm:[85%] md:w-[70%] lg:w-[50%] h-[60px] rounded-lg p-2 gap-2 flex justify-around second-navbar-items-div' >

                    <div className=' flex p-1 '>
                        <img className='cursor-pointer ' src={mainLogo} alt="" />
                    </div>

                    <div className='p-2 flex gap-2 justify-evenly items-center'>

                        <div className='bg-gray-900 text-white px-5 py-[6px] rounded-full hidden sm:flex gap-2 justify-center items-center cursor-pointer hover:bg-slate-700 '>
                            <IoIosMenu color='white' size={22} />
                            <span className=''>Menu</span>
                        </div>

                        <div className=' rounded-full p-[2px] flex justify-center items-center cursor-pointer second-navbar-message-button'>
                            <div className='bg-white px-3 py-[6px] rounded-full flex items-center gap-2 hover:bg-slate-100'>
                                <LuMessageSquare size={15} />
                                <span className=' text-[10px] sm:text-sm'>Discuss CPT</span>
                            </div>
                        </div>

                    </div>

                    <div className=' h-full lg:p-2 flex justify-center items-center '>

                        <div className='bg-gray-900 text-white flex p-1 gap-1 lg:gap-1 items-center rounded-full cursor-pointer hover:bg-white hover:text-stone-900 hover:ring-1 ring-stone-900'>

                            <div className=' bg-white sm:p-1 rounded-full'>
                                <img src={searchIcon} className='w-[20px] sm:w-[25px]' alt="" />
                            </div>

                            <div className='  flex p-[5px] lg:p-2 items-center justify-center'>
                                <span className='text-[10px] sm:text-sm'>Join programme</span>
                            </div>

                        </div>

                    </div>

                </div>

            </div>



        </>
    )
}

export default Second_Navbar