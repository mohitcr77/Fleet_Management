import React, { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  View,
  ActivityIndicator,
  FlatList,
  Text,
} from "react-native";
import ParentContainer from "../../components/ParentContainer";
import ListHeader from "../../components/ListHeader";
import screenNames from "../../constants/screenNames";
import useFetchList from "../../hooks/useFetchList";
import ListCard from "../../components/ListCard";
import { height } from "../../helpers/scales";

const MechanicDataScreen = ({ navigation }) => {
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
  return (
    <ParentContainer
      useScroll={false}
      // containerStyle={{ alignItems: "center" }}
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
  container: { height: height - 40},
});
