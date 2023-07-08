import { View, Text, StyleSheet, Image } from "react-native";
import React, { useEffect } from "react";

import screenNames from "../constants/screenNames";
import { width } from "../helpers/scales";
import colors from "../constants/colors";
import dataType from "../constants/dataType";
import ParentContainer from "../components/ParentContainer";
import TouchableText from "../components/TouchableText";
import { endpoints } from "../service/endpoint";
import useFetch from "../hooks/useFetch";
import formatDate from "../helpers/formatDate";
import genImageUrl from "../helpers/genImageUrl";
import useApi from "../hooks/useApi";
import { HTTPS_METHODS } from "../constants/entity";

export default function Documents({ route }) {
  const user_id = route.params?.userData?.user_id;
  console.log(user_id, "iddddddddddddddddddddddddd");
  let requestConfig = {
    endpoint: endpoints.documents,
    params: user_id ? { user_id } : {},
  };

  console.log(requestConfig);
  const { data } = useFetch(requestConfig);
  console.log(data, "888888888");

  // console.log(route.params);
  let endpoint = endpoints.documents;

  const { request: getDocuments } = useApi(handleSuccess, handleFail);

  useEffect(() => {
    // getData();
  }, []);

  async function getData() {
    let requestConfig = {
      method: HTTPS_METHODS.GET,
      endpoint: endpoints.documents,
    };
    if (userData) {
      // endpoint = endpoint + "?user_id=" + userData.user.id;
      requestConfig.params = {
        user_id: userData.user.id,
      };
    }
    // console.log(requestConfig);
    const r = await getDocuments(requestConfig);
    console.log(r, "oooooooooooo");
  }

  function handleSuccess(e) {
    // console.log(e, "rrrrrrrrrrrr");
  }
  function handleFail(e) {
    // console.log(e, "eeeeeeee");
  }

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
      <TouchableText title={"Open"} onPress={() => {}} />
      <Image source={getIcon(item)} style={styles.img} resizeMode="stretch" />
      <View style={styles.dataContainer}>
        <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
        <View style={styles.data}>
          <Text style={{ color: colors.gray2 }}>{item.comments}</Text>
          <Text style={{ color: colors.gray2 }}>
            {formatDate(item.created_at).monthNameFormat}
          </Text>
        </View>
      </View>
    </View>
  );

  function getIcon(doc) {
    switch (doc.mime_type) {
      case "image":
        return { uri: genImageUrl(doc.path) };

      default:
        return require(`../assets/images/pdf.jpg`);
    }
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
  },
  dataContainer: {
    paddingHorizontal: 5,
  },
  data: {
    width: width * 0.6,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
