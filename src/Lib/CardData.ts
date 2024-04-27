export interface PropertyType {
  imgUrl : string
  apartmentType : string,
  price : number,
  location : string,
  nameOfAgent : string
  addressJunction : string,
  address : string,
  secondFeature : secondFeature[]
}

export interface secondFeature {
  numUnits: 23,
  numBath : number,
  numBed : number,
  numGarage : number
  property : number,
}

export const Data : PropertyType[] = [
  {
    imgUrl : '../assets/img/testAssets/featured.png',
    apartmentType : "3 Bedroom Detached Duplex",
    price : 800000,
    address : "209B Allen Jaja Street",
    location : 'Ikeja, Lagos',
    addressJunction : "Lagos Junction",
    nameOfAgent : "Simeone",
    secondFeature : [
      {
        numUnits: 23,
        numBath : 3,
        numBed : 10,
        numGarage : 2,
        property : 40545,
      }
    ]
  }
]