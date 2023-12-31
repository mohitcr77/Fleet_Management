import React from "react";
import { useState } from "react";

import AdminListRendered from "../../components/AdminListRendered";
import dataType from "../../constants/dataType";
import { mechanicEndpoints } from "../../service/endpoint";
import getNestedData from "../../helpers/getNestedData";
import ParentContainer from "../../components/ParentContainer";
import screenNames from "../../constants/screenNames";
import useFetch from "../../hooks/useFetch";
import { DROPDOWN_LIST } from "../../constants/entity";

const MechanicDataScreen = () => {
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
      name: "Rego",
      key: "rego",
      type: dataType.dropdown,
      data: DROPDOWN_LIST.REGOS,
      mapKey: ["rego"],
      value: null,
      card: true,
    },
    {
      name: "Date",
      key: "date",
      type: dataType.date,
      mapKey: ["date"],
      value: null,
      card: true,
    },
    {
      name: "Day",
      key: "day",
      type: dataType.dropdown,
      data: DROPDOWN_LIST.DAYS,
      mapKey: ["day"],
      value: null,
      card: true,
    },
    {
      name: "Total Amount",
      key: "total_amount",
      type: dataType.number,
      mapKey: ["total_amount"],
      value: null,
      card: true,
    },
    {
      name: "Mileage",
      key: "mileage",
      type: dataType.number,
      mapKey: ["mileage"],
      value: null,
      card: true,
    },
    {
      name: "Comment",
      key: "comment",
      type: dataType.text,
      mapKey: ["comment"],
      value: null,
      card: true,
    },
    {
      name: "Attachment",
      key: "attachment",
      type: dataType.image,
      mapKey: ["attachment"],
      value: null,
      card: true,
    },
  ];
  const [listData, setListData] = useState([]);

  const { refresh, loading } = useFetch({
    endpoint: mechanicEndpoints.mechanic_entries,
    onSuccess: handleGetMechanicSuccess,
  });

  function handleGetMechanicSuccess(d) {
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
    backScreen: screenNames.MECHANIC_DATA_SCREEN,
    endpoint: mechanicEndpoints.mechanic_entries,
    form,
    title: "Mechanic Form",
  };
  return (
    <ParentContainer
      useScroll={false}
      title="Mechanic Data"
      addScreen={{ name: screenNames.FORM_SCREEN, params: formProps }}
    >
      <AdminListRendered
        data={listData}
        onRefresh={refresh}
        loading={!listData.length}
        backScreen={screenNames.MECHANIC_DATA_SCREEN}
        listTitle={"Mechanic Details"}
        editTitle={"Edit Mechanic"}
        endpoint={mechanicEndpoints.mechanic_entries}
      />
    </ParentContainer>
  );
};

export default MechanicDataScreen;
