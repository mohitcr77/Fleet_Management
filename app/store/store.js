import { configureStore } from "@reduxjs/toolkit";
import dropdownDataReducer from "./reducer/dropdownDataReducer.jsx";
import fullDktFormDataReducer from "./reducer/fullDktFormDataReducer.jsx";
import inputFormReducer from "./reducer/inputFormReducer.jsx";
import creditNoteFormReducer from "./reducer/creditNoteFormReducer.js";
import authReducer from "./reducer/authReducer.jsx";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    creditNoteFormData: creditNoteFormReducer,
    dropDownData: dropdownDataReducer,
    fullDktFromData: fullDktFormDataReducer,
    inputForm: inputFormReducer,
  },
});
