import React from 'react'
import { SubscriptionData } from '../data'

const Subscription = () => {
  return (
    <div className='relative h-[100vh] w-full mt-[1.5rem] flex flex-col px-20 py-2 gap-[1.5rem]'>
      <h2 className='flex justify-center text-[1.2rem] font-[500] text-[#294B8C]'>Subscription Plans</h2>
      <div className="plans">
        {SubscriptionData.map((plan) => (
          <div className="plan-item">
            <Plan plan={plan}/>
          </div>
        ))}
      </div>p
    </div>
  )
}

const Plan = ({plan}) => {
  return (
    <div></div>
  )
}

export default Subscription