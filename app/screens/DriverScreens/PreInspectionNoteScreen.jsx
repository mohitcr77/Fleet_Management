import { StyleSheet, View } from "react-native";
import React, { useRef } from "react";
import { Card, List, Text } from "@ui-kitten/components";

import dataType from "../../constants/dataType";
import FormInput from "../../components/FormInput";
import ParentContainer from "../../components/ParentContainer";
import AppFooterButton from "../../components/AppFooterButton";
import screenNames from "../../constants/screenNames";
import useApi from "../../hooks/useApi";
import { driverEndpoints } from "../../service/endpoint";
import useFetch from "../../hooks/useFetch";
import { width } from "../../helpers/scales";

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
  // const [regoId, setregoId] = useState(route.params.regoId ?)

  const formData = useRef({});
  const { request: submitPreStartNote } = useApi();
  const { data } = useFetch(driverEndpoints.preStartNote(regoId));

  async function handleSubmitData() {
    const requestConfig = {
      endpoint: driverEndpoints.preStartNote(regoId),
      body: formData.current,
    };

    await submitPreStartNote(requestConfig);
  }

  const renderItemHeader = (headerProps, info) => (
    <View {...headerProps}>
      <Text category="h6">{`#${info.item.id} ${info.item.title}`}</Text>
    </View>
  );

  const renderItemFooter = (footerProps, info) => {
    console.log(footerProps, info, "ppppppp");
    return <Text {...footerProps}>{info.item.date}</Text>;
  };
  const renderItem = (info) => (
    <Card
      style={styles.item}
      status="basic"
      header={(headerProps) => renderItemHeader(headerProps, info)}
      footer={(e) => renderItemFooter(e, info)}
    >
      <Text>{info.item.description}</Text>
    </Card>
  );

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
