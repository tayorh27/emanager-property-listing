import React from 'react'
import { CiMail } from "react-icons/ci"
import { MdNotificationsNone } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { BiSolidUserCircle } from "react-icons/bi";
import styled from 'styled-components'
import { RiArrowDropDownLine } from "react-icons/ri";

const Header = () => {
  return (
    <HeaderStyle className='flex-1 text-[2rem]'>
      <CiMail className='icon1 rounded-md'/>
      <MdNotificationsNone className='icon1 rounded-md'/>
      <IoSearchOutline className='icon1 rounded-md'/>
      <div className="user flex gap-[0.5rem] items-center mr-2">
       <BiSolidUserCircle className='text-[#1F1D1B] cursor-pointer'/>
       <div className="username text-base text-[16px] flex flex-col items-start">
        James Adekunle
        <small className='text-[12px]'>Agent</small>
       </div>
       <RiArrowDropDownLine/>
      </div>
    </HeaderStyle>
  )
}

const HeaderStyle = styled.header`
  position : relative;
  display : flex;
  height : 3.5rem;
  width : calc(100vw - 15rem);
  padding : 1rem;
  padding-bottom : 2rem;
  padding-top : 2rem;
  align-items : center;
  justify-content : end;
  border-bottom : 0.5px solid #D9DCDE;
  z-index : 5;
  gap : 2rem;
  overflow-y : hidden;

  .icon1{
    padding : 3px;
    font-size : 1.8rem;
    cursor : pointer;
    margin-right : 2;
    border : 0.5px solid #D9DCDE;
    color : #AAAAAB;
    transition : all 0.5s ease-in-out;

    &:hover {
      border : none;
      color : #1F1D1B;
    }
  }
`

export default Header