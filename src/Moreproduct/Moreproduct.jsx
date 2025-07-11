import React from 'react'

const Moreproduct = () => {
  return (
    <div className=' md:pt-10 md:pl-40 md:pr-60 pr-10 md:pb-20 pl-7 space-y-4 text-center flex md:flex-row items-center justify-center md:justify-between flex-col w-full'>
      <div className='max-w-2xl space-y-8 font-serif'>
        <h1 className='text-2xl text-[#4B2C7A] font-serif'>Learn About Us And What<br></br> Set Us Apart From Others</h1>
        <p className='max-w-xl'>At Gyalu, we create more than just luxury jewelry,
             we craft timeless pieces that celebrate individuality,
              elegance, and the stories that shape us. Founded on a passion for exquisite design and impeccable craftsmanship,
               Gyalu is a brand that believes in the power of jewelry to inspire confidence,
               elevate beauty, and create lasting memories.
        </p>
        <button class="mt-4 px-6 py-2 border hover:scale-110 transition-transform duration-300  border-[#4B2C7A] text-[#4B2C7A] rounded hover:bg-[#4B2C7A] hover:text-white">
             Read More
            </button>
      </div>
      <div className='flex md:flex-row flex-col'>
        <img className="relative z-10 top-47 right-3 w-[100%] h-[100%]" src="./image (28).png"/>
        <img className="absolute z-0" src="./image (27).png"/>
      </div>
    </div>
  )
}

export default Moreproduct
