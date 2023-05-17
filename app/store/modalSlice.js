import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    open: (state) => {
      state.value = true;
    },
    close: (state) => {
      state.value = false;
    },
  },
})

// Action creators are generated for each case reducer function
export const { open, close } = modalSlice.actions
export const selectVisible = (state) => state.modalVisible.value
export default modalSlice.reducer