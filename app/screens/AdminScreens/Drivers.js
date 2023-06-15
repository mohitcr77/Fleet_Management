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
const Drivers = () => {
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
      card: true
    },
    {
      name: "Email",
      key: "email",
      type: dataType.text,
      value: null,
      card: true
    },
    {
      name: "Password",
      key: "password",
      type: dataType.password,
      value: null,
    },
    {
      name: "Re-enter Password",
      key: "repassword",
      type: dataType.password,
      value: null,
    },
    {
      name: "Mobile",
      key: "mobile",
      type: dataType.text,
      value: null,
      card: true,
    },
    {
      name: "Address 1",
      key: "address1",
      type: dataType.text,
      value: null,
      card: true
    },
    {
      name: "Address 2",
      key: "address2",
      type: dataType.text,
      value: null,
      card: true
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
      name: "Rate",
      key: "rate",
      type: dataType.text,
      value: null,
    },
  ];

  const [listData, setListData] = useState([]);

  const { refresh, loading } = useGet(endpoint.driver, handleGetDriverSuccess);

  function handleGetDriverSuccess(d) {
    let arr = [];
    d.forEach((item) => {
      let a = [];
      form.forEach((i) => a.push({ ...i, value: item[i.key] }));
      arr.push(a);
    });
    setListData(arr);
  }
  
  const formProps = {
    backScreen: screenNames.DRIVER,
    endpoint: endpoint.driver,
    form,
    title: "Add Driver",
  };

  return (
    <ParentContainer
      useScroll={false}
      title="Driver"
      addScreen={[screenNames.FORM_SCREEN, formProps]}
    >
      <AdminListRendered
        data={listData}
        onRefresh={refresh}
        loading={loading}  
        backScreen={screenNames.DRIVER}
        listTitle={"Driver Details"}
        editTitle={"Edit Driver"}
        endpoint={endpoint.driver}
      />
    </ParentContainer>
  );
};

export default Drivers;

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 40,
    margin: 10,
    backgroundColor: "#ffffff",
    borderRadius: 10,
  },
  btnStyle: {
    backgroundColor: "#13bfa6",
    borderRadius: 6,
    padding: 8,
  },
  listStyle: {
    flex: 9,
  },
});
