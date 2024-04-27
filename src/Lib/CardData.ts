export interface PropertyType {
  imgUrl : string
  apartmentType : string,
  price : number,
  location : string,
  nameOfAgent : string
  nearestBusStop : string,
  address : string,
  secondFeature: secondFeature[],
  ammenities: ammenities[],
}

export interface secondFeature {
  numUnits: 23,
  numBath : number,
  numBed : number,
  numGarage : number
  property: number,
  buildDate: Date,
}

export interface ammenities{
  CCTV: boolean,
  AC: boolean,
  backYard: boolean,
  allEnsuiteBedroom: boolean,
  balcony: boolean,
  water: boolean,
  familyLounge: boolean,
  fenced: boolean,
  parkingSpace: boolean,
  gateHouse: boolean,
  security: boolean,
  gym: boolean,
  jacuzzi: boolean,
  tarredRoads: boolean,
  oceanView: boolean,
  kitchenStorage: boolean,
  walkInCloset: boolean,
  exteriorLight: boolean,
  goodDrainage: boolean,
  swimmingPool: boolean,
}

export const Data: PropertyType[] = [
  {
    imgUrl: "../assets/img/testAssets/featured.png",
    apartmentType: "3 Bedroom Detached Duplex",
    price: 800000,
    address: "209B Allen Jaja Street",
    location: "Ikeja, Lagos",
    nearestBusStop: "Lagos Junction",
    nameOfAgent: "Simeone",
    secondFeature: [
      {
        numUnits: 23,
        numBath: 3,
        numBed: 10,
        numGarage: 2,
        property: 40545,
        buildDate: new Date(2012, 9, 11),
      },
    ],
    ammenities: [
      {
        CCTV: true,
        AC: false,
        backYard: true,
        allEnsuiteBedroom: true,
        balcony: true,
        water: true,
        familyLounge: true,
        fenced: true,
        parkingSpace: true,
        gateHouse: true,
        security: true,
        gym: false,
        jacuzzi: false,
        tarredRoads: true,
        oceanView: false,
        kitchenStorage: true,
        walkInCloset: true,
        exteriorLight: true,
        goodDrainage: true,
        swimmingPool: false,
      }
    ],
  },
];