import { createSlice } from '@reduxjs/toolkit'

export const productDeteliseSlice= createSlice({
  name: 'productDetelis',
  initialState: {
    value: null,

  },
  reducers: {
    productDetelis: (state, action)=>{
      state.value = {...action.payload}
    },

    //   resetProducts: (state) => {
    //   state.value = null; 
    // },


  },
  
})

export const {productDetelis} = productDeteliseSlice.actions

export default productDeteliseSlice.reducer