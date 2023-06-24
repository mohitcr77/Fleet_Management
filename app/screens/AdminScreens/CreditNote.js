import React from "react";
import { useState } from "react";
import dataType from "../../constants/dataType";
import ParentContainer from "../../components/ParentContainer";
import endpoint from "../../service/endpoint";
import screenNames from "../../constants/screenNames";
import AdminListRendered from "../../components/AdminListRendered";
import useGet from "./../../hooks/useGet";
import getNestedData from "../../helpers/getNestedData";
import { DROPDOWN_LIST } from "../../constants/entity";

const CreditNote = () => {
  const form = [
    {
      name: "Id#",
      key: "id",
      type: dataType.number,
      value: null,
      card: true,
      mapKey: ["id"],
    },
    {
      name: "Client",
      key: "client_id",
      type: dataType.dropdown,
      value: null,
      card: true,
      data: DROPDOWN_LIST.CLIENTS,
      mapKey: ["client_id"],
    },
    {
      name: "Credit Note no",
      key: "credit_note_no",
      type: dataType.number,
      value: null,
      card: true,
      mapKey: ["credit_note_no"],
    },
    {
      name: "Reference no",
      key: "reference_no",
      type: dataType.number,
      value: null,
      card: true,
      mapKey: ["reference_no"],
    },
    {
      name: "Staff",
      key: "staff_id",
      type: dataType.dropdown,
      data: DROPDOWN_LIST.STAFF,
      value: null,
      card: true,
      mapKey: ["staff_id"],
    },
    {
      name: "Subject",
      key: "subject",
      type: dataType.text,
      value: null,
      card: true,
      mapKey: ["subject"],
    },
    {
      name: "Customer Notes",
      key: "customer_notes",
      type: dataType.text,
      value: null,
      
      mapKey: ["customer_notes"],
    },
    {
      name: "Total",
      key: "total",
      type: dataType.text,
      value: null,
      
      mapKey: ["total"],
    },
    {
      name: "Terms",
      key: "terms",
      type: dataType.text,
      value: null,
      
      mapKey: ["terms"],
    },
    {
      name: "Shipping",
      key: "shipping",
      type: dataType.text,
      value: null,
      
      mapKey: ["shipping"],
    },
    {
      name: "Adjustment",
      key: "adjustment",
      type: dataType.text,
      value: null,
      
      mapKey: ["adjustment"],
    },
    {
      name: "Invoice",
      key: "invoice",
      type: dataType.text,
      value: null,
      
      mapKey: ["invoice"],
    },
    {
      name: "Discount",
      key: "discount",
      type: dataType.text,
      value: null,
      
      mapKey: ["discount"],
    },
    {
      name: "Paid",
      key: "paid",
      type: dataType.text,
      value: null,
      
      mapKey: ["paid"],
    },
    {
      name: "Add Item",
      key: "add_item",
      type: dataType.creditNoteForm,
      value: null,
      
      mapKey: ["add_item"],
    },
  ];
  const [listData, setListData] = useState([]);

  const { refresh, loading } = useGet(endpoint.creditnote, handleGetCreditNoteSuccess);

  function handleGetCreditNoteSuccess(d) {
    let arr = [];
    d.data.data.forEach((item) => {
      let a = [];
      form.forEach((i) => {
        const value = getNestedData(item, i.mapKey);
        a.push({ ...i, value });
      });
      arr.push(a);
    });
    setListData(arr);
  }

  const formProps = {
    backScreen: screenNames.CREDIT_NOTE,
    endpoint: endpoint.creditnote,
    form,
    title: "Add Credit Note",
  };
  return (
    <ParentContainer
      useScroll={false}
      title="Credit Note"
      addScreen={{ name: screenNames.ESTIMATE_CREDIT_NOTE_FORM, params: formProps }}
    >
      <AdminListRendered
        data={listData}
        onRefresh={refresh}
        loading={loading}
        backScreen={screenNames.CREDIT_NOTE}
        listTitle={"Credit Note Details"}
        editTitle={"Edit Credit Note"}
        endpoint={endpoint.rego}
      />
    </ParentContainer>
  );
};

export default CreditNote;
