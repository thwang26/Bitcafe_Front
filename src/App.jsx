import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import OrderPage from './pages/order/OrderPage'
import CartPage from './pages/cart/CartPage'
import OthersPage from './pages/others/OthersPage'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/order' element={<OrderPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/others' element={<OthersPage />} />
      </Routes>
    </div>

  )
}

export default App
