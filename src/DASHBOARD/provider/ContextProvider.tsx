import React from 'react'
import { StateProvider } from '../context/StateProvider'

interface Provider {
  children : React.ReactNode
}

const ContextProvider = ({children} : Provider) => {
  return (
    <StateProvider>
      {children}
    </StateProvider>
  )
}

export default ContextProvider