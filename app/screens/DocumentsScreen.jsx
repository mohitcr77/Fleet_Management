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
      <View>{getIcon(item)}</View>
      <View style={{ marginLeft: 10 }}>
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>{item.name}</Text>
        <Text style={{ color: colors.gray2 }}>
          {formatDate(item.created_at).monthNameFormat}
        </Text>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.downloadIcon}
          onPress={() => {}}
        >
          <Icons.DownloadIcon />
        </TouchableOpacity>
        <TouchableOpacity style={styles.eyeIcon} onPress={() => {}}>
          <Icons.EyeIcon />
          {/* <Image
            source={require("../assets/greenEye.png")}
            style={{ height: 35, width: 35 }}
          /> */}
        </TouchableOpacity>
      </View>
    </View>
  );
}

function getIcon(doc) {
  let uri = genImageUrl(doc.path);
  let extension = uri.substring(uri.lastIndexOf(".") + 1);
  //console.log(extension);
  switch (extension) {
    case "pdf":
      return <Icons.PdfIcon />;

    default:
      return <Icons.JpgIcon />;
  }
}

const styles = StyleSheet.create({
  card: {
    width: width - 30,
    elevation: 5,
    borderRadius: 8,
    marginVertical: 10,
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical: 25,
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
    flexDirection: "row",
    position: "absolute",
    left: dimensions.componentWidth / 2 + 20,
    bottom: 10,
    width: dimensions.componentWidth / 3 - 20,
    justifyContent: "space-between",
  },
  eyeIcon: { backgroundColor: "#2eff00", borderRadius: 10, padding: 5 },
  downloadIcon: { backgroundColor: "#6D14D7", borderRadius: 10, padding: 5 }
});
