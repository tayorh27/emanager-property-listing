import React from "react";
import { useParams } from "react-router-dom";

export default function AreaGuides() {
  const { productId } = useParams();
    return <div>
      <p>Area Guides</p>
  </div>;
}
