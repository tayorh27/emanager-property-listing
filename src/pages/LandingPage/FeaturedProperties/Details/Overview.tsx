import React from "react";
import propertyImg from "../../../../assets/img/testAssets/residence.png";
import buildingicon from "../../../../assets/img/testAssets/building.png";
import dimensionsicon from "../../../../assets/img/testAssets/dimensions.png";
import agentphoto from "../../../../assets/img/testAssets/agentphoto.png";
import { Link, useParams } from "react-router-dom";
import {PaginationData} from "../../../../Lib/PaginationData"
import { GiCheckMark, GiCrossMark } from "react-icons/gi";

export default function Overview() {
  const { productId } = useParams();
  const filteredProducts = PaginationData.filter(
    (product) => product.id = productId
  )
  const ammenities = filteredProducts[0].ammenities[0];
  console.log(ammenities.CCTV);

  

  
  return (
    <div className="flex flex-col w-full">
      <img src={propertyImg} alt="" className="w-full h-full" />
      
      

      <div className="flex items-center justify-between w-full text-[20px]">
        <span className="flex w-full items-center text-center justify-center text-[40px] font-[600]">
          N{filteredProducts[0].price}
        </span>
        <span className="flex w-full items-center text-center justify-center gap-[24px]">
          <img src={buildingicon} alt="" />
          {filteredProducts[0].secondFeature[0].numBed} beds
        </span>
        <span className="flex w-full items-center text-center justify-center gap-[24px]">
          <img src={buildingicon} alt="" />
          {filteredProducts[0].secondFeature[0].numBath} baths
        </span>
        <span className="flex w-full items-center text-center justify-center gap-[24px]">
          <img src={dimensionsicon} alt="" />
          <span>
            224m<sup>2</sup> per room
          </span>
        </span>
      </div>
      <div className="py-12">
        <div className="flex gap-[30px]">
          <div className="flex flex-col gap-[16px]">
            <span className="font-[600] text-[24px]">Overview</span>
            <span className="font-[400] text-[20px]">
              Discover the allure of this exquisite 3-bedroom flat, situated in
              a prime location in Lagos. With a modern and elegant design,this
              spacious flat offers a comfortable and luxurious living
              experience.
            </span>
            <div className="flex flex-wrap gap-[20px] mt-[12px]">
              <div className="bg-[#F3F5FA99] border border-[#CBD6EB] rounded p-[10px] w-fit pr-40 flex items-center gap-[10px] text-[16px] font-[400]">
                <span className="font-[700]">Property ID:</span>
                <span>{filteredProducts[0].secondFeature[0].property}</span>
              </div>
              <div className="bg-[#F3F5FA99] border border-[#CBD6EB] rounded p-[10px] w-fit pr-40 flex items-center gap-[10px] text-[16px] font-[400]">
                <span className="font-[700]">Address:</span>
                <span>
                  {filteredProducts[0].address}
                  {", "}
                  {filteredProducts[0].location}
                </span>
              </div>
              <div className="bg-[#F3F5FA99] border border-[#CBD6EB] rounded p-[10px] w-fit pr-40 flex items-center gap-[10px] text-[16px] font-[400]">
                <span className="font-[700]">Build Year:</span>
                <span>
                  {filteredProducts[0].secondFeature[0].buildDate.getFullYear()}
                </span>
              </div>
              <div className="bg-[#F3F5FA99] border border-[#CBD6EB] rounded p-[10px] w-fit pr-40 flex items-center gap-[10px] text-[16px] font-[400]">
                <span className="font-[700]">No of Units Available</span>
                <span>{filteredProducts[0].secondFeature[0].numUnits}</span>
              </div>
              <div className="bg-[#F3F5FA99] border border-[#CBD6EB] rounded p-[10px] w-fit pr-40 flex items-center gap-[10px] text-[16px] font-[400]">
                <span className="font-[700]">Available From</span>
                <span>
                  {filteredProducts[0].secondFeature[0].buildDate.getFullYear()}
                </span>
              </div>
              <div className="bg-[#F3F5FA99] border border-[#CBD6EB] rounded p-[10px] w-fit pr-40 flex items-center gap-[10px] text-[16px] font-[400]">
                <span className="font-[700]">Nearest Bus Stop</span>
                <span>{filteredProducts[0].nearestBusStop}</span>
              </div>
              <div className="bg-[#F3F5FA99] border border-[#CBD6EB] rounded p-[10px] w-full pr-40 flex items-center gap-[10px] text-[16px] font-[400]">
                <span className="font-[700]">Available Documents</span>
                <span>null</span>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="bg-[#F6F8F9] py-[27px] px-[39px] w-[255px] h-[349px] shadow-2xl hover:skew-y-12 transition-all duration-500">
              <img src={agentphoto} alt="" />
              <div className="flex flex-col items-center justify-center text-center text-[11px] font-[400] text-[#141B2D]">
                <span className="text-[#091638] text-[14px] font-[700]">
                  {filteredProducts[0].nameOfAgent}
                </span>
                <span>
                  <a href="tel:+2341234567890">+2341234567890</a>
                </span>
                <span>
                  <a href="mailto:kohinoor.kareem@realestate.es">
                    kohinoor.kareem@realestate.es
                  </a>
                </span>
                <Link className="underline text-[#1C3988]" to={"/"}>
                  View Agent&apos;s Profile
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col py-12 text-[14px] font-[400]">
        <span className="font-[700] text-[24px] text-[#41454B]">Features</span>
        <div className="grid grid-cols-3 gap-[24px] pt-8">
          <div className="flex items-center gap-[10px]">
            <span>
              {ammenities.AC === true ? <GiCheckMark /> : <GiCrossMark />}
            </span>
            <span>AC</span>
          </div>{" "}
          <div className="flex items-center gap-[10px]">
            <span>
              {ammenities.CCTV === true ? <GiCheckMark /> : <GiCrossMark />}
            </span>
            <span>CCTV</span>
          </div>{" "}
          <div className="flex items-center gap-[10px]">
            <span>
              {ammenities.backYard === true ? <GiCheckMark /> : <GiCrossMark />}
            </span>
            <span>Back Yard</span>
          </div>{" "}
          <div className="flex items-center gap-[10px]">
            <span>
              {ammenities.allEnsuiteBedroom === true ? (
                <GiCheckMark />
              ) : (
                <GiCrossMark />
              )}
            </span>
            <span>All Ensuited Bedrooms</span>
          </div>{" "}
          <div className="flex items-center gap-[10px]">
            <span>
              {ammenities.balcony === true ? <GiCheckMark /> : <GiCrossMark />}
            </span>
            <span>Balcony</span>
          </div>{" "}
          <div className="flex items-center gap-[10px]">
            <span>
              {ammenities.water === true ? <GiCheckMark /> : <GiCrossMark />}
            </span>
            <span>Water</span>
          </div>{" "}
          <div className="flex items-center gap-[10px]">
            <span>
              {ammenities.familyLounge === true ? (
                <GiCheckMark />
              ) : (
                <GiCrossMark />
              )}
            </span>
            <span>Family Lounge</span>
          </div>{" "}
          <div className="flex items-center gap-[10px]">
            <span>
              {ammenities.fenced === true ? <GiCheckMark /> : <GiCrossMark />}
            </span>
            <span>Fence</span>
          </div>{" "}
          <div className="flex items-center gap-[10px]">
            <span>
              {ammenities.parkingSpace === true ? (
                <GiCheckMark />
              ) : (
                <GiCrossMark />
              )}
            </span>
            <span>Parking Space</span>
          </div>{" "}
          <div className="flex items-center gap-[10px]">
            <span>
              {ammenities.gateHouse === true ? (
                <GiCheckMark />
              ) : (
                <GiCrossMark />
              )}
            </span>
            <span>Gate House</span>
          </div>{" "}
          <div className="flex items-center gap-[10px]">
            <span>
              {ammenities.security === true ? <GiCheckMark /> : <GiCrossMark />}
            </span>
            <span>Security</span>
          </div>
          <div className="flex items-center gap-[10px]">
            <span>
              {ammenities.gym === true ? <GiCheckMark /> : <GiCrossMark />}
            </span>
            <span>Gym</span>
          </div>
          <div className="flex items-center gap-[10px]">
            <span>
              {ammenities.jacuzzi === true ? <GiCheckMark /> : <GiCrossMark />}
            </span>
            <span>Jacuzzi</span>
          </div>
          <div className="flex items-center gap-[10px]">
            <span>
              {ammenities.tarredRoads === true ? <GiCheckMark /> : <GiCrossMark />}
            </span>
            <span>Tarred Roads</span>
          </div>
          <div className="flex items-center gap-[10px]">
            <span>
              {ammenities.oceanView === true ? <GiCheckMark /> : <GiCrossMark />}
            </span>
            <span>Ocean View</span>
          </div>
          <div className="flex items-center gap-[10px]">
            <span>
              {ammenities.kitchenStorage === true ? <GiCheckMark /> : <GiCrossMark />}
            </span>
            <span>Kitchen Storage</span>
          </div>
          <div className="flex items-center gap-[10px]">
            <span>
              {ammenities.walkInCloset === true ? <GiCheckMark /> : <GiCrossMark />}
            </span>
            <span>Walk in Closet</span>
          </div>
          <div className="flex items-center gap-[10px]">
            <span>
              {ammenities.exteriorLight === true ? <GiCheckMark /> : <GiCrossMark />}
            </span>
            <span>Exterior Light</span>
          </div>
          <div className="flex items-center gap-[10px]">
            <span>
              {ammenities.goodDrainage === true ? <GiCheckMark /> : <GiCrossMark />}
            </span>
            <span>Good Drainage</span>
          </div>
          <div className="flex items-center gap-[10px]">
            <span>
              {ammenities.swimmingPool === true ? <GiCheckMark /> : <GiCrossMark />}
            </span>
            <span>Swimming Pool</span>
          </div>
        </div>
      </div>

    </div>
  );
}
