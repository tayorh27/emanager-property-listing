import React from 'react'
import FilterModalHeader from '../../../UI/ReusableModal/ReusableFilterModalComponents/FilterModalHeader'
import priceimg from '../../../assets/img/testAssets/price.jpg'
import styled from 'styled-components'

const PriceStep = ({closeModal, prev, next, reviewSelection}) => {
  const plandata = ["Monthly", "Quarterly", "Bi-anually", "Yearly"]
  return (
    <div className='relative property-con min-w-[45vw] flex flex-col'>
      <FilterModalHeader title="More Filters" closeModal={closeModal} reviewSelection={reviewSelection}/>
      <div className="top p-3 w-full">
        <h4 className='text-[1rem] mb-1 font[500]'>Price</h4>
        <img src={priceimg} alt="" />
        <div className="mt-[1.2rem] inputs flex items-center gap-2 justify-between">
          <div className='input-control border text-[#C0C2C6] border-[#CBD6EB] p-2 px-4 flex flex-col rounded-[10px] text-[0.8rem] py-1 w-[45%]'>
            <label htmlFor="">Min.Price</label>
            <input className='outline-none font-[500]' type="text" placeholder='#100,000' />
          </div>
          <div className='w-[10%]'></div>
          <div className='input-control flex flex-col border-[#CBD6EB] text-[0.8rem] text-[#C0C2C6] rounded-[10px] border p-2 px-4 py-1 w-[45%]'>
            <label htmlFor="">Max.Price</label>
            <input className='outline-none font-[500]' type="text" placeholder='#100,000' />
          </div>
        </div>
      </div>
      <div className="mid mt-[2.5rem] flex flex-col gap-3">
        <h3 className='text-[1.1rem] font[500]'>Payment Plan</h3>
        <GridStyle>
          {plandata.map((plan) => (
            <div className='flex text-[#41454B] items-center gap-3'>
              <input type="checkbox" name="" id="" />
              <label htmlFor="">{plan}</label>
            </div>
          ))}
        </GridStyle>
      </div>
      <span className='text-[#547CC9] text-[0.8rem] cursor-pointer'> Show more property payment plans</span>
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
  gap : 1.2rem;
  margin-top : 1.3rem;
  margin-bottom : 1.3rem;
`

export default PriceStep