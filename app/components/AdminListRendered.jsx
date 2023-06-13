import { StyleSheet, Text, FlatList, View } from "react-native";
import React from "react";
import { Card, Layout, Button } from "@ui-kitten/components";
import dimensions from "../constants/dimensions";
import colors from "../constants/colors";
import { height } from "../helpers/scales";
import screenNames from "../constants/screenNames";
import { CommonActions, useNavigation } from "@react-navigation/native";
import useApi from "../hooks/useApi";
import endpoint from "../service/endpoint";
import { HTTPS_METHODS } from "../constants/entity";

export default function AdminListRendered({
  backScreen,
  data,
  editTitle = "Edit",
  endpoint,
  listTitle = "List",
  loading,
  onRefresh,
}) {
  const { request: deleteRego } = useApi(onRefresh);

  const handleDeleteRego = async (id) => {
    const requestConfig = {
      endpoint: `${endpoint}/${id}`,
      method: HTTPS_METHODS.DELETE,
    };

    await deleteRego(requestConfig);
  };

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
                <BtnGroup data={item} />
              </Card>
            </Layout>
          );
        }}
      />
    </View>
  );
  function BtnGroup({ data }) {
    const navigation = useNavigation();
    const id = data.filter((v) => v.name === "Id#")[0].value;

    const btn = [
      {
        name: "View",
        status: "info",
        onPress: () =>
          navigation.navigate(screenNames.DETAILS_VIEW_SCREEN, {
            data,
            backScreen,
            listTitle,
          }),
      },
      {
        name: "Edit",
        status: "warning",
        onPress: () =>
          navigation.dispatch(
            CommonActions.reset({
              routes: [
                {
                  name: screenNames.FORM_SCREEN,
                  params: {
                    form: data,
                    backScreen,
                    listTitle,
                    title: editTitle,
                    endpoint,
                  },
                },
              ],
            })
          ),
      },
      { name: "Delete", status: "danger", onPress: () => handleDeleteRego(id) },
    ];
    return (
      <View style={styles.btnContainer}>
        {btn.map((e, i) => (
          <Button
            style={styles.button}
            appearance="outline"
            status={e.status}
            key={i}
            onPress={e.onPress}
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
