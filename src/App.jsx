import './App.css'
import { Cart } from './pages/cart'
import { Home } from './pages/home'

import { Routes,Route,Link } from 'react-router-dom'
import { ProductDetail } from './pages/productDtail'


function App() {
 
 
  return (
    <>
    <Link to="/"></Link>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path="/productds/:id" element={<ProductDetail/>}/>
    </Routes>
    
    </> 
  )
}

export default App
