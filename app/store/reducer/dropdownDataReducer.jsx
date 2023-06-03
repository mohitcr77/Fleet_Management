import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  clientList: [],
  machineTypeList: [],
  driverList: [],
  supervisorList: [],
};

export const dropdownDataSlice = createSlice({
  name: "dropdownData",
  initialState,
  reducers: {
    addClientList: (state, action) => {
      state.clientList = action.payload;
    },
    addMachineTypeList: (state, action) => {
      state.machineTypeList = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addClientList, addMachineTypeList } = dropdownDataSlice.actions;

export default dropdownDataSlice.reducer;
