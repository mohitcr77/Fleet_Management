import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

import { endpoints } from "../service/endpoint";
import { width } from "../helpers/scales";
import colors from "../constants/colors";
import dataType from "../constants/dataType";
import formatDate from "../helpers/formatDate";
import genImageUrl from "../helpers/genImageUrl";
import ParentContainer from "../components/ParentContainer";
import screenNames from "../constants/screenNames";
import TouchableText from "../components/TouchableText";
import useFetch from "../hooks/useFetch";
import Icons from "../components/Icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import dimensions from "../constants/dimensions";

export default function Documents({ route }) {
  const user_id = route.params?.userData?.user_id;

  let requestConfig = {
    endpoint: endpoints.documents,
    params: user_id ? { user_id } : {},
  };

  const { data } = useFetch(requestConfig);

  const form = [
    { name: "Name", key: "name", type: dataType.text },
    {
      name: "Comment",
      key: "comments",
      type: dataType.text,
    },
    {
      title: "Attach Image",
      key: "document",
      type: dataType.image,
    },
  ];

  const formProps = {
    backScreen: screenNames.DOCUMENT_LIST_SCREEN,
    endpoint: endpoints.documents,
    form,
    title: "Add",
  };

  return (
    <ParentContainer
      title="Documents"
      addScreen={{ name: screenNames.FORM_SCREEN, params: formProps }}
      noData={!data?.data?.data.length}
    >
      {data?.data?.data.map((i) => (
        <CardComponent key={i.id} item={i} />
      ))}
    </ParentContainer>
  );
}

function CardComponent({ item }) {
  return (
    <View style={styles.card} key={item}>
      <Image source={getIcon(item)} style={styles.img} resizeMode="stretch" />
      {/* <View style={styles.dataContainer}>
        <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
        <View style={styles.data}>
          <Text style={{ color: colors.gray2 }}>{item.comments}</Text>
          <Text style={{ color: colors.gray2 }}>
            {formatDate(item.created_at).monthNameFormat}
          </Text>
          <TouchableOpacity onPress={() => {}}>
            <Icons.EyeIcon />
          </TouchableOpacity>
        </View>
      </View> */}
      <View style={{ marginLeft: 10 }}>
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>{item.name}</Text>
        <Text style={{ color: colors.gray2 }}>
            {formatDate(item.created_at).monthNameFormat}
          </Text>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => {}}>
          <Image
            source={require("../assets/greenEye.png")}
            style={{ height: 40, width: 40, marginHorizontal:20 }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Image
            source={require("../assets/downloadIconBlue.png")}
            style={{ height: 30, width: 30, marginHorizontal:20 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

function getIcon(doc) {
  switch (doc.mime_type) {
    case "image":
      return { uri: genImageUrl(doc.path) };

    default:
      return require(`../assets/images/pdf.jpg`);
  }
}

const styles = StyleSheet.create({
  card: {
    width: width - 30,
    elevation: 5,
    borderRadius: 8,
    marginVertical: 10,
    flexDirection: "row",
    paddingHorizontal: 5,
    paddingVertical: 20,
    backgroundColor: "white",
  },
  img: {
    height: 70,
    width: 50,
    borderRadius: 8,
    marginLeft: 5,
  },
  dataContainer: {
    paddingHorizontal: 5,
  },
  data: {
    width: width * 0.6,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  footer: {
    position:"absolute",
    top: 60,
    left: dimensions.componentWidth/2,
    flexDirection:"row",
  },
});
