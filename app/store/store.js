import { configureStore } from "@reduxjs/toolkit";
import customReducer from "./customSlice.js";
import modalReducer from "./modalSlice.js";
import dataReducer from "./dataSlice.js";
import dropdownDataReducer from "./reducer/dropdownDataReducer.jsx";
import fullDktFormDataReducer from "./reducer/fullDktFormDataReducer.jsx";
import inputFormReducer from "./reducer/inputFormReducer.jsx";

export const store = configureStore({
  reducer: {
    view: customReducer,
    modalVisible: modalReducer,
    dataShow: dataReducer,
    dropDownData: dropdownDataReducer,
    fullDktFromData: fullDktFormDataReducer,
    inputForm: inputFormReducer,
  },
});
