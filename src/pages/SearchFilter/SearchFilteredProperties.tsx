import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { FaNairaSign } from "react-icons/fa6";
import { MdArrowDropUp } from "react-icons/md";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { FaHouseCircleCheck } from "react-icons/fa6";
import Pagination from './Pagination';

interface State {
  isNairaOpen: boolean;
  isLeaseOpen: boolean;
  isDuplexOpen : boolean;
}

interface Action {
  clickDropdown : (param : string) => void
}

const SearchFilteredProperties = () => {
  const [state , setState]  = useState<State>({
    isLeaseOpen : false,
    isNairaOpen : false,
    isDuplexOpen : false,
  })

  const clickDropdown = (param : string) => {
    if(param === "naira"){
      setState((prev) => ({
        ...prev,
        isNairaOpen : !prev.isNairaOpen,
        isDuplexOpen : prev.isDuplexOpen,
        isLeaseOpen : prev.isLeaseOpen
      }))
    } else if(param === "lease"){
      setState((prev) => ({
        ...prev,
        isLeaseOpen : !prev.isLeaseOpen,
        isNairaOpen : prev.isNairaOpen,
        isDuplexOpen : prev.isDuplexOpen
      })) 
    } else if(param === 'duplex'){
      setState((prev) => ({
        ...prev,
        isDuplexOpen : !prev.isDuplexOpen,
        isLeaseOpen : prev.isLeaseOpen,
        isNairaOpen : prev.isNairaOpen
      }))
    }
  }

  const action : Action = {
    clickDropdown
  }

  return (
    <FilterStyled>
      <div className="filter-actions w-full bg-[#EAF1F9]">
        <div className=''>
          <button onClick={() => action.clickDropdown('naira')} className='flex justify-between p-2 items-center w-full rounded-[12px] tracking-wider'>
            <span className='flex items-center gap-1 text-[#B1B5B9]'><FaNairaSign/> Naira</span>
            {state.isNairaOpen ? (
              <MdArrowDropUp className='text-[#B1B5B9] text-[1.5rem]'/> 
            ): (
              <MdOutlineArrowDropDown className='text-[#B1B5B9] text-[1.5rem]'/>
            )
            }
          </button>
        </div>
        <div className=''>
          <input className='w-full p-2 rounded-[12px] outline-none'
          type="text" name="" placeholder='e.g Lagos' id="" />
        </div>
        <div className=''>
          <button onClick={() => action.clickDropdown("lease")} className='w-full p-2 rounded-[12px] flex justify-between tracking-wider'>
            <span className='flex items-center gap-1 text-[#B1B5B9]'><FaHouseCircleCheck/> Lease</span>
              {state.isLeaseOpen ? (
                <MdArrowDropUp className='text-[#B1B5B9] text-[1.5rem]'/> 
              ): (
                <MdOutlineArrowDropDown className='text-[#B1B5B9] text-[1.5rem]'/>
              )
              }
          </button>
        </div>
        <div className=''>
          <button onClick={() => action.clickDropdown("duplex")} className='w-full p-2 rounded-[12px] flex justify-between tracking-wider'>
            <span className='flex items-center gap-1 text-[#B1B5B9]'><FaHouseCircleCheck/> Duplex</span>
              {state.isDuplexOpen ? (
                <MdArrowDropUp className='text-[#B1B5B9] text-[1.5rem]'/> 
              ): (
                <MdOutlineArrowDropDown className='text-[#B1B5B9] text-[1.5rem]'/>
              )
              }
          </button>
        </div>
        <div className='filter'>
          <button className='w-full relative p-2 rounded-[10px] font-bold hover:border text-[#545098] transition-all hover:border-[#545098]'>MORE FILTERS</button>
        </div>
      </div>
      <div className="card-section w-full">
        <Pagination/>
      </div>
    </FilterStyled>
  )
}

const FilterStyled = styled.section`
  position : relative
  height : 100%;
  width: 100%;
  margin-top : 5rem;
  display : flex;
  flex-direction : column;

  .filter-actions{
    display : grid;
    grid-template-columns : 15% 25% 15% 15% 15%;
    padding : 2rem;
    gap: 1.5rem;
    position : fixed;
    z-index : 100;

    >div {
      position : relative;
      width : 100%;
      height : 100%;
      border-radius : 12px;
      display : flex;
      flex-direction : column;
      items-center;
      cursor : pointer;
      background : white;
    }

    .filter {
      background : transparent;
      cursor : pointer;
      
    }
  }

  .card-section {
    padding : 2rem 8%;
    margin-top : 6rem;
  }
`

export default SearchFilteredProperties