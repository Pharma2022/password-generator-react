import { useToggleContext } from '../../Context/Toggle'

const Checkbox = ({name,value,label=null,...rest}) => {

    const {isDark,darkClass}=useToggleContext()

  return (
    <label className={`checkbox-label flex-row space-between ${isDark&&darkClass}`} htmlFor={name}>{ label|| name.charAt(0).toUpperCase()+name.slice(1)}
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