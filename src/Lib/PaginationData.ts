import { PropertyType, secondFeature, Data } from "./CardData";
import { uuid } from 'uuidv4'

const originalData : PropertyType[] = [...Data]

export const duplicatedData = Array.from({length : 600}).map(() => {
  //create a new object for each iteration
  return {
    //create a new id for each object from the uuidv4 library
    id: uuid(),
    imgUrl : originalData[0].imgUrl,
    apartmentType : originalData[0].apartmentType,
    price : originalData[0].price,
    numBath : originalData[0].numBath,
  }
})