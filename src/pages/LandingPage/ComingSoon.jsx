import React from 'react'
import styled from 'styled-components'
import image from '../../assets/img/testAssets/iPhone15.png'

const ComingSoon = () => {
  return (
    <ComingSoonStyle>
      <div className="left flex flex-col gap-[1rem]">
        <h1>Coming Soon!</h1>
        <p>Manage your properties on the go with our E-Manager mobile app. Also get access to the trendiest properties.
          Anticipate!.
        </p>
      </div>
      <div className="right">
        <img src={image} alt="" />
      </div>
    </ComingSoonStyle>
  )
}

const ComingSoonStyle = styled.section`
  width : 100%;
  height : 100%;
  padding : 2rem 4rem;
  background : #F3F5FA;
  display : flex;
  gap : 3rem;
  align-items : center;
  position : relative;

  .left {
    margin-left : 4rem;
    h1{
      font-size : 3.5rem;
      font-weight : 500;
      font-family: 'Montserrat', sans-serif;
      color : #547CC9;
    }

    p{
      max-width : 50%;
      color : #91959B;
      line-height : 1.5rem;
      font-size : 1rem;
    }
  }

  .right {
    margin-left : -15rem;
    hei
  }
`

export default ComingSoon