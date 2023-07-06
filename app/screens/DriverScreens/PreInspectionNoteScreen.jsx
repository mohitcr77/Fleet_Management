import { StyleSheet, View } from "react-native";
import React, { useRef } from "react";
import { Card, List, Text } from "@ui-kitten/components";

import { driverEndpoints } from "../../service/endpoint";
import { width } from "../../helpers/scales";
import dataType from "../../constants/dataType";
import ParentContainer from "../../components/ParentContainer";
import screenNames from "../../constants/screenNames";
import useFetch from "../../hooks/useFetch";

const form = [
  { name: "Date", key: "date", type: dataType.date },
  { name: "Title", key: "title", type: dataType.text },
  {
    name: "Description",
    key: "description",
    type: dataType.text,
  },
];

export default function PreInspectionNote({ route, navigation }) {
  const { regoId } = route.params;

  const { data } = useFetch(driverEndpoints.preStartNote(regoId));

  const formProps = {
    backScreen: screenNames.PRE_INSPECTION_LIST_SCREEN,
    endpoint: driverEndpoints.preStartNote(regoId),
    form,
    title: "Add Regos",
    regoId,
  };

  return (
    <ParentContainer
      useScroll={false}
      title="Notes"
      addScreen={{ name: screenNames.FORM_SCREEN, params: formProps }}
    >
      <List
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        data={data?.data?.data}
        renderItem={renderItem}
      />
    </ParentContainer>
  );

  function renderItemHeader(headerProps, info) {
    return (
      <View {...headerProps}>
        <Text category="h6">{`#${info.item.id} ${info.item.title}`}</Text>
      </View>
    );
  }

  function renderItemFooter(footerProps, info) {
    return <Text {...footerProps}>{info.item.date}</Text>;
  }

  function renderItem(info) {
    return (
      <Card
        style={styles.item}
        status="basic"
        header={(headerProps) => renderItemHeader(headerProps, info)}
        footer={(e) => renderItemFooter(e, info)}
      >
        <Text>{info.item.description}</Text>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    maxHeight: 620,
    width: width,
    backgroundColor: "transparent",
  },
  contentContainer: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  item: {
    marginVertical: 4,
  },
});
