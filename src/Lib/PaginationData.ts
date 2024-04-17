import { PropertyType, secondFeature, Data } from "./CardData";
import {v4 as  uuidv4 } from 'uuid'

const originalData : PropertyType[] = [...Data]

const duplicatedData = Array.from({length : 600}).map(() => {
  //create a new object for each iteration
  return {
    //create a new id for each object from the uuidv4 library
    id: uuidv4(),
    imgUrl : originalData[0].imgUrl,
    apartmentType : originalData[0].apartmentType,
    price : originalData[0].price,
    numBath : originalData[0].numBath,
    numBed : originalData[0].numBed,
    numGarage : originalData[0].numGarage,
    nameOfAgent : originalData[0].nameOfAgent,
    location : originalData[0].location,
    secondFeature : [originalData[0].secondFeature[0]]
  }
})

export const PaginationData = [...duplicatedData]