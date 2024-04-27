import { PropertyType, secondFeature, Data } from "./CardData";

const originalData: PropertyType[] = [...Data];

const duplicatedData = Array.from({ length: 600 }).map((_, i) => {
  return {
    id: i + 1, // Use index `i` as ID
    imgUrl: originalData[0].imgUrl,
    apartmentType: originalData[0].apartmentType,
    price: originalData[0].price,
    numBath: originalData[0].numBath,
    numBed: originalData[0].numBed,
    numGarage: originalData[0].numGarage,
    nameOfAgent: originalData[0].nameOfAgent,
    location: originalData[0].location,
    secondFeature: [originalData[0].secondFeature[0]],
  };
});

export const PaginationData = [...duplicatedData];
