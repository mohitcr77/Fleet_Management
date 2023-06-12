import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import { CommonActions, useNavigation } from "@react-navigation/native";

import colors from "../constants/colors";
import Icons from "./Icons";
import { largeScreen, scale, width, height } from "../helpers/scales";
import screenNames from "../constants/screenNames";
import { TouchableOpacity } from "react-native";
import dimensions from "../constants/dimensions";
import { Button } from "@ui-kitten/components";
import AppButton from "./AppButton";

export default function ListCard({
  obj,
  data,
  inspectionData,
  editScreen,
  showMore = true,
  onSendClick,
  listScreen,
  resolveBtn,
  previewBtn,
  editBtn,
  viewBtn
}) {
  const navigation = useNavigation();
  const handleEdit = () => {
    // if (
    //   editScreen === screenNames.driverJobEditScreen &&
    //   obj.lock_timesheet === 1
    // ) {
    //   alert("Editing is locked by Admin. Contact Admin");
    //   return;
    // }
    // navigation.dispatch(
    //   CommonActions.reset({
    //     routes: [
    //       {
    //         name: editScreen,
    //         params: obj,
    //       },
    //     ],
    //   })
    // );
  };

  const handelView = () => {
    // navigation.dispatch(
    //   CommonActions.reset({
    //     routes: [
    //       {
    //         name: screenNames.viewDataScreen,
    //         params: { data: [...data.cardData, ...data.data], listScreen },
    //       },
    //     ],
    //   })
    // );
    // navigation.navigate(screenNames.viewDataScreen, {
    //   params: {
    //     screen:
    //     , data: [
    //   ...data.cardData,
    //   ...data.data,
    // ]}});
  };

  return (
    <View
      style={[
        styles.card,
        {
          // borderWidth: 2,
          backgroundColor: obj?.shift === 0 ? colors.lightGray : colors.white,
        },
      ]}
    >
      {showMore && (
        <TouchableOpacity style={styles.showMore} onPress={handelView}>
          <Text style={{ color: colors.saveBlue }}>Show More</Text>
        </TouchableOpacity>
      )}
      {data?.cardData.map((item, index) => {
        return (
          <View View key={index} style={styles.textContainer}>
            <Text
              style={{
                color: colors.border2,
                fontSize: 12,
              }}
            >
              {item.key}
            </Text>
            <Text
              style={{
                width: item.type === "date" ? 80 : width / 2 - 10,
              }}
            >
              {item.value}
            </Text>
          </View>
        );
      })}
      {inspectionData?.cardData.map((item, index) => {
        return (
          <View View key={index} style={styles.inspectionTextContainer}>
            <Text
              style={{
                color: colors.border2,
                fontSize: 12,
              }}
            >
              {item.key}{" "}
            </Text>
            <Text
              style={{
                width: item.type === "date" ? 80 : width / 2 - 10,
              }}
            >
              {item.value}
            </Text>
          </View>
        );
      })}
      {onSendClick && (
        <TouchableOpacity
          style={[
            styles.editBtn,
            { backgroundColor: colors.saveBlue, bottom: 60 },
          ]}
          onPress={onSendClick}
        >
          <Icons.Send size={24} />
        </TouchableOpacity>
      )}
      {resolveBtn ? (
        <AppButton  style={styles.resolveBtn} title={"Resolve"} />
      ) : previewBtn ? (
        <AppButton  style={styles.previewBtn} title={"Preview"} />
      ):
      editBtn ?
      <AppButton  style={styles.editBtn2} title={"EDIT"} />
       : (
        <TouchableOpacity style={styles.editBtn} onPress={handleEdit}>
          <Icons.Pencil />
        </TouchableOpacity>
      )}
      {
        viewBtn &&
        <AppButton style={styles.viewBtn}  title={"View"} />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  editBtn: {
    position: "absolute",
    bottom: 10,
    right: 10,
    backgroundColor: colors.cancelRed,
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderRadius: 2,
  },
  editBtn2: {
    position: "absolute",
    bottom: 10,
    right: 10,
    paddingVertical: 5,
    paddingHorizontal: 8,
    width: dimensions.componentWidth/2 - 80
  },
  previewBtn:{
    position: "absolute",
    top: 50,
    right: 10,
    paddingVertical: 5,
    paddingHorizontal: 8,
    width: dimensions.componentWidth/2 - 60,
  },
  resolveBtn:{
    position: "absolute",
    top: 20,
    right: 10,
    paddingVertical: 5,
    paddingHorizontal: 8,
    width: dimensions.componentWidth/2 - 60
  },
  viewBtn:{
    position: "absolute",
    bottom: 20,
    right: 10,
    paddingVertical: 5,
    paddingHorizontal: 8,
    width: dimensions.componentWidth/2 - 60
  },
  showMore: {
    position: "absolute",
    top: 3,
    right: 10,
    // backgroundColor: "red",
  },
  card: {
    width: dimensions.componentWidth,
    elevation: 5,
    marginVertical: 10,
    padding: 10,
    borderRadius: 5,
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "white",
  },
  textContainer: {
    flexWrap: "wrap",
    width: dimensions.componentWidth / 2 - 10,
    paddingVertical: 3,
    // backgroundColor: "red",
  },
  inspectionTextContainer: {
    paddingVertical: 3,
    flexDirection:"row"
    // backgroundColor: "red",
  },
});
