import { StyleSheet, Text, View, Pressable, FlatList } from "react-native";
import React from "react";
import { useState, useEffect, useContext } from "react";
import InputModal from "../../components/InputModal";
import AppItem from "../../components/AppItem";
import dataType from "../../constants/dataType";
import index from "../../service/index";
import TokenContext from "../../service/context";
import LoadingScreen from "./LoadingScreen";

const VehicleMaintenance = () => {
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
    repair_date: "",
    repair_time: "",
    //invoice_url: "",
    day: "",
    comment: "",
    others: "",
    total_amount: "",
    type: "",
    rego_id: "",
    odo_Start: "",
    odo_finish: "",
    distance: "",
    milage: "",
  };

  useEffect(() => {
    addNewid();
  }, []);

  async function addItemHandler(enteredItemText) {
    index.postApi(
      token.userToken.token,
      enteredItemText,
      "vehicle_maintenance"
    );
    const res = await index.getApi(
      token.userToken.token,
      "vehicle_maintenance"
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
      name: "Repair Date",
      key: "repair_date",
      type: dataType.date,
      defaultValue: viewData?.repair_date,
    },
    {
      name: "Repair Time",
      key: "repair_time",
      type: dataType.time,
      defaultValue: viewData?.repair_time,
    },
    {
      name: "Day",
      key: "day",
      type: dataType.text,
      defaultValue: viewData?.day,
    },
    {
      name: "Comment",
      key: "comment",
      type: dataType.text,
      defaultValue: viewData?.comment,
    },
    {
      name: "Total amount",
      key: "total_amount",
      type: dataType.number,
      defaultValue: viewData?.total_amount,
    },
    {
      name: "Type",
      key: "type",
      type: dataType.text,
      defaultValue: viewData?.type,
    },
    {
      name: "Rego ID",
      key: "rego_id",
      type: dataType.text,
      defaultValue: JSON.stringify(viewData?.rego_id),
    },
    {
      name: "Odometer Start",
      key: "odo_start",
      type: dataType.number,
      defaultValue: JSON.stringify(viewData?.odo_start),
    },
    {
      name: "Odometer Start",
      key: "odo_finish",
      type: dataType.number,
      defaultValue: JSON.stringify(viewData?.odo_finish),
    },
    {
      name: "Distance",
      key: "distance",
      type: dataType.number,
      defaultValue: JSON.stringify(viewData?.distance),
    },
    {
      name: "Mileage",
      key: "milage",
      type: dataType.number,
      defaultValue: JSON.stringify(viewData?.milage),
    },
  ];
  const addNewid = async () => {
    setIsLoading(true);
    const res = await index.getApi(
      token.userToken.token,
      "vehicle_maintenance"
    );
    setlistdata(res.data.data);
    setIsLoading(false);
  };
  function updateItemHandler(enteredItemText) {
    const newobj = Object.fromEntries(
      Object.entries(enteredItemText).filter(([_, val]) => val !== "")
    );
    index.UpdateApi(
      token.userToken.token,
      newobj,
      dataID,
      "vehicle_maintenance"
    );
    setisvisible(false);
    setviewData("");
    addNewid();
  }

  function deleteDataHandler(id) {
    index.deleteApi(token.userToken.token, id, "vehicle_maintenance");
    addNewid();
  }

  async function updateHandler(id) {
    setdataID(id);
    const res = await index.getaApi(
      token.userToken.token,
      id,
      "vehicle_maintenance"
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
        <Text style={{ fontSize: 12 }}>Vehicle Maintenance</Text>
        <Pressable
          onPress={addHandler}
          style={styles.btnStyle}
          android_ripple={{ color: "#00580c" }}
        >
          <View>
            <Text style={{ color: "#ffffff" }}>Add Vehicle Maintenance</Text>
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
                name: "Repair Date",
                value: itemData?.item?.repair_date,
              },
              {
                name: "Repair Time",
                value: itemData?.item?.repair_time,
              },
              {
                name: "Day",
                value: itemData?.item?.day,
              },
              {
                name: "Comment",
                value: itemData?.item?.comment,
              },
              {
                name: "Total amount",
                value: itemData?.item?.total_amount,
              },
            ];
            const viewform = [
              {
                name: "Mechanic Id",
                key: "mechanic_id",
                type: dataType.number,
                value: JSON.stringify(itemData?.item?.mechanic_id),
              },
              {
                name: "Repair Date",
                key: "repair_date",
                type: dataType.text,
                value: itemData?.item?.repair_date,
              },
              {
                name: "Repair Time",
                key: "repair_time",
                type: dataType.text,
                value: itemData?.item?.repair_time,
              },
              {
                name: "Day",
                key: "Day",
                type: dataType.text,
                value: itemData?.item?.day,
              },
              {
                name: "Comment",
                key: "comment",
                type: dataType.text,
                value: itemData?.item?.comment,
              },
              {
                name: "Total amount",
                key: "total_amount",
                type: dataType.number,
                value: itemData?.item?.total_amount,
              },
              {
                name: "Type",
                key: "type",
                type: dataType.text,
                value: itemData?.item?.type,
              },
              {
                name: "Rego ID",
                key: "rego_id",
                type: dataType.text,
                value: JSON.stringify(itemData?.item?.rego_id),
              },
              {
                name: "Odometer Start",
                key: "odo_start",
                type: dataType.number,
                value: JSON.stringify(itemData?.item?.odo_start),
              },
              {
                name: "Odometer Start",
                key: "odo_finish",
                type: dataType.number,
                value: JSON.stringify(itemData?.item?.odo_finish),
              },
              {
                name: "Distance",
                key: "distance",
                type: dataType.number,
                value: JSON.stringify(itemData?.item?.distance),
              },
              {
                name: "Mileage",
                key: "milage",
                type: dataType.number,
                value: JSON.stringify(itemData?.item?.milage),
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

export default VehicleMaintenance;

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
