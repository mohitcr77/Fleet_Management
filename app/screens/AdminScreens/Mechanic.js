import { StyleSheet, Text, View, Pressable, FlatList } from "react-native";
import React from "react";
import { useState, useEffect, useContext } from "react";
import dataType from "../../constants/dataType";
import TokenContext from "../../service/context";
import ParentContainer from "../../components/ParentContainer";
import endpoint from "../../service/endpoint";
import screenNames from "../../constants/screenNames";
import AdminListRendered from "../../components/AdminListRendered";
import useGet from "./../../hooks/useGet";

const Mechanic = () => {
  const form = [
    {
      name: "Id#",
      key: "id",
      type: dataType.number,
      value: null,
      card: true,
    },
    {
      name: "Name",
      key: "name",
      type: dataType.text,
      value: null,
      card: true,
    },
    {
      name: "Email",
      key: "email",
      type: dataType.text,
      card: true,
    },
    {
      name: "Password",
      key: "password",
      type: dataType.password,
    },
    {
      name: "Re-enter Password",
      key: "repassword",
      type: dataType.password,
    },
    {
      name: "Address 1",
      key: "current_address_1",
      type: dataType.text,
      value: null,
      card: true,
    },
    {
      name: "Address 2",
      key: "current_address_2",
      type: dataType.text,
      value: null,
      card: true,
    },
    {
      name: "State",
      key: "state_id",
      type: dataType.text,
      value: null,
    },
    {
      name: "City",
      key: "city_id",
      type: dataType.text,
      value: null,
    },
    {
      name: "Country",
      key: "conutry_id",
      type: dataType.text,
      value: null,
    },
    {
      name: "Availabilty Status",
      key: "availibility_status",
      type: dataType.text,
      value: null,
      card: true,
    },
  ];
  const [listData, setListData] = useState([]);

  const { refresh, loading } = useGet(endpoint.mechanic, handleCurrencySuccess);

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
    backScreen: screenNames.MECHANIC,
    endpoint: endpoint.mechanic,
    form,
    title: "Add Mechanic",
  };

  return (
    <ParentContainer
      useScroll={false}
      title="Mechanic"
      addScreen={[screenNames.FORM_SCREEN, formProps]}
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
