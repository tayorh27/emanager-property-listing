import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import Sidebar from './Sidebar'
import Header from './Header'
import ContextProvider from '../provider/ContextProvider'

const Layout = () => {
  return (
    <ContextProvider>
      <LayoutStyle>
        <Sidebar/>
        <div className="main">
          <Header/>
          <div>{<Outlet/>}</div>
        </div>
      </LayoutStyle>
    </ContextProvider>
  )
}

const LayoutStyle = styled.div`
  display : flex;
  flex-direction : row;
  height : 100vh;
  width : 100vw;
  background-color : #fffff;
  overflow : hidden;
  font-size : 1rem; 
`

export default Layout