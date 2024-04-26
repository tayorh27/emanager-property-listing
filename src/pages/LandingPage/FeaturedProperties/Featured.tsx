import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import ReusableCard from '../../../UI/ReusableCard'
import { Data } from '../../../Lib/CardData'

const Featured = () => {
  return (
    <FeaturedStyle>
      <div className="top flex items-center justify-between">
        <h2 className='text-[2rem] font-[500] text-[#08090B]'>Featured Properties</h2>
        <Link to="/search-filter" className='text-[1.2rem] text-[#547CC9]'>
          See all
        </Link>
      </div>
      <div className="cards">
        {Array.from({ length: 3 }).map((_, index) => (
          <div className="card-item w-[100%]">
            <ReusableCard key={index} card={Data[0]} />
          </div>
        ))}
      </div>
    </FeaturedStyle>
  )
}

const FeaturedStyle = styled.section`
  padding : 4rem 10%;
  padding-top :6rem;
  width : 100%;
  height : 100%;
  display : flex;
  flex-direction : column;
  gap : 3rem;

  .cards {
    display : grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
  }
`

export default Featured