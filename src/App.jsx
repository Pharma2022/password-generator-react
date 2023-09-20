import { useEffect, useState } from 'react'
import {uppercaseArr,lowercaseArr,numbersArr,symbolsArr} from './data'
import './App.css'
import Checkbox from './components/Form/Checkbox'
import GenerateBtn from './components/GenerateBtn'
import Range from './components/Form/Range'
import Password from './components/Password'
import DarkModeBtn from './components/DarkModeBtn'
import { useToggleContext } from './Context/Toggle'
function App() {


  const [{uppercase,numbers,symbols,
          passLength},setForm]=useState({uppercase:"",numbers:"",symbols:"",passLength:15})
  
  const {isDark,darkClass}=useToggleContext()  
  const [arr,setArr]=useState(lowercaseArr)
  const [{pass1,pass2},setPassword]=useState({pass1:"",pass2:""})
  
  
  const getRandomNumberFromArr=()=>Math.floor(Math.random()*arr.length)

  const getPassword=()=>{
    let pass=""
    for (let i = 0; i<passLength; i++){
      pass+=arr[getRandomNumberFromArr()]
  }
    return pass
  }
  
  const renderPasswords=(e)=>{
    e.preventDefault()
    setPassword({pass1:getPassword(),pass2:getPassword()})}
  const handleChange=({target:
                        {name,value, 
                        type, checked}})=> 
                          setForm(prev =>  ({
                            ...prev,
                        [name]: type === "checkbox" ? checked : value }) )
      
  useEffect(()=>{

    const otherCharsArr=[
      ...(numbers? numbersArr:[]),
      ...(symbols ? symbolsArr:[]),
      ...(uppercase? uppercaseArr:[]) ]
    setArr([...lowercaseArr,
      ...otherCharsArr])

  },[numbers,symbols,uppercase])



  



  return (
    <div className={`main ${isDark&&darkClass} flex-col`}>
      <h1 className={`title ${isDark&&darkClass} container`}>Generate a <span className="green-text">Random Password</span></h1>
      
      <div className="container flex-row space-between align-center">
        <h3 className="subtitle">Never use an insecure password again </h3>
        <DarkModeBtn/>
        </div>
            
      <form className="container flex-col" onSubmit={renderPasswords}>
        <fieldset className="flex-col">
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
          <Password>{pass1}</Password>
          <Password>{pass2}</Password>
        </div>

      </form>

    </div>
  )
}

export default App
