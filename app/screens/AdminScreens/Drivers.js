import { StyleSheet, Text, View, Pressable, FlatList } from "react-native";
import React from "react";
import { useState, useEffect, useContext } from "react";
import dataType from "../../constants/dataType";
import ParentContainer from "../../components/ParentContainer";
import { adminEndpoints } from "../../service/endpoint";
import screenNames from "../../constants/screenNames";
import AdminListRendered from "../../components/AdminListRendered";
import useFetch from "../../hooks/useFetch";
import getNestedData from "../../helpers/getNestedData";
const Drivers = () => {
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
      name: "Mobile",
      key: "mobile",
      type: dataType.number,
      value: null,
      card: true,
      mapKey: ["mobile"],
    },
    {
      name: "Password",
      key: "password",
      type: dataType.password,
      value: null,
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
      name: "Address 1",
      key: "address1",
      type: dataType.text,
      value: null,
      card: true,
      mapKey: ["user", "user_details", "current_address_1"],
    },
    {
      name: "Address 2",
      key: "address2",
      type: dataType.text,
      value: null,
      card: true,
      mapKey: ["user", "user_details", "address2"],
    },
    {
      name: "State",
      key: "state_id",
      type: dataType.text,
      value: null,
      mapKey: ["state_id"],
    },
    {
      name: "City",
      key: "city_id",
      type: dataType.text,
      value: null,
      mapKey: ["city_id"],
    },
    {
      name: "Country",
      key: "conutry_id",
      type: dataType.text,
      value: null,
      mapKey: ["conutry_id"],
    },
    {
      name: "Rate",
      key: "rate",
      type: dataType.text,
      value: null,
      mapKey: ["rate"],
    },
  ];

  const [listData, setListData] = useState([]);

  const { refresh, loading } = useFetch({
    endpoint: adminEndpoints.driver,
    onSuccess: handleGetDriverSuccess,
  });

  function handleGetDriverSuccess(d) {
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
    backScreen: screenNames.DRIVER,
    endpoint: adminEndpoints.driver,
    form,
    title: "Add Driver",
  };

  return (
    <ParentContainer
      useScroll={false}
      title="Driver"
      addScreen={{ name: screenNames.FORM_SCREEN, params: formProps }}
    >
      <AdminListRendered
        data={listData}
        onRefresh={refresh}
        loading={loading}
        backScreen={screenNames.DRIVER}
        listTitle={"Driver Details"}
        editTitle={"Edit Driver"}
        endpoint={adminEndpoints.driver}
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
