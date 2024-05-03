import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import ReusableCard from '../../../UI/ReusableCard'
import { PaginationData } from "../../../Lib/PaginationData";
import { PropertyType } from '../../../Lib/CardData';

const Featured = () => {
  const [selectedProperties, setSelectedProperties] = useState<PropertyType[]>(
    []
  );
  const selectRandomProperties = () => {
    const shuffledData = PaginationData.sort(() => Math.random() - 0.5);
    const selected = shuffledData.slice(0, 3);
    setSelectedProperties(selected);
  };

  useEffect(() => {
    selectRandomProperties();
  }, []);
  return (
    <div>
      <div className="flex items-center justify-between px-32 py-10">
        <h2 className="text-[2rem] font-[500] text-[#08090B]">
          Featured Properties
        </h2>
        <Link to="/search-filter" className="text-[1.2rem] text-[#547CC9]">
          See all
        </Link>
      </div>{" "}
      <div className="grid grid-cols-3 gap-16 px-32">
      {selectedProperties.map((property, index) => (
        <div key={index} className="card-item w-[100%]">
          <ReusableCard card={property} />
        </div>
      ))}
      </div>
    </div>
  );
}

export default Featured