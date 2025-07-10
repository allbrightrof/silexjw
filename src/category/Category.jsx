import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';


const Category = () => {
  return (
    <div className='pl-10 bg-[#fafafa] pr-10 pt-10 pb-10 md:pl-50 md:pr-50 md:pt-20 md:pb-20'>
      <div>
      <div className="flex justify-between">
        <div>
        <h3 className="text-xl text-[#101010]">Browse By category </h3>
        </div>
        <div>
        <FontAwesomeIcon icon={faChevronLeft} />
        <FontAwesomeIcon icon={faChevronRight} />
        </div>
        </div>
      </div>
    <div className='grid grid-cols-2 md:grid-cols-6 gap-12 pt-5 '>
                  <div className='bg-[#E5E5E5] pl-4 pr-4 pt-8 pb-8 flex justify-center items-center flex-col rounded-lg'>
                    <img src="./game-icons_double-necklace.png"/>
                    <h6>Lorem</h6>
                  </div>
                  <div className=' bg-[#E5E5E5] pl-4 pr-4 pt-8 pb-8 flex justify-center items-center flex-col rounded-lg'>
                    <img src="./token_japan-open-chain.png"/>
                    <h6>Lorem</h6>
                  </div>
                  <div className='bg-[#E5E5E5] pl-4 pr-4 pt-8 pb-8 flex justify-center items-center flex-col rounded-lg'>
                    <img src="./mdi_ring.png"/>
                    <h6>Lorem</h6>
                  </div>
                  <div className='bg-[#E5E5E5]  pl-4 pr-4 pt-8 pb-8 flex justify-center items-center flex-col rounded-lg'>
                    <img src="./game-icons_gem-chain.png"/>
                    <h6>Lorem</h6>
                  </div>
                  <div className='bg-[#E5E5E5] pl-4 pr-4 pt-8 pb-8 flex justify-center items-center flex-col rounded-lg'>
                    <img src="./Vector (7).png"/>
                    <h6>Lorem</h6>
                  </div>
                  <div className='bg-[#E5E5E5] pl-4 pr-4 pt-8 pb-8 flex justify-center items-center flex-col rounded-lg'>
                    <img src="./game-icons_double-necklace.png"/>
                    <h6>Lorem</h6>
                  </div>
      </div>
    </div>
  )
}

export default Category
