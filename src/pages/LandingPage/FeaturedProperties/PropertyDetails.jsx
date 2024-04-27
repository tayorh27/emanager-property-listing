import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { PaginationData } from "../../../Lib/PaginationData";
import { FaLocationDot } from "react-icons/fa6";
import AreaGuides from "./Details/AreaGuides";
import Overview from "./Details/Overview";
import Features from "./Details/Features";
import Media from "./Details/Media";

export default function PropertyDetails() {
  const { productId } = useParams();
  const [productInner, setProductInner] = useState("overview");
  const filteredProducts = PaginationData.filter((product) => product.id === productId);
  console.log(filteredProducts);
  const handleInnerProduct = (selection) => {
    setProductInner(selection);
  };

  return (
    <div className="bg-white pt-[100px] px-[97px]">
      <p className="text-[40px] font-[600]"> </p>
      <p className="flex gap-[16px] text-[20px] font-[400] items-center mb-8">
        <FaLocationDot /> {filteredProducts.apartmentType}
      </p>
      <div className="flex bg-[#F6F8F9] text-[16px] font-[500] items-center justify-between w-[full]">
        <span
          className={`p-[24px] ${
            productInner === "overview" && "bg-white"
          } w-full text-center`}
          onClick={() => handleInnerProduct("overview")}
        >
          Overview
        </span>
        <span
          className={`p-[24px] ${
            productInner === "features" && "bg-white"
          } w-full text-center`}
          onClick={() => handleInnerProduct("features")}
        >
          Features
        </span>
        <span
          className={`p-[24px] ${
            productInner === "media" && "bg-white"
          } w-full text-center`}
          onClick={() => handleInnerProduct("media")}
        >
          Media
        </span>
        <span
          className={`p-[24px] ${
            productInner === "areaguide" && "bg-white"
          } w-full text-center`}
          onClick={() => handleInnerProduct("areaguide")}
        >
          Area Guide
        </span>
      </div>
      {productInner === "overview" && <Overview />}
      {productInner === "features" && <Features />}
      {productInner === "media" && <Media />}
      {productInner === "areaguide" && <AreaGuides />}
    </div>
  );
}
