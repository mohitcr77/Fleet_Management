import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import { CommonActions, useNavigation } from "@react-navigation/native";
import { Input } from "@ui-kitten/components";
import colors from "../constants/colors";
import Icons from "./Icons";
import { largeScreen, scale, width, height } from "../helpers/scales";
import screenNames from "../constants/screenNames";
import { TouchableOpacity, Modal } from "react-native";
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
  viewBtn,
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

  const [viewModalVisible, setViewModalVisible] = useState(false);
  const [previewModalVisible, setPreViewModalVisible] = useState(false);
  const [resolveModalVisible, setResolveModalVisible] = useState(false);
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
          <>
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
            {/* View Modal */}
            <Modal transparent={true} visible={viewModalVisible}>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <View style={styles.modalHeadingContainer}>
                    <Text style={styles.modalHeading}>Description</Text>
                  </View>
                  <Text style={styles.modalText}>{item.value}</Text>
                  <View style={styles.imageContainer}>{/* for image */}</View>
                  <AppButton
                    type="small"
                    onPress={() => setViewModalVisible(!viewModalVisible)}
                    title={"Close"}
                  />
                </View>
              </View>
            </Modal>
            {/* Resolve Modal */}
            <Modal transparent={true} visible={resolveModalVisible}>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <View style={styles.modalHeadingContainer}>
                    <Text style={styles.modalHeading}>
                      What have you done to resolve this issue?
                    </Text>
                  </View>
                  <Input
                    multiline={true}
                    textStyle={styles.inputTextStyle}
                    placeholder="Type here"
                  />
                  <View
                    style={{
                      alignContent: "space-between",
                      flexDirection: "row",
                      paddingTop: 20,
                    }}
                  >
                    <TouchableOpacity>
                      <Text style={{ color: "blue", marginHorizontal: 40 }}>
                        Save
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() =>
                        setResolveModalVisible(!resolveModalVisible)
                      }
                    >
                      <Text style={{ color: "red", marginHorizontal: 40 }}>
                        Cancel
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Modal>
            {/* Preview Modal */}
            <Modal transparent={true} visible={previewModalVisible}>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <View
                    style={[styles.modalHeadingContainer, { borderWidth: 1, borderColor:"#cccccc", marginVertical: 10 }]}
                  >
                    <Text style={styles.modalHeading}>Description</Text>
                    <Text style={[styles.modalHeading, { fontWeight:"normal" } ]}> Any Description</Text>
                  </View>
                  <View
                    style={[styles.modalHeadingContainer, { borderWidth: 1, borderColor:"#cccccc", marginVertical: 10 }]}
                  >
                    <Text style={styles.modalHeading}>Mechanic Note</Text>
                    <Text style={[styles.modalHeading, { fontWeight:"normal" } ]}> Any Mechanic Note</Text>
                  </View>
                  <AppButton
                    type="small"
                    onPress={() => setPreViewModalVisible(!previewModalVisible)}
                    title={"Close"}
                  />
                </View>
              </View>
            </Modal>
          </>
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
        <AppButton
          onPress={() => setResolveModalVisible(true)}
          style={styles.resolveBtn}
          title={"Resolve"}
        />
      ) : previewBtn ? (
        <AppButton
          onPress={() => setPreViewModalVisible(true)}
          style={styles.previewBtn}
          title={"Preview"}
        />
      ) : editBtn ? (
        <AppButton style={styles.editBtn2} type="small" title={"EDIT"} />
      ) : (
        <TouchableOpacity style={styles.editBtn} onPress={handleEdit}>
          <Icons.Pencil />
        </TouchableOpacity>
      )}
      {viewBtn && (
        <AppButton
          onPress={() => setViewModalVisible(true)}
          style={styles.viewBtn}
          title={"View"}
        />
      )}
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
    width: dimensions.componentWidth / 2 - 80,
  },
  previewBtn: {
    position: "absolute",
    top: 50,
    right: 10,
    paddingVertical: 5,
    paddingHorizontal: 8,
    width: dimensions.componentWidth / 2 - 60,
  },
  resolveBtn: {
    position: "absolute",
    top: 20,
    right: 10,
    paddingVertical: 5,
    paddingHorizontal: 8,
    width: dimensions.componentWidth / 2 - 60,
  },
  viewBtn: {
    position: "absolute",
    bottom: 20,
    right: 10,
    paddingVertical: 5,
    paddingHorizontal: 8,
    width: dimensions.componentWidth / 2 - 60,
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
    flexDirection: "row",
    // backgroundColor: "red",
  },

  //Modal Styling
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    backgroundColor: "#cccccc33",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  modalHeading: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  modalHeadingContainer: {
    paddingBottom: 10,
    width: dimensions.componentWidth/2
  },
  imageContainer: {
    height: 200,
    width: 200,
    borderColor: "#cccccc",
    borderWidth: 1,
  },
  inputTextStyle: {
    minHeight: 64,
  },
});
