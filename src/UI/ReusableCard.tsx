import React, { useState } from 'react'
import styled from 'styled-components'
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { FaShower } from "react-icons/fa6";
import { TbBed } from "react-icons/tb";
import { GiHomeGarage } from "react-icons/gi";
import { IoLocationSharp } from "react-icons/io5";
import img from '../assets/img/testAssets/featured.png'
import { useNavigate } from 'react-router-dom';

const ReusableCard = ({card}) => {
  const [hoverState, setHoverState] = useState(false)

  const handleHover = () => {
    setHoverState(true)
  }

  const handleMouseLeave = () => {
    setHoverState(false);
  };
  const navigate = useNavigate()
  const propertyId = card.id
  const handleClick = () => {
    navigate(`/products/${propertyId}`)
  }

  return (
    <CardStyle onMouseOver={handleHover} onMouseLeave={handleMouseLeave} onClick={handleClick}>
      <p>{propertyId}</p>
      <div className="up flex">
        <img src={img} alt="" />
      </div>
      {hoverState && 
      <div className='down'>
       <div className='mb-4'>
        <span className='text-[#132B58] font-500 text-[1.2rem]'>
        # {card.secondFeature && card.secondFeature.length > 0 ? card.secondFeature[0].property : 'N/A'}
        </span>
        <h2 className='text-[0.8rem]'>
          Posted by 
          {card.secondFeature && card.secondFeature.length > 0 ? card.secondFeature[0].nameOfAgent : 'N/A'}
          </h2>
       </div>
       <div className='flex items-start justify-between text-[#898D93] text-[0.8rem]'>
        <div className='flex items-center gap-3'>
          <IoLocationSharp className='text-[1.2rem]'/>
          <div className='flex flex-col gap-1'>
            <span>{card.secondFeature && card.secondFeature.length > 0 ? card.secondFeature[0].address : "?"},</span>
            <span>{card.secondFeature && card.secondFeature.length > 0 ? card.secondFeature[0].addressJunction : "?"}</span>
          </div>
        </div>
          <span>{card.secondFeature && card.secondFeature.length > 0 ? card.secondFeature[0].numGarage : '?'} garage</span>
       </div>
       <div className='flex mt-4 items-center justify-between text-[0.8rem] text-[#898D93]'>
        <div className='flex items-center gap-2'>
          <small><FaShower className='text-[1.2rem]'/></small>
          <span>{card.secondFeature && card.secondFeature.length > 0 ? card.secondFeature[0].numBath : "?"} Bathrooms</span>
        </div>
        <div className='flex gap-2 items-center'>
          <small><TbBed className='text-[1.2rem]'/></small>
          <span>{card.secondFeature && card.secondFeature.length > 0 ? card.secondFeature[0].numBed : '?'} Bedroom</span>
        </div>
       </div>
      </div> }
      {
        !hoverState && 
        <div className="down">
          <div className="one flex text-[#6C7076] items-center justify-between">
            <span>{card.apartmentType}</span>
            <MdOutlineFavoriteBorder className='cursor-pointer'/>
          </div>
          <span className='text-[#132B58] font-500 text-[1.2rem]'># {card.price}</span>
          <div className="two flex items-center gap-4 mt-5 flex-wrap">
            <span className='flex items-center gap-2'>
              <small><FaShower/></small>
              <small className='flex gap-1 items-center text-[1rem]'>{card.numBath} <span className='text-[#898D93] text-[0.7rem]'>bath</span></small>
            </span>
            <span className='flex items-center gap-2'>
              <small><TbBed/></small>
              <small className='flex gap-1 items-center text-[1rem]'>{card.numBed} <span className='text-[#898D93] text-[0.7rem]'>beds</span></small>
            </span>
            <span className='flex items-center gap-2'>
              <small><GiHomeGarage/></small>
              <small className='flex gap-1 items-center text-[1rem]'>{card.numGarage} <span className='text-[#898D93] text-[0.7rem]'>garage</span></small>
            </span>
          </div>
          <span className='flex items-center text-[#6C7076] gap-2 mt-1'><IoLocationSharp/> {card.location}</span>
          <div className="low h-[1rem] flex gap-3 items-center text-[#D3D4D7] font-500 mt-2">
            <img src={img} alt="" className='img-thumbnail'/>
            <small>Posted by {card.nameOfAgent}</small>
          </div>
        </div>
      }
    </CardStyle>
  )
}

const CardStyle = styled.div`
  width : 100%;
  height : 100%;
  display : block;
  border: 1px solid #E7EAEA;
  border-radius : 1rem;
  cursor : pointer;
  transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  }

  .up {
    img {
      border-top-right-radius : 1rem;
      border-top-left-radius : 1rem;
      width : 100%;
    }
  }

  .down {
    padding : 1rem;
    display : block;
  }

  .img-thumbnail {
    max-width: 1rem; /* Adjust as needed */
    height: 1rem;
    object-fit: cover; /* Ensure image maintains aspect ratio */
    border-radius: 100%;
  }
`

export default ReusableCard