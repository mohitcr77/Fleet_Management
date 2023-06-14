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
  const [listData, setListData] = useState([]);

  const { refresh, loading } = useGet(endpoint.mechanic, handleCurrencySuccess);

  function handleCurrencySuccess(d) {
    let arr = [];
    d.forEach((item) => {
      const a = [
        {
          name: "Name",
          value: item?.user?.name,
        },
        {
          name: "Email",
          value: item?.user?.email,
        },
        {
          name: "Address 1",
          value: item?.user?.user_details?.current_address_1,
        },
        {
          name: "Address 2",
          value: item?.user?.user_details?.current_address_2,
        },
        {
          name: "Availabilty Status",
          value: item?.availibility_status,
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
      name: "Address 1",
      key: "current_address_1",
      type: dataType.text,
    },
    {
      name: "Address 2",
      key: "current_address_2",
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
      name: "Availabilty Status",
      key: "availibility_status",
      type: dataType.text,
    },
  ];
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
      />
    </ParentContainer>
  );
};

export default Mechanic;