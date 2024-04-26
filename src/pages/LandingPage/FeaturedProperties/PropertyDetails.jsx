import React from "react";
import { useParams } from "react-router-dom";

export default function PropertyDetails() {
    const {productId} = useParams()
    return <div>
        <span className="w-screen h-screen flex items-center justify-center text-center">
            <span>Hello World</span>
        </span>
  </div>;
}
