import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  clientList: [],
  machineTypeList: [],
  driverList: [],
  supervisorList: [],
  mechanicList: [],
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
    addDriverList: (state, action) => {
      state.driverList = action.payload;
    },
    addSupervisorList: (state, action) => {r
      state.supervisorList =  action.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const { addClientList, addMachineTypeList, addDriverList, addSupervisorList } = dropdownDataSlice.actions;

export default dropdownDataSlice.reducer;
