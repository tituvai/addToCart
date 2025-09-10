import { configureStore } from '@reduxjs/toolkit'
import  addtocart  from './features/cart/addToCart'

export default configureStore({
  reducer: {
    cart : addtocart
  },
})