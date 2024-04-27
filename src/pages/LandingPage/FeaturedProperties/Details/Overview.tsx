import React from "react";
import propertyImg from "../../../../assets/img/testAssets/residence.png";
import { useParams } from "react-router-dom";

export default function Overview() {
  const { productId } = useParams();
    return (
      <div className="flex flex-col w-full">
        <img src={propertyImg} alt="" className="w-full h-full" />
        Carousel
        <div className="flex items-center justify-between w-full">
          <span className="flex w-full items-center text-center justify-center text-[40px] font-[600]">
            N1,000,000
          </span>
          <span className="flex w-full items-center text-center justify-center">
            4 beds
          </span>
          <span className="flex w-full items-center text-center justify-center">
            3 baths
          </span>
          <span className="flex w-full items-center text-center justify-center">
            224m<sup>2</sup> per room
          </span>
        </div>
      </div>
    );
}
