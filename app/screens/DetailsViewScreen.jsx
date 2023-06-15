import { StyleSheet, Text, FlatList, View } from "react-native";
import React from "react";
import { Card, Layout, Button } from "@ui-kitten/components";
import dimensions from "../constants/dimensions";
import colors from "../constants/colors";
import { height } from "../helpers/scales";
import ParentContainer from "../components/ParentContainer";

export default function DetailsView({ route }) {
  const { backScreen, data, listTitle } = route.params;
  return (
    <ParentContainer onBackButtonPressScreen={backScreen} title={listTitle}>
      <Layout style={{ marginBottom: 8 }} level="1">
        <Card status="primary">
          <View style={styles.card}>
            {data.map((i, index) => (
              <View key={index} style={styles.dataContainer}>
                <Text style={{ fontSize: 13, fontWeight: "bold" }}>
                  {i.name} :
                </Text>
                <Text style={{ fontSize: 12, color: colors.gray2 }}>
                  {i.value || "null"}
                </Text>
              </View>
            ))}
          </View>
        </Card>
      </Layout>
    </ParentContainer>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  dataContainer: {
    // backgroundColor: "red",
    width: 130,
    // flexDirection: "row",
    margin: 5,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
});
