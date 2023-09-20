import React, { createContext, useContext } from 'react'
import useToggle from '../hooks/useToggle'
 const ToggleContext=createContext()



export const ToggleContextProvider = ({children}) => {
   
  return (
    <ToggleContext.Provider value={useToggle()}>
        {children}
    </ToggleContext.Provider>
  )
}

export const useToggleContext=()=>useContext(ToggleContext) 