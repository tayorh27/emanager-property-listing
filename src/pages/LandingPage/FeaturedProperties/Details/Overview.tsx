import React from "react";
import propertyImg from "../../../../assets/img/testAssets/residence.png";
import buildingicon from "../../../../assets/img/testAssets/building.png";
import dimensionsicon from "../../../../assets/img/testAssets/dimensions.png";
import agentphoto from "../../../../assets/img/testAssets/agentphoto.png";
import { Link, useParams } from "react-router-dom";
import {PaginationData} from "../../../../Lib/PaginationData"

export default function Overview() {
  const { productId } = useParams();
  const filteredProducts = PaginationData.filter(
    (product) => product.id = productId
  )
  console.log(filteredProducts[0]);
  
  return (
    <div className="flex flex-col w-full">
      <img src={propertyImg} alt="" className="w-full h-full" />
      Carousel
      <div className="flex items-center justify-between w-full text-[20px]">
        <span className="flex w-full items-center text-center justify-center text-[40px] font-[600]">
          N{filteredProducts[0].price}
        </span>
        <span className="flex w-full items-center text-center justify-center gap-[24px]">
          <img src={buildingicon} alt="" />
          {filteredProducts[0].numBed} beds
        </span>
        <span className="flex w-full items-center text-center justify-center gap-[24px]">
          <img src={buildingicon} alt="" />
          {filteredProducts[0].numBath} baths
        </span>
        <span className="flex w-full items-center text-center justify-center gap-[24px]">
          <img src={dimensionsicon} alt="" />
          <span>
            224m<sup>2</sup> per room
          </span>
        </span>
      </div>
      <div className="pt-12">
        <div className="flex">
          <div className="flex flex-col">
            <span className="font-[600] text-[24px]">Overview</span>
            <span className="font-[400] text-[20px]">
              Discover the allure of this exquisite 3-bedroom flat, situated in
              a prime location in Lagos. With a modern and elegant design,this
              spacious flat offers a comfortable and luxurious living
              experience.
            </span>
            <div className="flex flex-wrap gap-[16px]">
              <div className="bg-[#F3F5FA99] border border-[#CBD6EB] rounded p-[10px] w-[340px] flex items-center gap-[10px] text-[16px] font-[400]">
                <span className="font-[700]">Property ID:</span>
                <span>{filteredProducts[0].secondFeature[0].property}</span>
              </div>
              <div className="bg-[#F3F5FA99] border border-[#CBD6EB] rounded p-[10px] w-[340px] flex items-center gap-[10px] text-[16px] font-[400]">
                <span className="font-[700]">Property ID:</span>
                <span>{filteredProducts[0].secondFeature[0].property}</span>
              </div>
              <div className="bg-[#F3F5FA99] border border-[#CBD6EB] rounded p-[10px] w-[340px] flex items-center gap-[10px] text-[16px] font-[400]">
                <span className="font-[700]">Property ID:</span>
                <span>{filteredProducts[0].secondFeature[0].property}</span>
              </div>
              <div className="bg-[#F3F5FA99] border border-[#CBD6EB] rounded p-[10px] w-[340px] flex items-center gap-[10px] text-[16px] font-[400]">
                <span className="font-[700]">Property ID:</span>
                <span>{filteredProducts[0].secondFeature[0].property}</span>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="bg-[#F6F8F9] py-[27px] px-[39px] w-[255px] h-[349px]">
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
    </div>
  );
}
