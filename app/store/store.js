import { configureStore } from "@reduxjs/toolkit";
import dropdownDataReducer from "./reducer/dropdownDataReducer.jsx";
import fullDktFormDataReducer from "./reducer/fullDktFormDataReducer.jsx";
import inputFormReducer from "./reducer/inputFormReducer.jsx";
import creditNoteFormReducer from "./reducer/creditNoteFormReducer.js";

export const store = configureStore({
  reducer: {
    dropDownData: dropdownDataReducer,
    fullDktFromData: fullDktFormDataReducer,
    inputForm: inputFormReducer,
    creditNoteFormData: creditNoteFormReducer
  },
});
