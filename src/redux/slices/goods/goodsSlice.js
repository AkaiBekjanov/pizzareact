import { createSlice } from '@reduxjs/toolkit'
import { useEffect } from 'react'

const initialState = {
  cart:[]
}

export const goodsSlice = createSlice({
  name: 'goods',
  initialState,
  reducers: {
     update:(state,action)=>{
         state.cart=action.payload;
     }
  },
})

// Action creators are generated for each case reducer function
export const { update } = goodsSlice.actions

export default goodsSlice.reducer