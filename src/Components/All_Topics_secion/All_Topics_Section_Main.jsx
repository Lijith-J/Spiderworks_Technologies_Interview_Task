import React from 'react'
import SearchTopics from './SearchTopics'
import Question_Answer_section from './Question_Answer_section'
import Contributors_section from './Contributors_section'

const All_Topics_Section_Main = () => {

  return (
    <>
        <div className='pt-24 flex flex-wrap justify-center lg:justify-between '>

            <div className='py-5 sm:py-7 p-4 sm:p-5 md:p-7 px-4 sm:px-12 md:px-20 w-[90%] lg:w-[68%] flex flex-col'>
                <SearchTopics/>
                <Question_Answer_section/>
            </div>

            <div className=' w-[100%] lg:w-[30%]'>
                <Contributors_section/> 
            </div>
        </div>

    </>
  )
}

export default All_Topics_Section_Main