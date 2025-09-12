import { createSlice } from '@reduxjs/toolkit'

export const addToCart = createSlice({
  name: 'addCart',
  initialState: {
    value: [],
    
  },
  reducers: {
    addCart: (state, action) => {
        let alldata= state.value.find(item=>item.title===action.payload.title)
        if(alldata){
            alldata.quantity +=1;
            // state.totalPrice += action.payload.price;
        }else{
            state.value.push({...action.payload, quantity:1})
            // state.totalPrice += action.payload.price;
        }
    },

    cartIncement:(state, action)=>{
      state.value.map((item)=>{
        if(item.title === action.payload.title){
          item.quantity +=1;
          // state.totalPrice += action.payload.price;
        }
      })
    },
     cartDecement:(state, action)=>{
      state.value.map((item)=>{
        if(item.title === action.payload.title && item.quantity >1){
          item.quantity -=1;
          // state.totalPrice -= action.payload.price;
        }
      })
    },

    // Cart Count Part 

   
  
  },
})

export const { addCart, cartIncement, cartDecement} = addToCart.actions

export default addToCart.reducer