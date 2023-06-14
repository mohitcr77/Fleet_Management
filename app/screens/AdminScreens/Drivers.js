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

  const [listData, setListData] = useState([]);

  const { refresh, loading } = useGet(endpoint.driver, handleGetDriverSuccess);

  function handleGetDriverSuccess(d) {
    let arr = [];
    d.forEach((item) => {
      const a = [
        {
          name: "Name",
          value: item?.user?.name,
          card: true
        },
        {
          name: "Email",
          value: item?.user?.email,
          card : true
        },
        {
          name: "Mobile",
          value: item?.user?.user_details?.mobile,
          card: true
        },
        {
          name: "Address 1",
          value: JSON.stringify(
            item?.user?.user_details?.currrent_address_1
          ),
          card: true
        },
        {
          name: "Address 2",
          value: JSON.stringify(
            item?.user?.user_details?.currrent_address_2
          ),
        },
        {
          name: "State",
          value: item?.user?.user_details?.current_state_id,
        },
        {
          name: "City",
          value: item?.user?.user_details?.current_city_id,
        },
        {
          name: "Country",
          value: item?.user?.user_details?.current_conutry_id,
        },
        {
          name: "Rate",
          value: item?.rate,
        },
      ];
      arr.push(a);
    });
    setListData(arr);
  }
  const form = [
    {
      name: "Name",
      key: "name",
      type: dataType.text,
    },
    {
      name: "Email",
      key: "email",
      type: dataType.text,
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
      name: "Mobile",
      key: "mobile",
      type: dataType.text,
    },
    {
      name: "Address 1",
      key: "address1",
      type: dataType.text,
    },
    {
      name: "Address 2",
      key: "address2",
      type: dataType.text,
    },
    {
      name: "State",
      key: "state_id",
      type: dataType.text,
    },
    {
      name: "City",
      key: "city_id",
      type: dataType.text,
    },
    {
      name: "Country",
      key: "conutry_id",
      type: dataType.text,
    },
    {
      name: "Rate",
      key: "rate",
      type: dataType.text,
    },
  ];
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
