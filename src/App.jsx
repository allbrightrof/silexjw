import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './Header/Navbar'
import Hero from './Hero/Hero.jsx' 
import Product from './productsec/Product.jsx'
import Category from './category/Category.jsx'
import Pcard from './Pcard/Pcard.jsx'
import Qcard from './Qcard/Qcard.jsx'
import Moreproduct from './Moreproduct/Moreproduct.jsx'
import Trend from './Trends/Trend.jsx'
import Trendupdate from './Trendupdate/Trendupdate.jsx'
import Footer from './footer/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Hero/>
    <Product/>
    <Category/>
    <Pcard/>
    <Qcard/>
    <Moreproduct/>
    <Trend/>
    <Trendupdate/>
    <Footer/>
    </>
  )
}

export default App
