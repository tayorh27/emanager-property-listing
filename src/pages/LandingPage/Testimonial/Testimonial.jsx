import React, { useState } from 'react'
import SectionHeader from '../../../components/SectionHeader'
import styled from 'styled-components'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { TestimonialData } from './data'

const Testimonial = () => {
  const [index, setIndex] = useState(0)
  const {text , userType, avatar, estate , name } = TestimonialData[index]

  const prevTestimonialClick = () => {
    setIndex(prev => prev - 1)
    if(index <= 0){
      setIndex(TestimonialData.length - 1)
    }
  }

  const nextTestimonialClick = () => {
    setIndex(prev => prev + 1)
    if(index >= TestimonialData.length - 1) {
      setIndex(0)
    }
  }

  return (
    <TestimonialStyle>
      <SectionHeader title='Testimonials' subtitle='See what our users say about E-Manager:'/>
      <div className="test-main items-center flex gap-[3rem]">
        <div className="image h-[9rem] w-[22rem] flex">
          <img className='test-avatar' src={avatar} alt={name}/>
        </div>
        <div className="right flex flex-col gap-[1rem]">
          <p className='text-[#6E7679] text-[1rem] text-justify'>{`"${text}"`}</p>
          <span className='text-[#132B58] font-[500]'>{name}, {userType}, {estate}</span>
        </div>
        <button className="prev" onClick={() => prevTestimonialClick()}>
          <IoIosArrowBack/>
        </button>
        <button className="next" onClick={() => nextTestimonialClick()}>
          <IoIosArrowForward/>
        </button>
      </div>
    </TestimonialStyle>
  )
}

const TestimonialStyle = styled.section`
  display : flex;
  flex-direction : column;
  gap : 2rem;
  height : 100%;
  width : 100%;
  padding : 4rem 10%;
  background : #F3F5FA;
  align-items : center;
  position : relative;

  .test-main{
    width : 85%;
    padding : 2rem;

    img{
      width: 100%;
      height: 100%;
      position: relative;
      box-shadow: 0 1.5rem 2rem rgba(26, 26, 54, 0.4);
      border-radius : 50%;
      object-position : cover;
    }

    .prev, .next {
      position: absolute;
      top : 55%;
      transform : translateY(-50%);
      color : #d0e5fd;
      width : 2rem; height : 2rem;
      font-size : 3rem;
      display : grid;
      place-items : center;
      cursor : pointer;
      transition: all 0.3s linear;
    }
    
    .prev:hover , .next:hover{
      color : hsl(21, 62%, 45%);
    }

    .prev {
      left : 10%;
    }

    .next {
      right : 10%;
    }
  }
`

export default Testimonial