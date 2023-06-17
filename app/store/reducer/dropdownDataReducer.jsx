import { createSlice } from "@reduxjs/toolkit";
import { DROPDOWN_LIST } from "../../constants/entity";

const initialState = {
  [DROPDOWN_LIST.CLIENTS]: [],
  [DROPDOWN_LIST.REGOS]: [],
  [DROPDOWN_LIST.DRIVERS]: [],
  [DROPDOWN_LIST.SUPERVISOR]: [],
  [DROPDOWN_LIST.MECHANICS]: [],
};

export const dropdownDataSlice = createSlice({
  name: "dropdownData",
  initialState,
  reducers: {
    addListItem: (state, action) => {
      const { name, data } = action.payload;
      state[name] = data;
    },
    addClientList: (state, action) => {
      state.clientList = action.payload;
    },
    addMachineTypeList: (state, action) => {
      state.machineTypeList = action.payload;
    },
    addDriverList: (state, action) => {
      state.driverList = action.payload;
    },
    addSupervisorList: (state, action) => {
      state.supervisorList = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addClientList,
  addMachineTypeList,
  addDriverList,
  addSupervisorList,
  addListItem,
} = dropdownDataSlice.actions;

export default dropdownDataSlice.reducer;
