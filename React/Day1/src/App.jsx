import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PropsInComponent from './Components/PropsInComponent'
import MoonImages from './Components/MoonImages'
import Props from './Components/Props'
import ConditionalRender from './Components/ConditionalRender'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
    
    <PropsInComponent name={"Rohan"} age={21} /> 
    <PropsInComponent name={"Chaitu"} age={20} /> 
    <MoonImages/> 
    <Props name={"Rohan"} age={21} rollno={19} />
    <Props name={"chaitu"} age={19} rollno={21} />
    <ConditionalRender />
</>
  )
}

export default App
