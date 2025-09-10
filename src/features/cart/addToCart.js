import { createSlice } from '@reduxjs/toolkit'

export const addToCart = createSlice({
  name: 'addToCart',
  initialState: {
    value: [],
    countCart:0,
  },
  reducers: {
    addtocart: (state, action) => {
        let alldata= state.value.find(item=>item.title===action.payload.title)
        if(alldata){
            alldata.qunatity +=1;
        }else{
            state.value.push({...action.payload, qunatity:1})
        }
    },

    // Cart Count Part 

    cartCount: (state, action) => {
      state.value.push(action.payload); 
      state.cartCount += 1; 
    },
    resetCartCount: (state) => {
      state.cartCount = 0;
    },
  
  },
})

export const { addtocart, cartCount, resetCartCount } = addToCart.actions

export default addToCart.reducer