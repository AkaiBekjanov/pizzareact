import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    category:"all"
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
     setCategory:(state,action)=>{
         state.category=action.payload;
     }
  },
})

// Action creators are generated for each case reducer function
export const { setCategory } = filterSlice.actions

export default filterSlice.reducer