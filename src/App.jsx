import './App.css'

import { useToggleContext } from './Context/Toggle'
import Form from './components/Form/Form'
import Header from './components/Form/Header'
function App() {

  const {isDark,darkClass}=useToggleContext()  
   
  return (
    <div className={`main ${isDark&&darkClass} flex-col `}>
      <Header/>
      <Form/>     
      

    </div>
  )
}

export default App
