import { StyleSheet, Text, View, Pressable, FlatList } from "react-native";
import React from "react";
import { useState, useEffect, useContext } from "react";
import InputModal from "../components/InputModal";
import AppItem from "../components/AppItem";
import dataType from "../constants/dataType";
import index from "../service/index";
import TokenContext from "../service/context";
import LoadingScreen from "./LoadingScreen";

const MechanicTimesheet = () => {
  const token = useContext(TokenContext);
  const [isLoading, setIsLoading] = useState(true);
  const [isvisible, setisvisible] = useState(false);
  const [updateData, setupdateData] = useState("");
  const [crud, setcrud] = useState("");
  const [listdata, setlistdata] = useState("");
  const [viewData, setviewData] = useState("");
  const [dataID, setdataID] = useState("");
  const initialState = {
    mechanic_id: "",
    date: "",
    day: "",
    start_time: "",
    end_time: "",
    notes: "",
    total_time: "",
  };

  useEffect(() => {
    addNewid();
  }, []);

  async function addItemHandler(enteredItemText) {
    index.postmechanic_timesheet(
      token.userToken.token,
      enteredItemText,
      "mechanic_timesheet"
    );
    const res = await index.getmechanic_timesheet(
      token.userToken.token,
      "mechanic_timesheet"
    );
    setlistdata(res.data.data);
    setisvisible(false);
    addNewid();
  }

  const form = [
    {
      name: "Mechanic Id",
      key: "mechanic_id",
      type: dataType.number,
      defaultValue: JSON.stringify(viewData?.mechanic_id),
    },
    {
      name: "Date",
      key: "date",
      type: dataType.date,
      defaultValue: viewData?.date,
    },
    {
      name: "Day",
      key: "day",
      type: dataType.text,
      defaultValue: viewData?.day,
    },
    {
      name: "Start time",
      key: "start_time",
      type: dataType.time,
      defaultValue: viewData?.start_time,
    },
    {
      name: "End_time",
      key: "end_time",
      type: dataType.time,
      defaultValue: viewData?.end_time,
    },
    {
      name: "notes",
      key: "notes",
      type: dataType.text,
      defaultValue: viewData?.notes,
    },
    {
      name: "Total time",
      key: "total_time",
      type: dataType.number,
      defaultValue: JSON.stringify(viewData?.total_time),
    },
  ];
  const addNewid = async () => {
    setIsLoading(true);
    const res = await index.getmechanic_timesheet(
      token.userToken.token,
      "mechanic_timesheet"
    );
    setlistdata(res.data.data);
    setIsLoading(false);
  };
  function updateItemHandler(enteredItemText) {
    const newobj = Object.fromEntries(
      Object.entries(enteredItemText).filter(([_, val]) => val !== "")
    );
    index.Updatemechanic_timesheet(
      token.userToken.token,
      newobj,
      dataID,
      "mechanic_timesheet"
    );
    setisvisible(false);
    setviewData("");
    addNewid();
  }

  function deleteDataHandler(id) {
    index.deletemechanic_timesheet(
      token.userToken.token,
      id,
      "mechanic_timesheet"
    );
    addNewid();
  }

  async function updateHandler(id) {
    setdataID(id);
    const res = await index.getamechanic_timesheet(
      token.userToken.token,
      id,
      "mechanic_timesheet"
    );
    setviewData(res?.data);
    setcrud("update");
    setisvisible(true);
  }
  function addHandler() {
    setisvisible(true);
    setupdateData("");
    setcrud("");
  }
  function onCancelHandler() {
    setisvisible(false);
    setviewData("");
  }
  return (
    <View style={{ flex: 10 }}>
      <View style={styles.topContainer}>
        <Text style={{ fontSize: 14 }}>Mechanic timesheet List</Text>
        <Pressable
          onPress={addHandler}
          style={styles.btnStyle}
          android_ripple={{ color: "#00580c" }}
        >
          <View>
            <Text style={{ color: "#ffffff" }}>Add Mechanic timesheet</Text>
          </View>
        </Pressable>
      </View>
      <InputModal
        crudop={crud}
        form={form}
        updateValue={updateData}
        initialState={initialState}
        onAddItem={addItemHandler}
        onUpdateItem={updateItemHandler}
        visible={isvisible}
        onCancel={onCancelHandler}
      />
      <View style={styles.listStyle}>
        <LoadingScreen loading={isLoading} />
        <FlatList
          data={listdata}
          renderItem={(itemData) => {
            const cardviewform = [
              {
                name: "Mechanic Id",
                value: itemData?.item?.mechanic_id,
              },
              {
                name: "Date",
                value: itemData?.item?.date,
              },
              {
                name: "Day",
                value: itemData?.item?.day,
              },
              {
                name: "Start time",
                value: itemData?.item?.start_time,
              },
              {
                name: "End_time",
                value: itemData?.item?.end_time,
              },
              {
                name: "notes",
                value: itemData?.item?.notes,
              },
            ];
            const viewform = [
              {
                name: "Mechanic Id",
                key: "mechanic_id",
                type: dataType.text,
                value: JSON.stringify(itemData?.item?.mechanic_id),
              },
              {
                name: "Date",
                key: "date",
                type: dataType.date,
                value: itemData?.item?.date,
              },
              {
                name: "Day",
                key: "day",
                type: dataType.text,
                value: itemData?.item?.day,
              },
              {
                name: "Start time",
                key: "start_time",
                type: dataType.time,
                value: itemData?.item?.start_time,
              },
              {
                name: "End_time",
                key: "end_time",
                type: dataType.time,
                value: itemData?.item?.end_time,
              },
              {
                name: "notes",
                key: "notes",
                type: dataType.text,
                value: itemData?.item?.notes,
              },
              {
                name: "Total time",
                key: "total_time",
                type: dataType.number,
                value: JSON.stringify(itemData?.item?.total_time),
              },
            ];
            return (
              <AppItem
                onDeleteItem={deleteDataHandler}
                onupdateData={updateHandler}
                id={itemData.item.id}
                cardviewform={cardviewform}
                viewform={viewform}
              />
            );
          }}
        />
      </View>
    </View>
  );
};

export default MechanicTimesheet;

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 20,
    margin: 10,
    backgroundColor: "#ffffff",
    borderRadius: 10,
  },
  btnStyle: {
    backgroundColor: "#13bfa6",
    borderRadius: 6,
    padding: 8,
  },
  listStyle: {
    flex: 9,
  },
});
