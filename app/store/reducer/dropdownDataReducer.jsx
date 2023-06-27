import { createSlice } from "@reduxjs/toolkit";
import { DROPDOWN_LIST } from "../../constants/entity";

const initialState = {
  [DROPDOWN_LIST.BREAK]: [
    { label: "0", value: "1" },
    { label: "0.5", value: "2" },
    { label: "1", value: "3" },
    { label: "1.5", value: "4" },
    { label: "2", value: "5" },
    { label: "2.5", value: "6" },
    { label: "5", value: "7" },
  ],
  [DROPDOWN_LIST.CLIENTS]: [{ label: "", value: "" }],
  [DROPDOWN_LIST.COLORS]: [{ label: "", value: "" }],
  [DROPDOWN_LIST.DAYS]: [
    { label: "Monday", value: "Monday" },
    { label: "Tuesday", value: "Tuesday" },
    { label: "Wednesday", value: "Wednesday" },
    { label: "Thursday", value: "Thursday" },
    { label: "Friday", value: "Friday" },
    { label: "Saturday", value: "Saturday" },
    { label: "Sunday", value: "Sunday" },
  ],
  [DROPDOWN_LIST.DRIVERS]: [{ label: "", value: "" }],
  [DROPDOWN_LIST.JOBS_BY_CLIENT]: [{ label: "", value: "" }],
  [DROPDOWN_LIST.MECHANICS]: [{ label: "", value: "" }],
  [DROPDOWN_LIST.REGOS]: [{ label: "", value: "" }],
  [DROPDOWN_LIST.STAFF]: [{ label: "", value: "" }],
  [DROPDOWN_LIST.SUPERVISOR]: [{ label: "", value: "" }],
};

export const dropdownDataSlice = createSlice({
  name: "dropdownData",
  initialState,
  reducers: {
    addListItem: (state, action) => {
      const { name, data } = action.payload;
      state[name] = data;
    },
  },
});

export const { addListItem } = dropdownDataSlice.actions;

export default dropdownDataSlice.reducer;
