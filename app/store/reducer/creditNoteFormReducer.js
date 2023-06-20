import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  form: {
    add_item: [{rego_id: "",job_no:"", qty:"", rate:"", tax_id:"", amount: ""}],
    client_id: "",
    credit_note_no: "",
    reference_no: "",
    staff_id: "",
    subject: "",
    customer_notes: "",
    total: "",
    terms: "",
    shipping: "",
    adjustment: "",
    invoice: "",
    discount: "",
    paid: "",
  },
  list: [],
};

export const creditNoteFormData = createSlice({
  name: "creditNoteFormData",
  initialState,
  reducers: {
    addCreditNoteKeyValue: (state, action) => {
      const { key, value } = action.payload;
      state.form[key] = value;
    },
    addItemInCreditNote: (state, action) => {
      state.form.add_item.push({rego_id: "",job_no:"", qty:"", rate:"", tax_id:"", amount: ""});
    },
    addDataInItemUsingKey: (state, action) => {
      const { e, i, k } = action.payload;
      state.form.add_item[i][k] = e;
    },
    removeCreditNoteItem: (state, action) => {
      if (state.form.add_item.length === 1) {
        state.form.add_item = initialState.details;
      } else {
        state.form.add_item.splice(action.payload, 1);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addCreditNoteKeyValue,
  addItemInCreditNote,
  addDataInItemUsingKey,
  removeCreditNoteItem,
} = creditNoteFormData.actions;

export default creditNoteFormData.reducer;
