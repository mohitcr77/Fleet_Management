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

const Tax = () => {
  const [listData, setListData] = useState([]);

  const { refresh, loading } = useGet(endpoint.tax, handleTaxSuccess);

  function handleTaxSuccess(d) {
    let arr = [];
    d.forEach((item) => {
      const a = [
        {
          name: "Tax Name",
          value: item?.tax_name,
          card: true,
        },
        {
          name: "Tax percentage",
          value: item?.tax_percentage,
          card: true,
        },
      ];
      arr.push(a);
    });
    setListData(arr);
  }
  const form = [
    {
      name: "Tax Name",
      key: "tax_name",
      type: dataType.text,
    },
    {
      name: "Tax percentage",
      key: "tax_percentage",
      type: dataType.text,
    },
  ];
  const formProps = {
    backScreen: screenNames.TAX,
    endpoint: endpoint.tax,
    form,
    title: "Add Tax",
  };

  return (
    <ParentContainer
      useScroll={false}
      title="Tax"
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

export default Tax;

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
