import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import OrderPage from './pages/order/OrderPage'
import CartPage from './pages/cart/CartPage'
import OthersPage from './pages/others/OthersPage'
import MenuPage from './pages/order/MenuPage'
import MenuDetailPage from './pages/order/MenuDetailPage'
import BottomNavigation from './components/BottomNavigation'
import { SpinnerProvider } from './utils/SpinnerContext'
import Spinner from './components/Spinner'

const App = () => {
  return (
    <SpinnerProvider>
      <Spinner/>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/order' element={<OrderPage />} />
        <Route path='/order/menu/:categoryId' element={<MenuPage />} />
        <Route path='/order/menu/detail/:menuId' element={<MenuDetailPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/others' element={<OthersPage />} />
      </Routes>
      <BottomNavigation/>
    </SpinnerProvider>
  )
}

export default App
