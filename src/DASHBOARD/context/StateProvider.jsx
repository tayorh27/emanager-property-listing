import React, { useContext, useEffect, useState } from 'react'
import { createContext } from 'react'
import {useLocation} from 'react-router-dom'

export const StateContext = createContext()

export const StateProvider = ({children}) => {
  const {pathname} = useLocation()
  const [activeLink, setActiveLink] = useState(pathname)

  const NavigateLink = (path) => {
    setActiveLink(path)
  }

  return (
    <StateContext.Provider
      value={{
        NavigateLink,
        activeLink,
        setActiveLink
      }}
    >
      {children}
    </StateContext.Provider>
  )
}

export const useStateProvider = () => useContext(StateContext)