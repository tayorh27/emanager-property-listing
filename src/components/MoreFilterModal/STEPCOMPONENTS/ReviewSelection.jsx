import React from 'react'
import LocationStep from './LocationStep'
import PropertyTypeStep from './PropertyTypeStep'
import BedRoomStep from './BedRoomStep'
import PriceStep from './PriceStep'
import FeatureStep from './FeatureStep'
import ServiceApartmentStep from './ServiceApartmentStep'

const ReviewSelection = () => {
  return (
    <div className='flex gap-[3rem] flex-col'>
      <LocationStep/>
      <PropertyTypeStep/>
      <BedRoomStep/>
      <PriceStep/>
      <FeatureStep/>
      <ServiceApartmentStep/>
    </div>
  )
}

export default ReviewSelection