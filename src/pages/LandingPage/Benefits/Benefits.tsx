import React from 'react'
import styled from 'styled-components'
import { FaRegCircleCheck } from "react-icons/fa6";
import { benefitText, searchText } from '../../../Lib/BenefitsData';
import { TiTick } from "react-icons/ti";
import benefit2 from '../../../assets/img/testAssets/benefit2.avif'
import benefit3 from '../../../assets/img/testAssets/benefit3.avif'
import benefit1 from '../../../assets/img/testAssets/benefit1.avif'

const Benefits = () => {
  return (
    <BenefitStyle>
      <BenefitOne/>
      <Searching/>
    </BenefitStyle>
  )
}

const BenefitOne = () => {
  return(
    <div className='w-full top flex items-center gap-[3rem] mb-[3rem]'>
      <div className="left flex flex-col  w-[50%]">
        <small className='text-[#547CC9] font-500 text-[1rem] mb-2'>Benefits</small>
        <h1 className='text-[3rem] font-[500] mb-2'>Benefits for Property Owners/</h1>
        <h4 className='text-[#41451B] font-[300] text-[1.2rem]'>With E-manager , property owners and agents can:</h4>
        <div className='list mt-6 flex flex-col'>
          {benefitText.map((text) => (
            <div className="text text-[#41451B] font-[300] flex gap-3 items-center mb-2" key={text}>
              <span className='px-1 bg-[#547CC9] text-white py-1 rounded-[50%]'><TiTick/></span>
              <span className='text-[1rem]'>{text}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="right w-[50%] h-[100%] flex px-3 py-3">
        <img className='img1 relative h-[50%] w-[45%] mt-[10%] rounded-[9px]' src={benefit1} alt="" />
        <div className="img-box items-end flex flex-col gap-3 w-[60%] h-[100%]">
          <img className='h-[30%] mr-[5rem] w-[50%] rounded-[9px]' src={benefit3} alt="" />
          <img className='img2 h-[65%] w-[100%] rounded-[9px] mr-[3rem]' src={benefit2} alt="" />
        </div>
      </div>
    </div>
  )
}

const Searching = () => {
  return(
    <div className="search flex items-center justify-between gap-[3rem]">
      <div className="left flex w-[50%] h-[100%]">
        <div className="img-box items-start flex flex-col gap-3 w-[60%] h-[100%]">
          <img className='h-[30%] ml-[4rem] w-[50%] rounded-[9px]' src={benefit3} alt="" />
          <img className='img2 h-[65%] mr-[-2rem] w-[100%] rounded-[9px]' src={benefit2} alt="" />
        </div>
        <img className='img1 relative h-[50%] z-100 w-[45%] mt-[10%] rounded-[9px]' src={benefit1} alt="" />
      </div>
      <div className="right w-[50%]">
        <small className='text-[#547CC9] font-500 text-[1rem]'>Benefits</small> 
        <h1 className='text-[3rem] font-[500]'>Searching For A Property?</h1>
        <h4 className='text-[#41451B] font-[300] text-[1.2rem]'>E-manager offers numerous benefits for you:</h4>
        <div className='list mt-6 flex flex-col'>
          {searchText.map((text) => (
            <div className="text text-[#41451B] font-[300] flex gap-3 items-center mb-3" key={text}>
              <span className='px-1 bg-[#547CC9] text-white py-1 rounded-[50%]'><TiTick/></span>
              <span className='text-[1rem]'>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const BenefitStyle = styled.section`
  height : 145vh;
  width : 100%;
  background : transparent;
  padding : 6rem 10%;
  display : flex;
  flex-direction : column;
  gap : 3rem;

  .top{
    .left h1{
      line-height : 2.7rem;
    }
  
    .right {
      img1 {
        position: relative; /* Add positioning */
        z-index: 1; /* Set z-index to lower value */
      }
      
      .img2 {
        z-index: 100; /* Set z-index to higher value */
      }
    }
  }
`

export default Benefits