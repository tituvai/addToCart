import { configureStore } from '@reduxjs/toolkit'
import  addCart  from './features/cart/addToCart'
import  wishCart  from './features/wishCart/wishSlice'
import  productDeteliseSlice  from './features/productDetelis/productDeteliseSlice'


export default configureStore({
  reducer: {
    cart : addCart,
    wishCart: wishCart,
    productDetelis: productDeteliseSlice
  },
})