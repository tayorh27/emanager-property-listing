import React from 'react'
import ReviewSelection from './ReviewSelection'
import FilterModalHeader from '../../../UI/ReusableModal/ReusableFilterModalComponents/FilterModalHeader'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ServiceApartmentStep = ({setReviewSelection, reviewSelection, closeModal, showProperties}) => {
  const data = ["Laundry", "Electricity", "Cooking", "Cleaning Services"]
  return (
    <div className='w-auto h-auto'>
      {
        reviewSelection ? (
          <ReviewSelection/>
        ) : (
          <div className='flex flex-col min-w-[45vw] gap-1'>
            <FilterModalHeader title="More Filters" closeModal={closeModal} reviewSelection={reviewSelection}/>
            <div className="main mt-[1rem] gap-5 flex flex-col w-[100%]">
              <h3 className='text-[1.1rem] font-[500]'>Serviced Apartment</h3>
              <div className="flex items-center w-[100%] justify-between gap-4">
                <p className='w-[85%] text-[#41454B] font-[300]'>Properties providing hotel-like services like professional housekeeping, laundry etc</p>
              </div>
            </div>
            <div className="mt-[1.5rem] service flex flex-col gap-3 w-[80%] ml-3">
              <h3 className='text-[1rem]'>Services</h3>
              <GridStyle>
                {data.map((service) => (
                  <div key={service} className='flex items-center text-[#41454B] gap-2'>
                    <input className='cursor-pointer' type="checkbox" name="" id="" />
                    <label htmlFor="">{service}</label>
                  </div>
                ))}
              </GridStyle>
            </div>
            {
              reviewSelection === false ? 
              <div className="actions flex items-center justify-between w-full mt-4">
                <button className="px-4 py-1 border rounded-md text-[#547CC9] border-[#D2D4D4]" onClick={() =>
                  setReviewSelection(true)
                }>review selection</button>
                <button 
                  className="px-6 py-1  rounded-md text-[#fff] bg-[#547CC9]"
                  onClick={showProperties}
                >
                  show properties
                </button>
              </div> : 
              <div className="actions flex items-center justify-between w-full mt-4">
                <button className="px-4 py-1 border rounded-md text-[#547CC9] border-[#D2D4D4]">clear</button>
                <button 
                  className="px-6 py-1  rounded-md text-[#fff] bg-[#547CC9]"
                  onClick={showProperties}
                >
                  show properties
                </button>
              </div>
            }
          </div>
        )
      }
    </div>
  )
}

const GridStyle = styled.div`
  width : 100%;
  display : grid;
  grid-template-columns : repeat(2, minmax(50%, 1fr));
  grid-template-rows : repeat(2, 1fr);
  gap : 1.2rem;
  margin-top : 1.3rem;
  margin-bottom : 1.3rem;
`

export default ServiceApartmentStep