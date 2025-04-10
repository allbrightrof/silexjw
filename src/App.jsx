import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './Header/Navbar'
import Hero from './Hero/Hero.jsx' 
import Product from './Hero/Product.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Hero/>
    </>
  )
}

export default App
