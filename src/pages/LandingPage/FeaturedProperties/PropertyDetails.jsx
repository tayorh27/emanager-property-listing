import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Data } from "../../../Lib/CardData";
import { FaLocationDot } from "react-icons/fa6";
import propertyImg  from "../../../assets/img/testAssets/residence.png";

export default function PropertyDetails() {
    const { productId } = useParams();
    const [productInner, setProductInner] = useState("")
    const filteredProducts = Data.filter((product) => product.id === productId);
    const handleInnerProduct = (selection) => {
        setProductInner(selection)
    }

  return (
    <div className="bg-white pt-[100px] px-[97px]">
      <p className="text-[40px] font-[600]">Luxury Five-Bedroom Apartment </p>
      <p className="flex gap-[16px] text-[20px] font-[400] items-center mb-8">
        <FaLocationDot /> Luxury Five-Bedroom Apartment{" "}
      </p>
      <div className="flex bg-[#F6F8F9] text-[16px] font-[500] items-center justify-around">
        <span className="p-[24px]" onClick={handleInnerProduct("overview")}>Overview</span>
        <span className="p-[24px]" onClick={handleInnerProduct("features")}>Features</span>
        <span className="p-[24px]" onClick={handleInnerProduct("media")}>Media</span>
        <span className="p-[24px]" onClick={handleInnerProduct("areaguide")}>Area Guide</span>
          </div>

          <div className="w-full">
              <img src={propertyImg} alt="" className="w-full h-full" />
          </div>
    </div>
  );
}
