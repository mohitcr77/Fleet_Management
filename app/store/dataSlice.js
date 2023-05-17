import { createSlice } from '@reduxjs/toolkit'

const initialState = { Rego: []};

export const dataSlice = createSlice({
  name: 'dataShow',
  initialState,
  reducers: {
    setData: (state, action) => {
        state.value= [...state.value, { text: action.payload,  id: Math.random().toString()},]
    },
    deleteData: (state, action) =>{
      state.value = state.value.filter((data) => 
      data.id !== action.payload
      );
    },
    updateDataSlice: (state, action) => {
      const target = state.value[0].text;
      const source = action.payload;
      const returned  = Object.assign(target,source)
      // console.log(target)
       console.log(returned);
  },
  },
})

export const { setData, deleteData, updateDataSlice } = dataSlice.actions
export const selectstate = (state) => state.dataShow.value
export default dataSlice.reducer