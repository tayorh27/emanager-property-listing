import React, { useState } from 'react'
import FilterModalHeader from '../../../UI/ReusableModal/ReusableFilterModalComponents/FilterModalHeader'
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";

const BedRoomStep = ({closeModal, next}) => {
  const [state , setState] = useState({
    bedNum : 0,
    bathNum : 0,
    toiletNum : 0
  })

  const clickPlus = (param) => {
    if(param === "bed"){
      setState((state) => ({
        ...state,
        bedNum : state.bedNum + 1
      }))
    } else if(param === "bath"){
      setState((state) => ({
        ...state,
        bathNum : state.bathNum + 1
      }))
    } else if(param === "toilet"){
      setState((state) => ({
        ...state,
        toiletNum : state.toiletNum + 1
      }))
    }
  }

  const clickMinus = (param) => {
    if(param === "bed"){
      setState((state) => ({
        ...state,
        bedNum : state.bedNum - 1
      }))
    } else if(param === "bath"){
      setState((state) => ({
        ...state,
        bathNum : state.bathNum - 1
      }))
    } else if(param === "toilet"){
      setState((state) => ({
        ...state,
        toiletNum : state.toiletNum - 1
      }))
    }
  }

  const {bedNum, bathNum , toiletNum} = state

  return (
    <div className='relative property-con min-w-[45vw] flex flex-col'>
      <FilterModalHeader closeModal={closeModal} title="More Filters"/>
      <div className="flex flex-col gap-[1rem] w-full">
        <span className='text-[1.2rem] font-[500]'>Beds and Rooms</span>
        <div className="actions flex flex-col gap-[1rem] w-full mb-[2rem]">
          <span className='flex items-center justify-between'>
            <span className='text-[#41454B] font-light text-[1rem]'>Bedrooms</span>
            <div className="btns text-[1.3rem] flex items-center gap-[1rem]">
              <CiCirclePlus 
              onClick={() => clickPlus("bed")}
              className='text-[#9FA4A9] cursor-pointer'/>
              <span>{bedNum}</span>
              <CiCircleMinus
              onClick={() => clickMinus("bed")}
              className='text-[#9FA4A9] cursor-pointer'/>
            </div>
          </span>
          <span className='flex items-center justify-between'>
            <span className='text-[#41454B] font-light text-[1rem]'>Bathrooms</span>
            <div className="btns text-[1.3rem] flex items-center gap-[1rem]">
              <CiCirclePlus
              onClick={() => clickPlus("bath")}
              className='text-[#9FA4A9] cursor-pointer'/>
              <span>{bathNum}</span>
              <CiCircleMinus  className='text-[#9FA4A9] cursor-pointer'/>
            </div>
          </span>
          <span className='flex items-center justify-between'>
            <span className='text-[#41454B] font-light text-[1rem]'>Toilets</span>
            <div className="btns text-[1.3rem] flex items-center gap-[1rem]">
              <CiCirclePlus 
              onClick={() => clickPlus("toilet")}
              className='text-[#9FA4A9] cursor-pointer'/>
              <span>{toiletNum}</span>
              <CiCircleMinus className='text-[#9FA4A9] cursor-pointer'/>
            </div>
          </span>
        </div>
        <div className="furniture">
          
        </div>  
      </div>
    </div>
  )
}

export default BedRoomStep