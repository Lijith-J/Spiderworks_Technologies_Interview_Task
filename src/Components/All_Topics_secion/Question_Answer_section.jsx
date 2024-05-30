import React from 'react'

import profilePic1 from './images/bearded-man-with-striped-shirt.jpg'
import profilePic2 from './images/close-up-portrait-curly-handsome-european-male.jpg'
import profilePic3 from './images/horizontal-portrait-smiling-happy-young-pleasant-looking-female-wears-denim-shirt-stylish-glasses-with-straight-blonde-hair-expresses-positiveness-poses.jpg'
import profilePic4 from './images/front-view-smiley-woman-seaside.jpg'


import { BiConversation } from "react-icons/bi";

const Question_Answer_section = () => {


  const question_answer_array = [

    {
      image: profilePic1,
      question: 'What are the key principles of coding?',
      name: 'Jishnu Ambadi',
      responses: 12
    },
    {
      image: profilePic2,
      question: 'How does guidde facilitate, accurate medical billing?',
      name: 'Sreelakshmi',
      responses: 32
    },
    {
      image: profilePic3,
      question: 'What are the major sections within the guide?',
      name: 'Ambili',
      responses: 20
    },
    {
      image: profilePic4,
      question: 'How often is the guide updated?',
      name: 'Farzana',
      responses: 2
    },
    {
      image: profilePic1,
      question: 'What is the purpose of modifiers in coding?',
      name: 'Neethu',
      responses: 12
    },
    {
      image: profilePic2,
      question: 'What is the differences between and ICD codes?',
      name: 'Sagar',
      responses: 42
    },
    {
      image: profilePic3,
      question: 'What is the significance of Level || codes in CPT?',
      name: 'Anton Joseph',
      responses: 32
    },
    {
      image: profilePic4,
      question: 'How does guide handle telehealth services?',
      name: 'Akhil Joy',
      responses: 32
    },
    {
      image: profilePic1,
      question: 'How are codes categorized within the guide?',
      name: 'Sruthi PP',
      responses: 32
    },
    {
      image: profilePic2,
      question: 'What are the implications of incorrect coding?',
      name: 'Anna Chakko',
      responses: 32
    },
    {
      image: profilePic3,
      question: 'What is the purpose of the guide?',
      name: 'Abhinav KS',
      responses: 32
    },
    {
      image: profilePic4,
      question: 'How are codes organized within the guide?',
      name: 'Rotta Karuma',
      responses: 32
    },
    {
      image: profilePic1,
      question: 'What is the role of modifiers?',
      name: 'Richard Kiger',
      responses: 32
    },

  ]


  return (
    <>

      <div className=' bg-white flex flex-col gap-2'>

        {
          question_answer_array.map((item, index) => (

            <div key={index} className='bg-white py-3 px-1 flex items-center justify-between  question-answers-item-div'>
              <div className=' w-[50px] h-[50px] rounded-full flex justify-center object-fill overflow-hidden cursor-pointer'>
                <img src={item.image} className='object-cover' alt="" />
              </div>

              <div className=' w-[50%] flex flex-col gap-1'>
                <h3 className=' text-lg font-medium'>{item.question}</h3>
                <p className='text-xs text-gray-500 cursor-pointer'>Posted by {item.name}</p>
              </div>

           
                <div className='bg-slate-200 hover:bg-slate-300 px-4 py-3 rounded-full flex items-center gap-1 cursor-pointer'>
                  <BiConversation color='maroon'/>
                  <span className=' text-xs'>{item.responses} Responses</span>
                </div>
              

              <button className=' bg-stone-900 text-white px-7 py-3 rounded hover:ring-1 ring-stone-900 hover:bg-white hover:text-stone-900'>
                View Answer
                </button>

            </div>
          ))

        }

      </div>

      <div className=' px-3 py-16'>

        <button className=' ring-1 ring-stone-900 px-6 py-3 rounded-full hover:bg-stone-900 hover:text-white'>
          Load More
        </button>

      </div>

    </>
  )
}

export default Question_Answer_section