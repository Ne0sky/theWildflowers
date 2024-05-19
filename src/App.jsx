import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route } from 'react-router-dom'
import Cart from './pages/Cart'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Checkout from './pages/Checkout'
import Product from './pages/Product'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
    <Navbar />
    <Routes >
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path='/checkout' element={<Checkout />} /> 
      <Route path='/plant/:id' element={<Product />} />
    </Routes>
    <Footer />
      
    </div>
  )
}

export default App
