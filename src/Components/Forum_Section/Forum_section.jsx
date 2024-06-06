import React, { useEffect, useState } from 'react'

import { LuSearch } from "react-icons/lu";

import Aos from 'aos'
import 'aos/dist/aos.css'

import { FaBriefcase } from "react-icons/fa";
import { IoSchoolSharp } from "react-icons/io5";
import { FaUniversity } from "react-icons/fa";
import { MdHomeWork } from "react-icons/md";
import { FaCcVisa } from "react-icons/fa6";
import { PiSmileySadLight } from "react-icons/pi";



const data = [
    {
        type: "Job",
        name: "Software Engineer",
        image: <FaBriefcase size={50} />,
        description: "Develop software applications.",
        eligibility: "Bachelor's degree in Computer Science or related field."
    },
    {
        type: "Admission",
        name: "University Admission",
        image: <IoSchoolSharp size={50} />,
        description: "Process for university admission.",
        eligibility: "High school diploma or equivalent."
    },
    {
        type: "University",
        name: "MIT",
        image: <FaUniversity size={50} />,
        description: "Massachusetts Institute of Technology.",
        eligibility: "Excellent academic record, standardized test scores, and extracurricular achievements."
    },
    {
        type: "Company",
        name: "Google",
        image: <MdHomeWork size={50} />,
        description: "Technology company specializing in internet services.",
        eligibility: "Relevant experience and skills in technology and innovation."
    },
    {
        type: "Visa",
        name: "Student Visa",
        image: <FaCcVisa size={50} />,
        description: "Visa for students studying abroad.",
        eligibility: "Acceptance letter from a recognized educational institution."
    }
];


const Forum_section = () => {


    const [searchInputValue, setSearchInputValue] = useState("");

    const [searchItems, setSearchItems] = useState([])


    // Filter products based on search input
    const handleSearchProduct = (event) => {
        setSearchInputValue(event.target.value);

        const filteredProducts = data.filter(item =>
            item.name.toLowerCase().startsWith(event.target.value.toLowerCase()) ||
            item.type.toLowerCase().startsWith(event.target.value.toLowerCase())
        );
        setSearchItems(filteredProducts);
    };


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
                        <input
                            type="text"
                            value={searchInputValue}
                            onChange={handleSearchProduct}
                            className=' p-1 sm:p-3 w-[90%] outline-none border-none placeholder:text-stone-900' placeholder='Search Topics'
                        />

                        <div className=' bg-stone-900 sm:mr-2 p-2 flex rounded-full cursor-pointer' >
                            {/* <img src={searchIcon} className='w-100' alt="" /> */}
                            <LuSearch color='white' size={25} />
                        </div>

                    </div>

                </div>

            </div>



            {
                searchInputValue === "" ? "" :
                    searchItems.length === 0 ?
                        <div className='w-full bg-slate-200 py-5 flex justify-center '>

                            <div className="bg-white w-50 p-2 px-4 shadow-lg rounded-lg overflow-hidden  ">

                                <div className=" p-4 flex items-center justify-center">
                                <PiSmileySadLight size={40} />
                                </div>

                                <div className="  justify-center">
                                    <p>No Items Found</p>
                                </div>

                            </div>
                        </div>


                        :

                        <div className=' w-full bg-slate-100 px-5 py-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                            <>
                                {searchItems.map((item, index) => (

                                    <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col justify-center box-border items-center md:flex-row cursor-pointer">

                                        <div className=" sm:h-full pt-5 md:p-4 flex  justify-center items-center">
                                            {item.image}
                                        </div>

                                        <div className=" p-3 flex flex-col justify-center items-center md:items-start">
                                            <p className="text-2xl font-semibold text-gray-900">{item.type}</p>
                                            <p className="text-xl font-medium text-gray-700">{item.name}</p>
                                            <p className="text-sm text-gray-600 mt-2">{item.description}</p>
                                        </div>

                                    </div>

                                ))}
                            </>
                        </div>

            }


        </>
    )
}

export default Forum_section
