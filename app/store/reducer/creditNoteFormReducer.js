import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  form: {
    add_item: [],
    id: "",
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
      //state.form.add_item = { ...state.form.add_item,  ...action.payload };
      const { value, i } = action.payload
      state.form.add_item[i] = { ...state.form.add_item[i], ...value }
      //console.log(state.form.add_item, "store value");
    },
    addItemInCreditNote: (state, action) => {
      state.form.add_item.push({job:"",rego_id: "",job_no:"", qty:"", rate:"", tax_id:"", amount: ""});
    },
    addDataInItemUsingKey: (state, action) => {
      const { e, i, k } = action.payload;
      state.form.add_item[i][k] = e;
    },
    removeCreditNoteItem: (state, action) => {
        state.form.add_item.splice(action.payload, 1);
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
