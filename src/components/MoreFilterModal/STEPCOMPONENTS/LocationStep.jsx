import React, { useState } from 'react';
import FilterModalHeader from '../../../UI/ReusableModal/ReusableFilterModalComponents/FilterModalHeader';
import { MdArrowDropUp } from "react-icons/md";
import { MdOutlineArrowDropDown } from "react-icons/md";

const LocationStep = ({closeModal, next, reviewSelection}) => {
  const [state, setState] = useState({
    isLocation : false,
    isLandmark : false,
    isCategory : false
  })

  const clickDropdown = (param) => {
    if(param === 'location'){
      setState((state) => ({
        ...state,
        isLocation : !state.isLocation,
        isLandmark : state.isLandmark,
        isCategory : state.isCategory
      }))
    } else if (param === 'landmark'){
      setState((state) => ({
        ...state,
        isLandmark : !state.isLandmark,
        isLocation : state.isLandmark,
        isCategory : state.isCategory
      }))
    } else if(param === 'category'){
      setState((state) => ({
        ...state,
        isLandmark : state.isLandmark,
        isLocation : state.isLocation,
        isCategory : !state.isCategory
      }))
    }
  }

  return (
    <div className='location-con min-w-[45vw] flex flex-col '>
      <FilterModalHeader title="More Filters" closeModal={closeModal} reviewSelection={reviewSelection}/>
      <div className="form flex w-full flex-col gap-[1.2rem]">
        <div className="input w-full flex flex-col gap-2">
          <label htmlFor="location" className='font-[500] text-[1.2rem]'>Location</label>
          <div className="box p-1 flex justify-between px-3 gap-3 items-center border border-[#D2D4D4] rounded-[12px]">
            <input className='p-1 w-[90%] outline-none' type="text" name="location" id="" placeholder='Enter a state, locality or area.' />
            <span className='cursor-pointer text-[1.5rem]' onClick={() => clickDropdown('location')}>
              {state.isLocation ? (
                  <MdArrowDropUp/>
                ) : (
                  <MdOutlineArrowDropDown/>
                )
              }
            </span>
          </div>
        </div>
        <div className="input w-full flex flex-col gap-2">
          <label htmlFor="location" className='font-[500] text-[1.2rem]'>Popular Nearby Landmarks</label>
          <div className="box p-1 flex justify-between px-3 gap-3 items-center border border-[#D2D4D4] rounded-[12px]">
            <input className='p-1 w-[90%] outline-none' type="text" name="location" id="" placeholder='Lekki Conservation Centre' />
            <span className='cursor-pointer text-[1.5rem]' onClick={() => clickDropdown('landmark')}>
              {state.isLandmark ? (
                  <MdArrowDropUp/>
                ) : (
                  <MdOutlineArrowDropDown/>
                )
              }
            </span>
          </div>
        </div>
        <div className="input w-full flex flex-col gap-2">
          <label htmlFor="location" className='font-[500] text-[1.2rem]'>Category</label>
          <div className="box p-1 flex justify-between px-3 gap-3 items-center border border-[#D2D4D4] rounded-[12px]">
            <input className='p-1 w-[90%] outline-none' type="text" name="location" id="" placeholder='For Rent' />
            <span className='cursor-pointer text-[1.5rem]' onClick={() => clickDropdown('category')}>
              {state.isCategory ? (
                  <MdArrowDropUp/>
                ) : (
                  <MdOutlineArrowDropDown/>
                )
              }
            </span>
          </div>
        </div>
      </div>
      {
        reviewSelection === false ? 
        <div className="actions flex items-center justify-between w-full mt-4">
          <button className="px-4 py-1 border rounded-md text-[#547CC9] border-[#D2D4D4]" >clear</button>
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

export default LocationStep