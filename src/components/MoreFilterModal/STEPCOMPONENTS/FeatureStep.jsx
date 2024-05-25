import React from 'react'
import FilterModalHeader from '../../../UI/ReusableModal/ReusableFilterModalComponents/FilterModalHeader'
import styled from 'styled-components'

const FeatureStep = ({closeModal, next , prev, reviewSelection}) => {
  const featuredata = ["Gated Estate", "Gym", "Good drainage", "Beach Front"]
  const essentials = ["Dedicated Workspace", "24/7 Security", "Air Conditioner", "Dryer"]

  return (
    <div className='relative feature min-w-[40vw] flex flex-col'>
      <FilterModalHeader title="More Filters" closeModal={closeModal} reviewSelection={reviewSelection}/>
      <div className="section1 mt-4 mb-[2.3rem] flex flex-col gap-2">
        <h5>Features</h5>
        <GridStyle>
          {featuredata.map((feature) => (
            <div className='input-control flex items-center gap-[2rem] text-[#6E7379] cursor-pointer' key={feature}>
              <input className='cursor-pointer' type="checkbox" name="" id="" />
              <label htmlFor="">{feature}</label>
            </div>
          ))}
        </GridStyle>
        <span className='text-[#547CC9] text-[0.8rem] cursor-pointer'> Show more amenities</span>
      </div>
      <div className="section2 mt-2 flex flex-col gap-2">
        <h5>Essentials</h5>
        <GridStyle>
          {essentials.map((item) => (
            <div className='input-control flex items-center gap-[2rem] text-[#6E7379] cursor-pointer' key={item}>
              <input className='cursor-pointer' type="checkbox" name="" id="" />
              <label htmlFor="">{item}</label>
            </div>
          ))}
        </GridStyle>
        <span className='text-[#547CC9] text-[0.8rem] cursor-pointer'> Show more amenities</span>
      </div>
      {
        reviewSelection === false ? 
        <div className="actions flex items-center justify-between w-full mt-4">
          <button className="px-4 py-1 border rounded-md text-[#547CC9] border-[#D2D4D4]" onClick={prev}>previous</button>
          <button 
            className="px-6 py-1  rounded-md text-[#fff] bg-[#547CC9]"
            onClick={next}
          >
            next
          </button>
        </div> : <div></div>
      }
    </div>
  )
}

const GridStyle = styled.div`
  width : 100%;
  display : grid;
  grid-template-columns : repeat(2, minmax(50%, 1fr));
  grid-template-rows : repeat(2, 1fr);
  gap : 1rem;
  margin-bottom : 1rem;
`

export default FeatureStep