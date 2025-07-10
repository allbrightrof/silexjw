import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
const Trend = () => {
  return (
    <div className='md:pt-30 p-20 md:pl-40 w-fll md:pr-60 md:pb-10 flex flex-col md:flex-row md:justify-between'>
        <div>
        <h1 className='font-serif pt-40 md:pt-5 text-2xl text-[#3D3D3D]'>
            Latest Trends
        </h1> 
        <p className='text-[#666666]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            <br></br> Magni vitae facere debitis quam molestiae voluptatibus dignissimos unde quia nihil eos?</p>
        </div>
        <div>
       <button class="mt-4 px-6 py-2 border hover:scale-110 transition-transform duration-300
         border-[#4B2C7A] text-[#ffffff] bg-[#4B2C7A] rounded hover:bg-[#ffffff] hover:text-[#4B2C7A]">Read All Blogs
          <FontAwesomeIcon className='ml-3' icon={faChevronRight} />
          </button>
          </div>
    </div>
  )
}

export default Trend
