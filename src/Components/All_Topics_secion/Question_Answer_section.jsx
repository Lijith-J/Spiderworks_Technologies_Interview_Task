import React, { useEffect } from 'react'

import profilePic1 from './images/bearded-man-with-striped-shirt.jpg'
import profilePic2 from './images/close-up-portrait-curly-handsome-european-male.jpg'
import profilePic3 from './images/horizontal-portrait-smiling-happy-young-pleasant-looking-female-wears-denim-shirt-stylish-glasses-with-straight-blonde-hair-expresses-positiveness-poses.jpg'
import profilePic4 from './images/front-view-smiley-woman-seaside.jpg'


import { BiConversation } from "react-icons/bi";


import Aos from 'aos'
import 'aos/dist/aos.css'

const Question_Answer_section = () => {

  useEffect(() => {
    Aos.init(
        {
            once: true,
        }
    );
}, []);

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

      <div className=' bg-white hidden sm:flex flex-col gap-2 overflow-hidden'>

        {
          question_answer_array.map((item, index) => (

            <div key={index} className='bg-white py-3 px-1 flex items-center justify-between  question-answers-item-div' data-aos="fade-up" data-aos-duration="700" data-aos-offset="50">
              <div className=' w-[35px] sm:w-[50px] h-[35px] sm:h-[50px] rounded-full flex justify-center object-fill overflow-hidden cursor-pointer'>
                <img src={item.image} className='object-cover' alt="" />
              </div>

              <div className=' w-[37%] sm:w-[45%] md:w-[50%] flex flex-col gap-1 question-div'>
                <h3 className='text-xs sm:text-sm md:text-lg font-medium'>{item.question}</h3>
                <p className='text-xs text-gray-500 cursor-pointer'>Posted by {item.name}</p>
              </div>


              <div className='bg-slate-200 hover:bg-slate-300 px-2 sm:px-3 md:px-4 py-1 sm:py-2 md:py-3 rounded-full flex items-center gap-1 cursor-pointer responses-button'>
                <BiConversation color='maroon' />
                <span className=' text-[9px] sm:text-xs'>{item.responses} Responses</span>
              </div>

              <button className=' bg-stone-900 text-xs sm:text-sm md:text-base text-white px-2 sm:px-3 md:px-7 py-2 md:py-3 rounded hover:ring-1 ring-stone-900 hover:bg-white hover:text-stone-900 view-answer-button'>
                View Answer
              </button>

            </div>

          ))

        }

      </div>

      <div className=' hidden sm:flex sm:px-3 py-10 sm:py-16 overflow-hidden'>
        <button className=' bg-white ring-1 ring-stone-900 text:xs sm:text-base px-3 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-stone-900 hover:text-white' data-aos="fade-up" data-aos-duration="700" data-aos-offset="50">
          Load More
        </button>

      </div>


      {/* mobile screen view 
      ========================================================== */}


      <div className=' bg-white w-[100%] flex sm:hidden flex-col gap-4'>

        {
          question_answer_array.map((item, index) => (

            <div key={index} className='bg-white py-3 px-1 gap-4 flex flex-col items-center justify-between  ring-1 ring-stone-200 rounded' data-aos="fade-up" data-aos-duration="800" data-aos-offset="50">
              <div className='w-[80%]  flex justify-center items-center '>

                <div className=' translate-x-4 w-[40px] sm:w-[50px] h-[40px] sm:h-[50px] rounded-full flex justify-center object-fill overflow-hidden cursor-pointer'>
                  <img src={item.image} className='object-cover' alt="" />
                </div>

                <div className=' w-[50%] ml-16 flex flex-col gap-1 question-div'>
                  <h3 className='text-[10px] font-medium'>{item.question}</h3>
                  <p className='text-[10px] text-gray-500 cursor-pointer'>Posted by {item.name}</p>
                </div>

              </div>

              <div className='w-full flex justify-center gap-4 items-center'>
                <div className='bg-slate-200 hover:bg-slate-300 px-2 sm:px-3 md:px-4 py-2 sm:py-2 md:py-3 rounded-full flex items-center gap-1 cursor-pointer responses-button'>
                  <BiConversation color='maroon' />
                  <span className=' text-[9px] sm:text-xs'>{item.responses} Responses</span>
                </div>

                <button className=' bg-stone-900 text-xs sm:text-sm md:text-base text-white px-2 sm:px-3 md:px-7 py-2 md:py-3 rounded hover:ring-1 ring-stone-900 hover:bg-white hover:text-stone-900 view-answer-button'>
                  View Answer
                </button>
              </div>

            </div>

          ))

        }

      </div>

      <div className=' flex sm:hidden justify-end px-2 sm:px-3 py-10 sm:py-16 overflow-hidden'>
        <button className=' bg-white ring-1 ring-stone-900 text:xs sm:text-base px-3 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-stone-900 hover:text-white' data-aos="zoom-in" data-aos-duration="700" data-aos-offset="50">
          Load More
        </button>

      </div>




    </>
  )
}

export default Question_Answer_section