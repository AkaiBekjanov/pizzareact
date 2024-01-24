import { configureStore } from '@reduxjs/toolkit'
import goodsReducer from './slices/goods/goodsSlice'
import  filterSlice  from './slices/filter';

export const store = configureStore({
  reducer: {
    goodsReducer,
    filterSlice
  },
})