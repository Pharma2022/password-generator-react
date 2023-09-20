import { useState } from "react"
const useToggle=()=>{

    const [isDark,setIsDark]=useState(false)
    const toggleDark=()=>setIsDark(prev=>!prev)
    const darkClass=isDark?'dark':""

  return {isDark,toggleDark,darkClass}
}

export default useToggle