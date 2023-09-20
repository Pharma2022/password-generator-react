import React from 'react'
import { useToggleContext } from '../../Context/Toggle'

const Range = ({name,value,...rest}) => {

  const {isDark,darkClass}=useToggleContext()
  return (
    <label htmlFor={name} className={`pass-length-label justify-center align-center flex-row wrap ${isDark&&darkClass}`}>
    <span>Set Length: <span  className="green-text">{value}</span> </span> 
    <input type="range" className="pass-length" name={name} value={value} {...rest} min="8" max="25"/>
  </label>
  )
}

export default Range