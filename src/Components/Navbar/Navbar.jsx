import React from 'react'
import '../../Styles/Styles.scss'

import mainLogo from './images/logo.png'
import searchIcon from './images/search.png'
import Second_Navbar from './Second_Navbar'

import { IoIosMenu } from "react-icons/io";

const Navbar = () => {
  return (

    <>

      <div className='  w-full h-[80px] sm:h-[95px] flex  justify-between navbar-parent-div'>

        <div className=' w-[25%] sm:w-[25%] md:w-[13%] lg:w-[15%] h-full flex justify-center items-center'>
          <img src={mainLogo} className='w-[50px] lg:w-[60px] lg:mr-8 cursor-pointer' alt="" />
        </div>

        <div className='h-full lg:ml-12 px-3 md:px-6 lg:px-10 gap-2 md:gap-5 hidden md:flex justify-evenly items-center md:text-[12px] lg:text-[15px] navbar-page-navigations-links'>
          <span className='cursor-pointer hover:text-gray-500'>Learn</span>
          <div className=' h-[6px] w-[6px] bg-violet-800 rounded-full'></div>
          <span className='cursor-pointer hover:text-gray-500'>How do i participate?</span>
          <div className=' h-[6px] w-[6px] bg-violet-800 rounded-full'></div>
          <span className='cursor-pointer hover:text-gray-500'>Universities</span>
          <div className=' h-[6px] w-[6px] bg-violet-800 rounded-full'></div>
          <span className='cursor-pointer hover:text-gray-500'>Corperate</span>
        </div>

        <div className=' h-full px-1 sm:px-1 md:px-2 lg:px-4 hidden sm:flex justify-center items-center '>

          <div className='bg-gray-900 text-white flex p-1 lg:p-2 gap-1 lg:gap-2 items-center rounded-full cursor-pointer hover:bg-white hover:text-stone-900 hover:ring-1 ring-stone-900'>

            <div className=' bg-white  lg:p-1 rounded-full'>
              <img src={searchIcon} className='w-[32px]' alt="" />
            </div>

            <div className=' flex p-1 py-[5px]  md:p-2 items-center justify-center'>
              Join programme
            </div>

          </div>

        </div>

        <div className='md:hidden  px-2 sm:px-4 flex justify-center items-center'>

          <div className='  bg-gray-900 p-2 sm:px-5 sm:py-[12px] rounded-full  flex gap-2 justify-center items-center cursor-pointer'>
            <IoIosMenu color='white' size={25} />
            <span className='text-white'>Menu</span>
          </div>
        </div>

      </div>

      <Second_Navbar />

    </>
  )
}

export default Navbar