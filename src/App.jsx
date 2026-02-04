import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/navbar'
import Footer from './components/Footer/Footer'

import Shop from './pages/Shop'
import ShopCategory from './pages/ShopCategory'
import Product from './pages/Product'
import Cart from './pages/Cart'
import LoginSignup from './pages/LoginSignup'

import ShopContextProvider from './context/ShopContext'

function App() {
  return (
    <ShopContextProvider>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory banner="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=400&fit=crop" category="men" />} />
          <Route path='/womens' element={<ShopCategory banner="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=400&fit=crop" category="women" />} />
          <Route path='/kids' element={<ShopCategory banner="https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=800&h=400&fit=crop" category="kids" />} />
          <Route path='/product/:productId' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>

        <Footer />
      </BrowserRouter> 
    </ShopContextProvider> 
  )
}

export default App