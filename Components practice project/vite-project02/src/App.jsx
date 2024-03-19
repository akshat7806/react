import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Heading from './components/Heading'
import P1 from './components/P1'
import P2 from './components/p2'
function App() {
  const [count, setCount] = useState(0)

  return <div className='text-center'>
    <Heading></Heading>
    <P1></P1>
    <P2></P2>
  </div>
}

export default App
