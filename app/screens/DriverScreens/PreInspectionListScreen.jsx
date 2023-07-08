import { View, Text, StyleSheet } from "react-native";
import React from "react";
import ParentContainer from "../../components/ParentContainer";
import AppButton from "../../components/AppButton";
import customStyles from "../../constants/styles";
import dimensions from "../../constants/dimensions";
import screenNames from "../../constants/screenNames";
import { useSelector } from "react-redux";
import { CommonActions } from "@react-navigation/routers";

export default function PreInspectionList({ navigation }) {
  const { machineTypeList } = useSelector((state) => state.dropDownData);
  return (
    <ParentContainer>
      {machineTypeList.map((i) => (
        <InspectionCard key={i.id} regoDetails={i} />
      ))}
    </ParentContainer>
  );

  function InspectionCard({ regoDetails }) {
    const btn = [
      {
        name: "Pre Inspection",
        screen: screenNames.PRE_INSPECTION_FORM_SCREEN,
      },
      {
        name: "History",
        screen: screenNames.PRE_INSPECTION_HISTORY_SCREEN,
      },
      {
        name: "Notes",
        screen: screenNames.PRE_INSPECTION_NOTES_SCREEN,
      },
    ];

    const detail = [
      { name: "Id :", value: regoDetails.id },
      { name: "Fleet Number :", value: regoDetails.label },
    ];

    return (
      <View style={styles.card}>
        {detail.map((i) => (
          <View
            style={{ flexDirection: "row", marginVertical: 3 }}
            key={i.name}
          >
            <Text style={{ fontWeight: "bold" }}>{i.name}</Text>
            <Text> {i.value}</Text>
          </View>
        ))}

        <View style={customStyles.flex_row_between}>
          {btn.map((i) => (
            <AppButton
              onPress={
                () =>
                  navigation.dispatch(
                    CommonActions.reset({
                      routes: [
                        {
                          name: i.screen,
                          params: {
                            regoId: regoDetails.id,
                          },
                        },
                      ],
                    })
                  )
                // navigation.navigate(i.screen, { regoId: regoDetails.id })
              }
              title={i.name}
              key={i.name}
              style={styles.cardBtn}
              titleStyle={styles.btnText}
            />
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    width: dimensions.componentWidth,
    padding: 5,
    marginVertical: 10,
  },
  cardBtn: { width: 105 },
  btnText: { fontSize: 14 },
});
