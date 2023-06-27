import React from "react";
import { useState } from "react";
import dataType from "../../constants/dataType";
import ParentContainer from "../../components/ParentContainer";
import { endpoints } from "../../service/endpoint";
import screenNames from "../../constants/screenNames";
import AdminListRendered from "../../components/AdminListRendered";
import useFetch from "../../hooks/useFetch";
import getNestedData from "../../helpers/getNestedData";

const Client = () => {
  const [listData, setListData] = useState([]);

  const { refresh, loading } = useFetch(endpoints.clients, handleClientSuccess);

  function handleClientSuccess(d) {
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
      name: "Name",
      key: "name",
      type: dataType.text,
      value: null,
      card: true,
      mapKey: ["user", "name"],
    },
    {
      name: "Email",
      key: "email",
      type: dataType.text,
      value: null,
      card: true,
      mapKey: ["user", "email"],
    },
    {
      name: "Password",
      key: "password",
      type: dataType.password,
      value: null,
      card: true,
      mapKey: [""],
    },
    {
      name: "Re-enter Password",
      key: "repassword",
      type: dataType.password,
      value: null,
      mapKey: [""],
    },
    {
      name: "Color Code",
      key: "color_code",
      type: dataType.color,
      value: null,
      mapKey: ["color_code"],
    },
    {
      name: "Client Rate",
      key: "weightage",
      type: dataType.number,
      value: null,
      mapKey: ["weightage"],
    },
    {
      name: "GSTIN",
      key: "gstin",
      type: dataType.text,
      value: null,
      mapKey: ["gstin"],
    },
    {
      name: "Bcc Email",
      key: "bcc_email",
      type: dataType.text,
      value: null,
      mapKey: ["bcc_email"],
    },
    {
      name: "Po",
      key: "po",
      type: dataType.text,
      value: null,
      mapKey: ["po"],
    },
  ];
  const formProps = {
    backScreen: screenNames.CLIENT,
    endpoint: endpoints.clients,
    form,
    title: "Add Client",
  };
  return (
    <ParentContainer
      useScroll={false}
      title="Client"
      addScreen={{ name: screenNames.FORM_SCREEN, params: formProps }}
    >
      <AdminListRendered
        data={listData}
        onRefresh={refresh}
        loading={loading}
        backScreen={screenNames.CLIENT}
        listTitle={"Client Details"}
        editTitle={"Edit Client"}
        endpoint={endpoints.clients}
      />
    </ParentContainer>
  );
};

export default Client;
