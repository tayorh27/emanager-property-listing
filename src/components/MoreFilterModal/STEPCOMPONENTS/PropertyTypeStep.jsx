import React from 'react'
import FilterModalHeader from '../../../UI/ReusableModal/ReusableFilterModalComponents/FilterModalHeader'
import styled from 'styled-components'

const Data = [
  {
    id : 1,
    type : "Flat"
  },
  {
    id :2,
    type : "Pent house"
  },
  {
    id : 3,
    type : "Fully Detached Duplex"
  },
  {
    id : 4,
    type : "Semi Detached Duplex"
  },
  {
    id : 5,
    type : "Terrace Duplex"
  },
  {
    id : 6,
    type : "Terrace Bungalow"
  },
  {
    id : 7,
    type : "Fully Detached Bungalow"
  },
  {
    id : 8,
    type : "Semi Detached Bungalow"
  }
]

const PropertyTypeStep = ({closeModal, next,prev, reviewSelection}) => {
  return (
    <div className='relative property-con min-w-[45vw] flex flex-col'>
      <FilterModalHeader title="More Filters" closeModal={closeModal} reviewSelection={reviewSelection}/>
      <div className="types flex flex-col w-full">
        <span className='font-[500] text-[1.2rem] mb-[1.5rem]'>Property Type</span>
        <GridStyle>
          {Data.map((item) => (
            <div className='input-control flex items-center gap-[2rem] text-[#6E7379] cursor-pointer' key={item.id}>
              <input className='cursor-pointer' type="checkbox" name="" id="" />
              <label htmlFor="">{item.type}</label>
            </div>
          ))}
        </GridStyle>
        <span className='text-[#547CC9] text-[0.8rem] cursor-pointer'> Show less property types</span>
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
  grid-template-rows : repeat(4, 1fr);
  gap : 2rem;
  margin-bottom : 1.3rem;
`

export default PropertyTypeStep