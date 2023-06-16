import React, { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  View,
  ActivityIndicator,
  FlatList,
  Text,
} from "react-native";
import ParentContainer from "../../components/ParentContainer";
import screenNames from "../../constants/screenNames";
import ListCard from "../../components/ListCard";
import { height } from "../../helpers/scales";
import { useSelector } from "react-redux";
import dataType from "../../constants/dataType";
import endpoint from "../../service/endpoint";

const MechanicDataScreen = ({ navigation }) => {
  const { machineTypeList } = useSelector((state) => state.dropDownData);
  const form = [
    {
      name: "Id#",
      key: "id",
      type: dataType.number,
      value: null,
      card: true,
    },
    {
      name: "Rego",
      key: "rego",
      type: dataType.dropdown,
      data: machineTypeList,
    },
    {
      name: "Date",
      key: "date",
      type: dataType.date,
    },
    {
      name: "Total Amount",
      key: "total_amount",
      type: dataType.number,
    },
    {
      name: "Mileage",
      key: "mileage",
      type: dataType.number,
    },
    {
      name: "Comment",
      key: "comment",
      type: dataType.text,
    },
    {
      name: "Attachment",
      key: "attachment",
      type: dataType.image,
    },
  ];

  const CardComponent = ({ obj }) => {
    const data = {
      cardData: [
        { key: "Rego", value: "obj.rego.name", type: "text" },
        {
          key: "Date",
          value:
            'formatDate(obj.date).monthNameFormat + "  " + AMPMFormat(obj.start)',
          type: "date",
        },
        { key: "Total amount", value: "obj.total_amount", type: "number" },
        { key: "Mileage", value: "obj.mileage", type: "number" },
        {
          key: "Comment",
          value: "obj.comment",
          type: "text",
        },
      ],
    };

    return (
      <ListCard
        data={data}
        obj={obj}
        editScreen={screenNames.MECHANIC_FORM_SCREEN}
        listScreen={screenNames.MECHANIC_DATA_SCREEN}
      />
    );
  };
  const formProps = {
    backScreen: screenNames.MECHANIC_DATA_SCREEN,
    endpoint: endpoint.rego,
    form,
    title: "Mechanic Form",
  };
  return (
    <ParentContainer
      useScroll={false}
      // containerStyle={{ alignItems: "center" }}
      addScreen={[screenNames.FORM_SCREEN, formProps]}
      title={"Data"}
    >
      <View style={styles.container}>
        {false ? (
          <Text style={{ marginTop: 100, alignSelf: "center", height }}>
            No Data
          </Text>
        ) : (
          <FlatList
            data={[1, 2, 3]}
            keyExtractor={(item, index) => "key" + index}
            renderItem={({ item }) => {
              return <CardComponent obj={item} />;
            }}
          />
        )}
      </View>
    </ParentContainer>
  );
};

export default MechanicDataScreen;

const styles = StyleSheet.create({
  container: { height: height - 40 },
});
