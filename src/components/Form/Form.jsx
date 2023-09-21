import React, { useContext } from 'react'
import Checkbox from './Checkbox'
import GenerateBtn from '../GenerateBtn'
import Range from './Range'
import Password from '../Password'
import useForm from '../../hooks/useForm'
import { useToggleContext } from '../../Context/Toggle'
const Form = () => {

  const   {uppercase,numbers,symbols,passLength,pass1,pass2,
    copy,renderPasswords,handleChange,
    }=useForm()
 
    const {isDark,darkClass}=useToggleContext()
  return (
    <form className="container flex-col" onSubmit={renderPasswords}>
        <fieldset className={`flex-col ${isDark&&darkClass} mx-auto`}>
          <legend>Strengthen your passwords. Include:</legend>
          <div className="checkbox-container flex-col">
            <Checkbox 
              name={'uppercase'}
              label={'Capitals'}
              value={uppercase}
              onChange={handleChange}
              />
           <Checkbox
              name={'symbols'}
              value={symbols}
              onChange={handleChange}
           />
           <Checkbox
              name={'numbers'}
              value={numbers}
              onChange={handleChange}
           />
          </div>
  
        </fieldset>
        <Range
          name={'passLength'}
          value={passLength}
          onChange={handleChange}
        />
     
        <GenerateBtn/>

        <hr/>
        <div className="container passwords-container flex-row wrap">
          <Password onClick={()=>copy(pass1)}>{pass1}</Password>
          <Password onClick={()=>copy(pass2)}>{pass2}</Password>
        </div>

      </form>
  )
}

export default Form