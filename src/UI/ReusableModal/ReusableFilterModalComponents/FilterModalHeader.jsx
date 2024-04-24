import React from 'react'
import { FaTimes } from "react-icons/fa"

const FilterModalHeader = ({title, closeModal}) => {
  return (
    <div className='w-full flex justify-between items-center mb-[2rem]'>
      <h2 className='text-[2rem] font-[500]'>{title}</h2>
      <FaTimes
        className='text-[1rem] text-[#667080] cursor-pointer'
        onClick={closeModal}
      />
    </div>
  )
}

export default FilterModalHeader