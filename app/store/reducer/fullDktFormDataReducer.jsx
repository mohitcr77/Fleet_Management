import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  form: {
    details: [{ detail: "", material_dkt: "" }],
    sign: null,
    job_no_id: "",
    client_id: "",
    date: "",
    start: "",
    finish: "",
    job_no: "",
    location: "",
    machine_id: "",
    machine_type: "",
    mail_sent: "",
    operator: "",
    total: "",
    travel_time: "",
    cc_phone: "",
    supervisor_id: "",
    send_supervisor: "",
  },
  list: [],
};

export const fullDktFromData = createSlice({
  name: "fullDktFormData",
  initialState,
  reducers: {
    addFullDktKeyValue: (state, action) => {
      const { key, value } = action.payload;
      state.form[key] = value;
    },
    addDetailsInFormDkt: (state, action) => {
      state.form.details.push({ detail: "", material_dkt: "" });
    },
    addDetaInDetailUsingKey: (state, action) => {
      const { e, i, k } = action.payload;
      state.form.details[i][k] = e;
    },
    removeFormDktDetail: (state, action) => {
      if (state.details.length === 1) {
        state.form.details = initialState.details;
      } else {
        state.form.details.splice(action.payload, 1);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addFullDktKeyValue,
  addDetailsInFormDkt,
  addDetaInDetailUsingKey,
  removeFormDktDetail,
} = fullDktFromData.actions;

export default fullDktFromData.reducer;
