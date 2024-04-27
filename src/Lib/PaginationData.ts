import { PropertyType, secondFeature, Data } from "./CardData";

const originalData: PropertyType[] = [...Data];

const duplicatedData = Array.from({ length: 600 }).map((_, i) => {
  return {
    id: i + 1, // Use index `i` as ID
    imgUrl: originalData[0].imgUrl,
    apartmentType: originalData[0].apartmentType,
    price: originalData[0].price,
    nameOfAgent: originalData[0].nameOfAgent,
    location: originalData[0].location,
    nearestBusStop: originalData[0].nearestBusStop,
    address: originalData[0].address,
    secondFeature: [originalData[0].secondFeature[0]],
  };
});

export const PaginationData = [...duplicatedData];
