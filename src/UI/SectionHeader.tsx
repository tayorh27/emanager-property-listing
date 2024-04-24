import React from 'react'
import styled from 'styled-components'

interface Header {
  title : string,
  subtitle? : string
}

const SectionHeader = ({title , subtitle} :Header) => {
  return (
    <SectionHeaderStyle>
      <h1>{title}</h1>
      {subtitle && <span>{subtitle}</span>}
    </SectionHeaderStyle>
  )
}

const SectionHeaderStyle = styled.div`
  display : flex;
  flex-direction : column;
  align-items : center;
  justify : center;
  width : 100%;
  margin-bottom : 1rem;

  h1{
    font-size : 2rem;
    font-weight : 500;
    color : #132B58;
    letter-spacing : 2px;
    padding-bottom :0.5rem;
  }

  span {
    font-size : 0.8rem;
    font-weight : 500;
    color : #91959B;
  }
`

export default SectionHeader