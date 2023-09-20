import React from 'react'

const Range = ({name,value,...rest}) => {
  return (
    <label htmlFor={name} className="pass-length-label justify-center align-center flex-row wrap">
    <span>Set Length: <span  className="green-text">{value}</span> </span> 
    <input type="range" className="pass-length" name={name} value={value} {...rest} min="8" max="25"/>
  </label>
  )
}

export default Range