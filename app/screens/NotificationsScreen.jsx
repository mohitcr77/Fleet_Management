import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ParentContainer from "../components/ParentContainer";
import useFetch from "../hooks/useFetch";
import { endpoints } from "../service/endpoint";

export default function Notifications() {
  const { data: notifications } = useFetch(endpoints.notification);
  //   console.log(notifications, "oooooo");
  return (
    <ParentContainer title={"Notifications"}>
      <View>
        <Text>hii</Text>
      </View>
    </ParentContainer>
  );
}

const styles = StyleSheet.create({});
