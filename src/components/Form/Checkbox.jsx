import React from 'react'

const Checkbox = ({name,value,label=null,...rest}) => {
  return (
    <label className="flex-row justify-center" htmlFor={name}>{ label|| name.charAt(0).toUpperCase()+name.slice(1)}
               <input 
               type="checkbox" 
               checked={value===true} 
               name={name}
               {...rest}
               />
            </label>
  )
}

export default Checkbox