export interface PropertyType {
  imgUrl : string
  apartmentType : string,
  price : number,
  numBath : number,
  numBed : number,
  numGarage : number
  location : string,
  nameOfAgent : string
  secondFeature : secondFeature[]
}

export interface secondFeature {
  address : string
  nameOfAgent : string
  addressJunction : string
  numBath : number,
  numBed : number,
  numGarage : number
  price : number,
}

export const Data : PropertyType[] = [
  {
    imgUrl : '../assets/img/testAssets/featured.png',
    apartmentType : "3 Bedroom Detached Duplex",
    price : 800000,
    numBath : 3,
    numBed : 3,
    numGarage : 1,
    location : 'Ikeja, Lagos',
    nameOfAgent : "Simeone",
    secondFeature : [
      {
        address : "209B Allen Jaja Street",
        addressJunction : "Lagos Junction",
        nameOfAgent : "Simeone",
        numBath : 3,
        numBed : 10,
        numGarage : 2,
        price : 40545
      }
    ]
  }
]