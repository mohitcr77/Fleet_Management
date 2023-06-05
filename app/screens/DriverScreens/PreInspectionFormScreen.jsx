import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ParentContainer from "../../components/ParentContainer";
import dataType from "../../constants/dataType";
import FormInput from "../../components/FormInput";
import AppButton from "../../components/AppButton";
import AddImage from "../../components/AddImage";

export default function PreInspectionForm() {
  const preStartCheckList = [
    {
      title: "Engine oil",
      subtitle: "(level)",
      checked: false,
      key: "engine_oil",
      type: dataType.checkBox,
    },
    {
      title: "Engine coolant",
      subtitle: "(level)",
      checked: false,
      key: "engine_coolant",
      type: dataType.checkBox,
    },
    {
      title: "Lights",
      subtitle: "(brake, indicator, headlights, park, flashing light)",
      checked: false,
      key: "lights",
      type: dataType.checkBox,
    },
    {
      title: "Tyres & wheels",
      subtitle: "(condition, inflation, security)",
      checked: false,
      key: "tyres_wheels",
      type: dataType.checkBox,
    },
    {
      title: "Air tank",
      subtitle: "(drain tanks, any leaks)",
      checked: false,
      key: "airtanks",
      type: dataType.checkBox,
    },
    {
      title: "Fuel tank",
      subtitle: "(level)",
      checked: false,
      key: "fuel",
      type: dataType.checkBox,
    },
    {
      title: "Startup check",
      subtitle: "(gauge working, dash lights on, brake operations, noises)",
      checked: false,
      key: "startup_check",
      type: dataType.checkBox,
    },
    {
      title: "Reflector",
      subtitle: "(both sides)",
      checked: false,
      key: "reflectors",
      type: dataType.checkBox,
    },
    {
      title: "Mud flaps",
      subtitle: "(both sides)",
      checked: false,
      key: "mudflaps",
      type: dataType.checkBox,
    },
    {
      title: "Wheel nut markers",
      subtitle: "(check markers)",
      checked: false,
      key: "wheel_nut_markers",
      type: dataType.checkBox,
    },
    {
      title: "COF",
      subtitle: "(Date)",
      checked: false,
      key: "cof",
      type: dataType.checkBox,
    },
    {
      title: "Rego",
      subtitle: "(Date)",
      checked: false,
      key: "rego_date",
      type: dataType.checkBox,
    },
    {
      title: "Reverse alarm",
      subtitle: "()",
      checked: false,
      key: "reverse_alarm",
      type: dataType.checkBox,
    },
    {
      title: "Flashing amber Lights",
      subtitle: "()",
      checked: false,
      key: "flashing_amber_lights",
      type: dataType.checkBox,
    },
    {
      title: "First aid kit",
      subtitle: "()",
      checked: false,
      key: "first_aid_kit",
      type: dataType.checkBox,
    },
    {
      title: "Swing door locked-padlock",
      subtitle: "()",
      checked: false,
      key: "swing_door_locked_padlock",
      type: dataType.checkBox,
    },
    {
      title: "Spill kit",
      subtitle: "()",
      checked: false,
      key: "spill_kit",
      type: dataType.checkBox,
    },
    {
      title: "Trail gate trip lock pin",
      subtitle: "()",
      checked: false,
      key: "tail_gate_trip_lock",
      type: dataType.checkBox,
    },
    {
      title: "RT",
      subtitle: "()",
      checked: false,
      key: "rt",
      type: dataType.checkBox,
    },
    {
      name: "Enter Kms",
      key: "total_kms",
      type: dataType.text,
    },
    {
      name: "Description/Comment",
      key: "description",
      type: dataType.text,
    },
    {
      title: `Is there any issue with ${"routeParams.name"} ?`,
      subtitle: "()",
      checked: false,
      key: "rt",
      type: dataType.checkBox,
    },
    {
      title: `Add Image`,
      key: "attachment",
      type: dataType.image,
    },
  ];
  return (
    <ParentContainer containerStyle={{ backgroundColor: "white" }}>
      <Text style={styles.preStartHeader}>
        Pre Start Checklist for
        {/* {"routeParams.name"} */}
      </Text>
      <Text style={{ alignSelf: "center", marginBottom: 10 }}>
        Last updated on
        {/* {formatDate(routeParams.updated_at).y_m_d} */}
        {/* {formatDate(routeParams.updated_at).newTimeSlice}) */}
      </Text>
      {preStartCheckList.map((i, index) => (
        <FormInput {...i} key={index} />
      ))}

      <AppButton title={"Submit"} onPress={() => {}} />
    </ParentContainer>
  );
}

const styles = StyleSheet.create({
  preStartHeader: {
    marginBottom: 10,
    marginTop: 20,
    fontWeight: "bold",
  },
});
