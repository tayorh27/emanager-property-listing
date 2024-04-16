/** @jsxImportSource @emotion/react */
import React from 'react'
import { SubscriptionData } from '../Lib/data'
import { FaRegCircleCheck } from "react-icons/fa6";

const Subscription = () => {
  return (
    <div className='relative h-[100vh]  w-[calc(100vw - 15rem)] mx-6 mt-[1.5rem] flex flex-col px-10 py-2 gap-[1.5rem]'>
      <h2 className='flex justify-center text-[1.2rem] font-[500] text-[#294B8C]'>Subscription Plans</h2>
      <div style={{
        
      }} 
      className="plans flex h-[100%] gap-[3rem] [&>*:nth-child(1)]:border-[#547CC9] [&>*:nth-child(1)]:border [&>*:nth-child(1)]:rounded-[8px] [&>*:nth-child(1)_h1]:text-[#19CD09]">
        {SubscriptionData.map((plan) => (
          <div className='h-[80%]'>
            <Plan plan={plan}/>
          </div>
        ))}
      </div>
    </div>
  )
}

const Plan = ({plan}) => {
  const {name ,buttonText, features, price} = plan
  return (
    <div key={name} className='flex flex-col relative gap-4 text-center border pt-[2rem] h-[100%] px-5 rounded-[8px] py-6 w-[14rem]'>
      <h1 className='mb-2 text-[2rem] font-[600]'>{name}</h1>
      <div className="features flex-1 flex-col gap-[2rem] text-sm text-[13px] items-start">
        {features.map((feature : string) => (
          <div className='flex gap-1 mt-4 text-[#547CC9] items-center'>
            <FaRegCircleCheck/>
            <span key={feature}>{feature}</span>
          </div>
        ))}
      </div>
      <div className="below flex flex-col gap-[1rem] relative bottom mb-5">
        <div className="price">
          <span className='font-[600] text-[1.5rem]'>₦ {price.toString()} <small className='text-[10px] font-[300] text-[#94A3B5]'>/month</small></span>
        </div>
        <button className="pay cursor-pointer px-1 text-white rounded-[6px] text-[12px] py-3 cursor-pointer bg-[#547CC9] hover:transition hover:bg-white hover:text-[#547CC9] hover:border-[#547CC9] border hover:duration-300 hover:ease-in-out hover">{buttonText}</button>
      </div>
    </div>
  )
}

export default Subscription