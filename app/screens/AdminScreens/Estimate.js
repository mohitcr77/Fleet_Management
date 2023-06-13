import React from "react";
import { useState } from "react";
import dataType from "../../constants/dataType";
import ParentContainer from "../../components/ParentContainer";
import endpoint from "../../service/endpoint";
import screenNames from "../../constants/screenNames";
import AdminListRendered from "../../components/AdminListRendered";
import useGet from "./../../hooks/useGet";

const Estimate = () => {
  const [listData, setListData] = useState([]);

  const { refresh, loading } = useGet(endpoint.estimate, handleEstimateSuccess);

  function handleEstimateSuccess(d) {
    let arr = [];
    d.forEach((item) => {
      const a = [
        {
          name: "Client ID",
          value: item?.client_id,
        },
        {
          name: "Estimate number",
          value: item?.estimate_no,
        },
        {
          name: "Reference Number",
          value: JSON.stringify(item?.reference_no),
        },
        {
          name: "Estimate Date",
          value: item?.estimate_date,
        },
        {
          name: "Expire Date",
          value: item?.expire_date,
        },
        {
          name: "Subject",
          value: item?.subject,
        },
        {
          name: "Customer Notes",
          value: JSON.stringify(item?.customer_notes),
        },
        {
          name: "Subtotal",
          value: item?.subtotal,
        },
        {
          name: "Total",
          value: item?.total,
        },
        {
          name: "paid",
          value: item?.paid,
        },
      ];
      arr.push(a);
    });
    setListData(arr);
  }
  const form = [
    {
      name: "Client ID",
      key: "client_id",
      type: dataType.text,
    },
    {
      name: "Estimate number",
      key: "estimate_no",
      type: dataType.number,
    },
    {
      name: "Reference Number",
      key: "reference_no",
      type: dataType.number,
    },
    {
      name: "Estimate Date",
      key: "estimate_date",
      type: dataType.date,
    },
    {
      name: "Expire Date",
      key: "expire_date",
      type: dataType.date,
    },
    {
      name: "Subject",
      key: "subject",
      type: dataType.text,
    },
    {
      name: "Customer Notes",
      key: "customer_notes",
      type: dataType.text,
    },
    {
      name: "Subtotal",
      key: "subtotal",
      type: dataType.number,
    },
    {
      name: "Total",
      key: "total",
      type: dataType.number,
    },
    {
      name: "paid",
      key: "paid",
      type: dataType.number,
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
      addScreen={[screenNames.FORM_SCREEN, formProps]}
    >
      <AdminListRendered
        data={listData}
        onRefresh={refresh}
        loading={loading}
      />
    </ParentContainer>
  );
};

export default Estimate;

