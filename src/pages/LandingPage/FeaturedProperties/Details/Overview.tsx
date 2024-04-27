import React from "react";
import propertyImg from "../../../../assets/img/testAssets/residence.png";
import buildingicon from "../../../../assets/img/testAssets/building.png";
import dimensionsicon from "../../../../assets/img/testAssets/dimensions.png";
import { useParams } from "react-router-dom";

export default function Overview() {
  const { productId } = useParams();
  return (
    <div className="flex flex-col w-full">
      <img src={propertyImg} alt="" className="w-full h-full" />
      Carousel
      <div className="flex items-center justify-between w-full text-[20px]">
        <span className="flex w-full items-center text-center justify-center text-[40px] font-[600]">
          N1,000,000
        </span>
        <span className="flex w-full items-center text-center justify-center gap-[24px]">
          <img src={buildingicon} alt="" />4 beds
        </span>
        <span className="flex w-full items-center text-center justify-center gap-[24px]">
        <img src={buildingicon} alt="" />
          3 baths
        </span>
        <span className="flex w-full items-center text-center justify-center gap-[24px]">
          <img src={dimensionsicon} alt="" />
          <span>
            224m<sup>2</sup> per room
          </span>
        </span>
      </div>
    </div>
  );
}
