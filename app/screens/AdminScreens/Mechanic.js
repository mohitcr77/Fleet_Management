import { StyleSheet, Text, View, Pressable, FlatList } from "react-native";
import React from "react";
import { useState, useEffect, useContext } from "react";
import dataType from "../../constants/dataType";
import ParentContainer from "../../components/ParentContainer";
import endpoint from "../../service/endpoint";
import screenNames from "../../constants/screenNames";
import AdminListRendered from "../../components/AdminListRendered";
import useGet from "./../../hooks/useGet";
import getNestedData from "../../helpers/getNestedData";

const Mechanic = () => {
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
      card: true,
      mapKey: ["user", "email"],
    },
    {
      name: "Password",
      key: "password",
      type: dataType.password,
      mapKey: [""],
    },
    {
      name: "Re-enter Password",
      key: "repassword",
      type: dataType.password,
      mapKey: [""],
    },
    {
      name: "Address 1",
      key: "current_address_1",
      type: dataType.text,
      value: null,
      mapKey: [""],
    },
    {
      name: "Address 2",
      key: "current_address_2",
      type: dataType.text,
      value: null,
      mapKey: [""],
    },
    {
      name: "State",
      key: "state_id",
      type: dataType.text,
      value: null,
      mapKey: [""],
    },
    {
      name: "City",
      key: "city_id",
      type: dataType.text,
      value: null,
      mapKey: [""],
    },
    {
      name: "Country",
      key: "conutry_id",
      type: dataType.text,
      value: null,
      mapKey: [""],
    },
    {
      name: "Availabilty Status",
      key: "availibility_status",
      type: dataType.text,
      value: null,
      card: true,
      mapKey: ["availibility_status"],
    },
  ];
  const [listData, setListData] = useState([]);

  const { refresh, loading } = useGet(endpoint.mechanic, handleCurrencySuccess);

  function handleCurrencySuccess(d) {
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
    backScreen: screenNames.MECHANIC,
    endpoint: endpoint.mechanic,
    form,
    title: "Add Mechanic",
  };

  return (
    <ParentContainer
      useScroll={false}
      title="Mechanic"
      addScreen={{ name: screenNames.FORM_SCREEN, params: formProps }}
    >
      <AdminListRendered
        data={listData}
        onRefresh={refresh}
        loading={loading}
        backScreen={screenNames.MECHANIC}
        listTitle={"Mechanic Details"}
        editTitle={"Edit Mechanic"}
        endpoint={endpoint.mechanic}
      />
    </ParentContainer>
  );
};

export default Mechanic;
