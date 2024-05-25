import React, { useState } from 'react'
import styled from 'styled-components'
import logo from '../assets/dashlogo.png'
import { Link, useLocation } from 'react-router-dom'
import { MdDashboard, MdOutlineGroups } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { PiWalletFill } from "react-icons/pi";
import { MdOutlineHomeWork } from "react-icons/md";
import classNames from 'classnames'
import { FiSettings } from "react-icons/fi";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { useStateProvider } from '../context/StateProvider';

import { RiUploadCloud2Line } from "react-icons/ri";
import { FaRegFileVideo } from "react-icons/fa6";
const BottomLinks = [
  {
    key : 1,
    label : "Settings",
    path : "settings",
    icon : <FiSettings/>
  },
  {
    key : 2,
    label : "Help",
    path : "help",
    icon : <IoMdHelpCircleOutline/>
  },
]

const DashboardSideLinks = [
  {
    key : 1,
    label : "Dashboard",
    path : "/dashlayout",
    icon : <MdDashboard/>
  },
  {
    key : 2,
    label : "My Listings",
    path : "listings",
    icon : <MdOutlineHomeWork/>
  },
  {
    key : 3,
    label : "Subscription",
    path : "subscription",
    icon : <MdOutlineGroups/>
  },
  {
    key : 4,
    label : "Property Requests",
    path : "property-requests",
    icon : <PiWalletFill />
  },
  {
    key : 5,
    label : "Profile",
    path : "profile",
    icon : <IoPersonOutline />
  }
]
const linkclass = 'flex items-center px-3 py-2 gap-3 mb-3 font-light text-base text-[0.8rem] hover:bg-[#294B8C] hover:text-[#fff] pointer rounded-[8px] hover:no-underline active:text-[#fff]'

const Sidebar = () => {
  const {NavigateLink , activeLink} = useStateProvider()

  return (
    <SideBarStyles>
      <div className="top">
        <img src={logo} alt="logo" />
        <span className='text-lg'>E-manager</span>
      </div>
      <div className="dashlinks flex-1 mt-5">
        {DashboardSideLinks.map((item) => (
          <SidebarLink 
            key={item.key}
            item={item}
            isActive={activeLink === item.path}
            onClick={() => NavigateLink(item.path)}
          />
        ))}
      </div>
      <div className="dashbottom flex-1 mt-auto">
        {BottomLinks.map((item) => (
          <SidebarLink
            key={item.key}
            item={item}
            isActive={activeLink === item.path}
            onClick={() => NavigateLink(item.path)}
          />
        ))}
      </div>
      <div className="bottom relative mb-7 flex items-center text-sm">
        <div style={{fontWeight : '200', fontFamily : 'sans-serif'}}>Powered by <span className='text-neutral-100'>TAGDEV</span> </div>
      </div>
    </SideBarStyles>
  )
}

const SidebarLink = ({item, isActive, onClick}) => {
  return (
    <Link 
      onClick={onClick}
      to={item.path} 
      className={classNames(isActive ? 'text-white bg-[#294B8C]' : '',linkclass)}>
        <span style={{fontSize : "1.5rem"}}>{item.icon}</span>
        {item.label}
    </Link>
  )
}

const SideBarStyles = styled.aside`
  position : relative;
  width : 15rem;
  background: #132B58;
  display : flex;
  flex-direction : column;
  justify-content : space-between;
  padding : 1rem 1rem;
  color: #C0C2C6;
  font-family : 'Inter', sans-serif;
  overflow : hidden;

  .top {
    top : 16px;
    left : 16px;
    align-items : center;
    display : flex;
    gap : 12px;
    background-color : white;
    padding : 0.5rem 1rem 0.5rem 0.5rem;
    border-radius : 8px;

    span {
      color: #294B8C;
      text-transform : uppercase;
      font-size : 12px;
      letter-spacing : 2px;
    }

    img {
      display : flex;
      height : 90%;
    }
  }
`
export default Sidebar