import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  form: [],
};

export const inputForm = createSlice({
  name: "inputForm",
  initialState,
  reducers: {
    addInputForm: (state, action) => {
      state.form = [...action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addInputForm } = inputForm.actions;

export default inputForm.reducer;
