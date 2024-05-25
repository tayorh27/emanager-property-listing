import React, { useEffect, useState } from 'react'
import LocationStep from './STEPCOMPONENTS/LocationStep'
import BedRoomStep from './STEPCOMPONENTS/BedRoomStep'
import PropertyTypeStep from './STEPCOMPONENTS/PropertyTypeStep'
import FeatureStep from './STEPCOMPONENTS/FeatureStep'
import PriceStep from './STEPCOMPONENTS/PriceStep'
import ServiceApartmentStep from './STEPCOMPONENTS/ServiceApartmentStep'
import { useNavigate } from 'react-router-dom'

const FilterModal = ({closeModal}) => {
  const [state, setState] = useState({
    step : 1,
  })

  const [reviewSelection, setReviewSelection] = useState(false)

  const navigate = useNavigate()

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

  const showProperties = () => {
    navigate("/search-filter")
  }

  useEffect(() => {
    console.log(reviewSelection)
  }, [state.step])

  const {step} = state
   // eslint-disable-next-line default-case
  switch(step) {
    case 1 :
      return (
        <LocationStep reviewSelection={reviewSelection} closeModal={closeModal} next={nextStep} prev={prevStep}/>
      )
    case 2 :
      return (
        <PropertyTypeStep reviewSelection={reviewSelection} prev={prevStep} closeModal={closeModal} next={nextStep}/>
      )
    case 3 : 
      return (
        <BedRoomStep reviewSelection={reviewSelection} closeModal={closeModal} next={nextStep} prev={prevStep}/>
      )
    case 4 :
      return (
        <PriceStep reviewSelection={reviewSelection} closeModal={closeModal} next={nextStep} prev={prevStep}/>
      )
    case 5 : 
      return (
        <FeatureStep reviewSelection={reviewSelection} closeModal={closeModal} next={nextStep} prev={prevStep}/>
      )
    case 6 :
      return (
        <ServiceApartmentStep closeModal={closeModal} showProperties={showProperties} reviewSelection={reviewSelection} setReviewSelection={setReviewSelection}/>
      )
  }
}

export default FilterModal