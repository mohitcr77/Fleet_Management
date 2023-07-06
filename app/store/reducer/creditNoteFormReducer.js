import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  form: {
    add_item: [],
    id: "",
    client_id: "",
    credit_note_no: "",
    estimate_no: "",
    reference_no: "",
    estimate_date: "",
    expire_date: "",
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
      //state.form.add_item = { ...state.form.add_item,  ...action.payload };
      const { value, i } = action.payload;
      state.form.add_item[i] = { ...state.form.add_item[i], ...value };
    },
    addItemInCreditNote: (state, action) => {
      state.form.add_item.push({
        job: "",
        rego_id: "",
        job_no: "",
        qty: "",
        rate: "",
        tax_id: "",
        amount: "",
      });
    },
    addDataInItemUsingKey: (state, action) => {
      const { value, i, k } = action.payload;
      state.form.add_item[i][k] = value;
    },
    removeCreditNoteItem: (state, action) => {
      state.form.add_item.splice(action.payload, 1);
    },
    setItemToInitialState: (state, action) => {
      state.form = initialState.form;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addCreditNoteKeyValue,
  addItemInCreditNote,
  addDataInItemUsingKey,
  removeCreditNoteItem,
  setItemToInitialState,
} = creditNoteFormData.actions;

export default creditNoteFormData.reducer;
