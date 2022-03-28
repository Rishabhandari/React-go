import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../Feature/counterSlice'
import storeName from '../Feature/counterSlice'
export const store = configureStore({
  reducer: {
    storeCounterName: counterReducer,
    storeName :  storeName
  },
})