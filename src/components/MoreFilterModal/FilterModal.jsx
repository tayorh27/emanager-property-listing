import React, { useState } from 'react'
import LocationStep from './STEPCOMPONENTS/LocationStep'
import BedRoomStep from './STEPCOMPONENTS/BedRoomStep'
import PropertyTypeStep from './STEPCOMPONENTS/PropertyTypeStep'
import FeatureStep from './STEPCOMPONENTS/FeatureStep'
import PriceStep from './STEPCOMPONENTS/PriceStep'
import ServiceApartmentStep from './STEPCOMPONENTS/ServiceApartmentStep'

const FilterModal = ({closeModal}) => {
  const [state, setState] = useState({
    step : 1
  })

  const nextStep = () =>{
    setState((state) => ({
      ...state,
      step : state.step + 1
    }))
  }

  const prevStep = () => {
    setState((state) => ({
      ...state,
      step : state.step - 1
    }))
  }

  const {step} = state
   // eslint-disable-next-line default-case
  switch(step) {
    case 1 :
      return (
        <LocationStep closeModal={closeModal} next={nextStep} prev={prevStep}/>
      )
    case 2 :
      return (
        <PropertyTypeStep closeModal={closeModal} next={nextStep}/>
      )
    case 3 : 
      return (
        <BedRoomStep closeModal={closeModal} next={nextStep}/>
      )
    case 4 :
      return (
        <PriceStep/>
      )
    case 5 : 
      return (
        <FeatureStep/>
      )
    case 6 :
      return (
        <ServiceApartmentStep/>
      )
  }
}

export default FilterModal