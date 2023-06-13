import { StyleSheet, Text, FlatList, View } from "react-native";
import React from "react";
import { Card, Layout, Button } from "@ui-kitten/components";
import dimensions from "../constants/dimensions";
import colors from "../constants/colors";
import { height } from "../helpers/scales";

export default function AdminListRendered({ data, onRefresh, loading }) {
  if (!data) {
    return <View />;
  }
  return (
    <View style={{ height: height - 100 }}>
      <FlatList
        data={data}
        onRefresh={onRefresh}
        refreshing={loading}
        renderItem={({ item }) => {
          return (
            <Layout style={{ marginBottom: 8 }} level="1">
              <Card status="primary">
                <View style={styles.card}>
                  {item.map((i, index) =>
                    i.card ? (
                      <View key={index} style={styles.dataContainer}>
                        <Text style={{ fontSize: 13, fontWeight: "bold" }}>
                          {i.name} :
                        </Text>
                        <Text style={{ fontSize: 12, color: colors.gray2 }}>
                          {i.value || "null"}
                        </Text>
                      </View>
                    ) : null
                  )}
                </View>
                <BtnGroup />
              </Card>
            </Layout>
          );
        }}
      />
    </View>
  );
  function BtnGroup() {
    const btn = [
      { name: "View", status: "info" },
      { name: "Edit", status: "warning" },
      { name: "Delete", status: "danger" },
    ];
    return (
      <View style={styles.btnContainer}>
        {btn.map((e, i) => (
          <Button
            style={styles.button}
            appearance="outline"
            status={e.status}
            key={i}
          >
            {e.name}
          </Button>
        ))}
      </View>
    );
  }
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
