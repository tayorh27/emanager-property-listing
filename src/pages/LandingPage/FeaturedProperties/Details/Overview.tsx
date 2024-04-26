import React from "react";
import propertyImg from "../../../../assets/img/testAssets/residence.png";
import { useParams } from "react-router-dom";

export default function Overview() {
  const { productId } = useParams();
    return (
      <div>
        <div className="w-full">
          <img src={propertyImg} alt="" className="w-full h-full" />
        </div>
      </div>
    );
}
