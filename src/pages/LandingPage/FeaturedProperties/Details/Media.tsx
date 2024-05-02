import React from "react";
import { useParams } from "react-router-dom";

export default function Media() {
  const { productId } = useParams();
  return <div>
    <p>Media</p>
  </div>;
}
