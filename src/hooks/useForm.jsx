
import { useState,useEffect } from 'react'
import { numbersArr,symbolsArr,uppercaseArr,lowercaseArr } from '../data'
const useForm = () => {
    const [{uppercase,numbers,symbols,
        passLength},setForm]=useState({uppercase:"",numbers:"",symbols:"",passLength:15})

const [arr,setArr]=useState(lowercaseArr)
const [{pass1,pass2},setPassword]=useState({pass1:"",pass2:""})

const copy=async(str)=>await navigator.clipboard.writeText(str)
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

  return {uppercase,numbers,symbols,passLength,
         arr,pass1,pass2,getRandomNumberFromArr,getPassword,copy,
        renderPasswords,handleChange,
        }
}

export default useForm