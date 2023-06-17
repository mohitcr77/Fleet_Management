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

const Currencies = () => {
  const [listData, setListData] = useState([]);

  const { refresh, loading } = useGet(endpoint.currency, handleCurrencySuccess);

  function handleCurrencySuccess(d) {
    let arr = [];
    d.forEach((item) => {
      const a = [
        {
          name: "Name",
          value: item.name,
          card: true,
        },
        {
          name: "Code",
          value: item.code,
          card: true,
        },
        {
          name: "Symbol",
          value: item.symbol,
          card: true,
        },
      ];
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
    },
    {
      name: "code",
      key: "code",
      type: dataType.text,
    },
    {
      name: "Symbol",
      key: "symbol",
      type: dataType.text,
    },
  ];
  const formProps = {
    backScreen: screenNames.CURRENCY,
    endpoint: endpoint.currency,
    form,
    title: "Add Currency",
  };
  return (
    <ParentContainer
      useScroll={false}
      title="Currency"
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

export default Currencies;

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
