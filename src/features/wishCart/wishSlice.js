import { createSlice } from '@reduxjs/toolkit'

export const wishSlice = createSlice({
  name: 'wishCart',
  initialState: {
    value: [],
  },
  reducers: {
    wishCart: (state, action)=>{
     state.value.push({...action.payload})
    }
  },
})

export const {wishCart} = wishSlice.actions

export default wishSlice.reducer