
import { Route, Routes } from 'react-router-dom'
import './App.css'
import RootLayout from './components/layouts/RootLayout'
import Home from './components/pages/Home'
import Cart from './components/pages/Cart'

function App() {
  

  return (
   <>
    <Routes>
      <Route path='/' element={<RootLayout/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='cart' element={<Cart/>}/>
      </Route>
    </Routes>
   </>
  )
}

export default App
