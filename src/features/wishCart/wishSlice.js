import { createSlice } from '@reduxjs/toolkit'

export const wishSlice = createSlice({
  name: 'wishCart',
  initialState: {
    value: [],
  },
  reducers: {
    wishCart: (state, action)=>{
     state.value.push({...action.payload})
    },
     // remove btn Start 

   removeFromWishCart: (state, action) => {
      state.value = state.value.filter(item => item.title !== action.payload);
    },
  },
  
})

export const {wishCart, removeFromWishCart} = wishSlice.actions

export default wishSlice.reducer