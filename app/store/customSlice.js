import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react";

const initialState = {
    name: "",
    rego_rate: "",
    milage_threshold: "",
    vehicle_type: "",
    checkSheet_type: "",
    plate_no: "",
    year: "",
    make: "",
    model: "",
    vin_no: "",
    engine_no: "",
    model_no: "",
    serial_no: "",
    fuel_type: "",
    transmission_type: "",
    cc_rating: "",
    current_kMS: "",
    service_due_kMS: "",
    wOF_cOF_due_date: "",
    registration_due_date: "",
    fire_extinguisher_due_date: "",
    first_aid_kit_due_dates: "",
  };
  
  export const customSlice = createSlice({
    name: 'view ',
    initialState,
    reducers: {
      addData: (state, action) => {
        state.value = action.payload
      },
      deleteData: (state, action) => {
        state.value = action.payload
      }
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { addData } = customSlice.actions
  
  export default customSlice.reducer
