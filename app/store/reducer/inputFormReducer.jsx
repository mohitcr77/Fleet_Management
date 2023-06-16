import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  form: [],
};

export const inputForm = createSlice({
  name: "inputForm",
  initialState,
  reducers: {
    addInputForm: (state, action) => {
      console.log(action.payload.length, "0000000000000");
      state.form = [...action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addInputForm } = inputForm.actions;

export default inputForm.reducer;
