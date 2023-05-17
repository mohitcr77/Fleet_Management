import { configureStore } from '@reduxjs/toolkit'
import customReducer from './customSlice.js'
import modalReducer from './modalSlice.js'
import dataReducer from './dataSlice.js'
export const store = configureStore({
  reducer: {
    view: customReducer,
    modalVisible : modalReducer,
    dataShow: dataReducer,
  },
})