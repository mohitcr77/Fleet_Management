import React from "react";
import { useState } from "react";
import dataType from "../../constants/dataType";
import ParentContainer from "../../components/ParentContainer";
import endpoint from "../../service/endpoint";
import screenNames from "../../constants/screenNames";
import AdminListRendered from "../../components/AdminListRendered";
import useFetch from "../../hooks/useFetch";
import getNestedData from "../../helpers/getNestedData";

const Tax = () => {
  const [listData, setListData] = useState([]);

  const { refresh, loading } = useFetch(endpoint.tax, handleTaxSuccess);

  function handleTaxSuccess(d) {
    let arr = [];
    d.data.data.forEach((item) => {
      let a = [];
      form.forEach((i) => a.push({ ...i, value: item[i.key] }));
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
      name: "Tax Name",
      key: "tax_name",
      type: dataType.text,
      value: null,
      card: true,
      mapKey: ["tax_name"],
    },
    {
      name: "Tax percentage",
      key: "tax_percentage",
      type: dataType.text,
      value: null,
      card: true,
      mapKey: ["tax_percentage"],
    },
  ];
  const formProps = {
    backScreen: screenNames.TAX,
    endpoint: endpoint.tax,
    form,
    title: "Add Tax",
  };

  return (
    <ParentContainer
      useScroll={false}
      title="Tax"
      addScreen={{ name: screenNames.FORM_SCREEN, params: formProps }}
    >
      <AdminListRendered
        data={listData}
        onRefresh={refresh}
        loading={loading}
        backScreen={screenNames.TAX}
        listTitle={"Tax Details"}
        editTitle={"Edit Tax"}
        endpoint={endpoint.tax}
      />
    </ParentContainer>
  );
};

export default Tax;
