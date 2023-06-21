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

const Estimate = () => {
  const [listData, setListData] = useState([]);

  const { refresh, loading } = useGet(endpoint.estimate, handleEstimateSuccess);

  function handleEstimateSuccess(d) {
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
      name: "Client ID",
      key: "client_id",
      type: dataType.dropdown,
      data: DROPDOWN_LIST.CLIENTS,
      value: null,
      card: true,
      mapKey: ["client_id"],
    },
    {
      name: "Estimate number",
      key: "estimate_no",
      type: dataType.number,
      value: null,
      card: true,
      mapKey: ["estimate_no"],
    },
    {
      name: "Reference Number",
      key: "reference_no",
      type: dataType.number,
      value: null,
      card: true,
      mapKey: ["reference_no"],
    },
    {
      name: "Estimate Date",
      key: "estimate_date",
      type: dataType.currentDate,
      value: null,
      mapKey: ["estimate_date"],
    },
    {
      name: "Expire Date",
      key: "expire_date",
      type: dataType.expireDate,
      value: null,
      mapKey: ["repair_Date"],
    },
    {
      name: "Subject",
      key: "subject",
      type: dataType.text,
      value: null,
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
      name: "paid",
      key: "paid",
      type: dataType.number,
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
    {
      name: "Subtotal",
      key: "subtotal",
      type: dataType.number,
      value: null,
      mapKey: ["subtotal"],
    },
    {
      name: "Total tax",
      key: "total_tax",
      type: dataType.number,
      value: null,
      mapKey: ["total_tax"],
    },
    {
      name: "Total",
      key: "total",
      type: dataType.number,
      value: null,
      mapKey: ["total"],
    },
  ];
  const formProps = {
    backScreen: screenNames.ESTIMATE,
    endpoint: endpoint.estimate,
    form,
    title: "Add Estimate",
  };
  
  return (
    <ParentContainer
      useScroll={false}
      title="Estimate"
      addScreen={{ name:screenNames.FORM_SCREEN,params: formProps}}
    >
      <AdminListRendered
        data={listData}
        onRefresh={refresh}
        loading={loading}
        backScreen={screenNames.REGOS}
        listTitle={"Rego Details"}
        editTitle={"Edit Rego"}
        endpoint={endpoint.rego}
      />
    </ParentContainer>
  );
};

export default Estimate;

