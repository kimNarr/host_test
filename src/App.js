import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Product from './Product'

function App() {
    return (
      <div>
          <h1><Link to="/">홈</Link></h1>
          <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/product">Product</Link></li>
          </ul>

          <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/about' element={<About />}/>
              <Route path='/product' element={<Product />}/>
          </Routes>
          <img src='/img/b1.png' />
          <img src='/img/b1.png' />
      </div>
    )
}

export default App
