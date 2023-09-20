import React from 'react'
import { useToggleContext } from '../../Context/Toggle'
import DarkModeBtn from '../DarkModeBtn'
const Header = () => {


  const {isDark,darkClass}=useToggleContext()

  return (
    <>
         
         <h1 className={`title ${isDark&&darkClass} container`}>Generate a <span className="green-text">Random Password</span></h1>
         <div className="container flex-row space-between align-center">
            <h3 className={`subtitle ${isDark&&darkClass}`}>Never use an insecure password again </h3>
            <DarkModeBtn/>
         </div>

    </>
  )
}

export default Header