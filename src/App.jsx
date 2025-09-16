
import { Route, Routes } from 'react-router-dom'
import './App.css'
import RootLayout from './components/layouts/RootLayout'
import Home from './components/pages/Home'
import Cart from './components/pages/Cart'
import ProductDitels from './components/pages/ProductDitels'

function App() {
  

  return (
   <>
    <Routes>
      <Route path='/' element={<RootLayout/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='cart' element={<Cart/>}/>
      <Route path='productDitels' element={<ProductDitels/>}/>
      </Route>
    </Routes>
   </>
  )
}

export default App
