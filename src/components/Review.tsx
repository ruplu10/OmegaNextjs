import React from 'react'
import { FaStar } from "react-icons/fa6";
import { WriteReview } from './Button'

const Review = () => {
  return (
    <div className="mt-10">
        <div className="flex flex-col justify-center items-center mb-15 w-[100%] ">
        <h1 className="text-sky-500">Read Our</h1>

        <h1 className="text-blue-800 font-semibold flex items-center justify-center w-[35%]">
          <span className="flex-grow bg-black h-[1px] w-[25%]"></span>
          <span className="px-4">Testimonials</span>
          <span className="flex-grow bg-black h-[1px] w-[25%]"></span>
        </h1>
      </div>
      <div className='flex flex-row justify-between px-3 border border-black rounded-lg mx-5 my-7'>
      <div className="flex flex-row">
        <h1 className="font-bold text-black text-2xl mr-3">4.9</h1>
        <FaStar className="text-yellow-500 mt-2"/>
        <FaStar className="text-yellow-500 mt-2"/>
        <FaStar className="text-yellow-500 mt-2"/>
        <FaStar className="text-yellow-500 mt-2"/>
        <FaStar className="text-yellow-500 mt-2"/>



      </div>
      <div>
      <WriteReview type="button" />
      </div>
      </div>
    </div>
  )
}

export default Review