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

const Client = () => {
  const [listData, setListData] = useState([]);

  const { refresh, loading } = useGet(endpoint.clients, handleClientSuccess);

  function handleClientSuccess(d) {
    let arr = [];
    d.forEach((item) => {
      const a = [
        {
          name: "Name",
          value: item.name,
          card: true
        },
        {
          name: "Email",
          value: item.email,
          card: true
        },
        {
          name: "Color code",
          value: item.color_code,
          card: true
        },
        {
          name: "Vehicle Type",
          value: item.gstin,
          card: true
        },
        {
          name: "PO",
          value: item.po,
          card: true
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
      name: "Color Code",
      key: "color_code",
      type: dataType.color,
    },
    {
      name: "Client Rate",
      key: "weightage",
      type: dataType.text,
    },
    {
      name: "GSTIN",
      key: "gstin",
      type: dataType.text,
    },
    {
      name: "Bcc Email",
      key: "bcc_email",
      type: dataType.text,
    },
    {
      name: "Po",
      key: "po",
      type: dataType.text,
    },
  ];
  const formProps = {
    backScreen: screenNames.CLIENT,
    endpoint: endpoint.clients,
    form,
    title: "Add Client",
  };
  return (
    <ParentContainer
      useScroll={false}
      title="Client"
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

export default Client;

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
