import React from 'react'
import SearchTopics from './SearchTopics'
import Question_Answer_section from './Question_Answer_section'
import Contributors_section from './Contributors_section'

const All_Topics_Section_Main = () => {
  return (
    <>
        <div className='flex bg-red-400 py-28'>
            <div className='bg-green-400 p-7 px-20 w-[68%] flex flex-col'>
                <SearchTopics/>
                <Question_Answer_section/>
            </div>

            <div className='bg-blue-400'>
                <Contributors_section/>
            </div>
        </div>

    </>
  )
}

export default All_Topics_Section_Main