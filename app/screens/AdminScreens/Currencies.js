import React from "react";
import { useState } from "react";
import dataType from "../../constants/dataType";
import ParentContainer from "../../components/ParentContainer";
import { endpoints } from "../../service/endpoint";
import screenNames from "../../constants/screenNames";
import AdminListRendered from "../../components/AdminListRendered";
import useFetch from "../../hooks/useFetch";
import getNestedData from "../../helpers/getNestedData";

const Currencies = () => {
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
      name: "Name",
      key: "name",
      type: dataType.text,
      value: null,
      card: true,
      mapKey: ["name"],
    },
    {
      name: "code",
      key: "code",
      type: dataType.text,
      value: null,
      card: true,
      mapKey: ["code"],
    },
    {
      name: "Symbol",
      key: "symbol",
      type: dataType.text,
      value: null,
      card: true,
      mapKey: ["symbol"],
    },
  ];

  const [listData, setListData] = useState([]);

  const { refresh, loading } = useFetch(
    endpoint.currency,
    handleCurrencySuccess
  );

  function handleCurrencySuccess(d) {
    let arr = [];
    d.data.data.forEach((item) => {
      let a = [];
      form.forEach((i) => a.push({ ...i, value: item[i.key] }));
      arr.push(a);
    });
    setListData(arr);
  }

  const formProps = {
    backScreen: screenNames.CURRENCY,
    endpoint: endpoints.currency,
    form,
    title: "Add Currency",
  };
  return (
    <ParentContainer
      useScroll={false}
      title="Currency"
      addScreen={{ name: screenNames.FORM_SCREEN, params: formProps }}
    >
      <AdminListRendered
        data={listData}
        onRefresh={refresh}
        loading={loading}
        backScreen={screenNames.CURRENCY}
        listTitle={"Currency Details"}
        editTitle={"Edit Currency"}
        endpoint={endpoints.currency}
      />
    </ParentContainer>
  );
};

export default Currencies;
