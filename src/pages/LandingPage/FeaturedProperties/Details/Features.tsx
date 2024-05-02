import React from "react";
import { useParams } from "react-router-dom";

export default function Features() {
  const { productId } = useParams();
  return <div>
      <p>Features</p>
  </div>;
}
