import { StyleSheet, Text, View, Pressable, FlatList } from "react-native";
import React from "react";
import { useState, useEffect, useContext } from "react";
import InputModal from "../components/InputModal";
import AppItem from "../components/AppItem";
import dataType from "../constants/dataType";
import index from "../service/index";
import TokenContext from "../service/context";
import LoadingScreen from "./LoadingScreen";

const JobEntry = () => {
  const token = useContext(TokenContext);
  const [isLoading, setIsLoading] = useState(true);
  const [isvisible, setisvisible] = useState(false);
  const [updateData, setupdateData] = useState("");
  const [crud, setcrud] = useState("");
  const [listdata, setlistdata] = useState("");
  const [viewData, setviewData] = useState("");
  const [dataID, setdataID] = useState("");
  const initialState = {
    date: "",
    day: "",
    client_id: "",
    job_no: "",
    time: "",
    day_start: "",
    day_finish: "",
    day_total: "",
    docket_no: "",
    docket_hours: "",
    invoice_no: "",
    driver_id: "",
    rego_id: "",
    rego_planned_id: "",
    color_id: "",
    travel_time: "",
    admin_dstart: "",
    long_url: "",
    short_url: "",
    link_id: "",
    comment: "",
  };

  useEffect(() => {
    addNewid();
  }, []);

  async function addItemHandler(enteredItemText) {
    console.log(enteredItemText);
    index.postApi(token.userToken.token, enteredItemText, "jobs");
    const res = await index.getApi(token.userToken.token, "jobs");
    setlistdata(res.data.data);
    setisvisible(false);
    addNewid();
  }

  const form = [
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
      name: "Client_id",
      key: "client_id",
      type: dataType.text,
      defaultValue: JSON.stringify(viewData?.client_id),
    },
    {
      name: "Job number",
      key: "job_no",
      type: dataType.text,
      defaultValue: viewData?.job_no,
    },
    {
      name: "Time",
      key: "time",
      type: dataType.time,
      defaultValue: viewData?.time,
    },
    {
      name: "Day Start",
      key: "day_start",
      type: dataType.time,
      defaultValue: viewData?.day_start,
    },
    {
      name: "Day Finish",
      key: "day_finish",
      type: dataType.time,
      defaultValue: viewData?.day_finish,
    },
    {
      name: "Day Total",
      key: "day_total",
      type: dataType.time,
      defaultValue: viewData?.day_total,
    },
    {
      name: "Docket number",
      key: "docket_no",
      type: dataType.text,
      defaultValue: viewData?.docket_no,
    },
    {
      name: "Docket hours",
      key: "docket_hours",
      type: dataType.text,
      defaultValue: viewData?.docket_hours,
    },
    {
      name: "Invoice no.",
      key: "invoice_no",
      type: dataType.text,
      defaultValue: viewData?.invoice_no,
    },
    {
      name: "Driver ID",
      key: "driver_id",
      type: dataType.text,
      defaultValue: JSON.stringify(viewData?.driver_id),
    },
    {
      name: "Rego ID",
      key: "rego_id",
      type: dataType.text,
      defaultValue: JSON.stringify(viewData?.rego_id),
    },
    {
      name: "Rego planned ID",
      key: "rego_planned_id",
      type: dataType.text,
      defaultValue: JSON.stringify(viewData?.rego_planned_id),
    },
    {
      name: "Color ID",
      key: "color_id",
      type: dataType.text,
      defaultValue: JSON.stringify(viewData?.color_id),
    },
    {
      name: "Travel time",
      key: "travel_time",
      type: dataType.time,
      defaultValue: viewData?.travel_time,
    },
    {
      name: "Admin dstart",
      key: "admin_dstart",
      type: dataType.text,
      defaultValue: viewData?.admin_dstart,
    },
    {
      name: "Long URL",
      key: "long_url",
      type: dataType.text,
      defaultValue: viewData?.long_url,
    },
    {
      name: "Short URL",
      key: "short_url",
      type: dataType.text,
      defaultValue: viewData?.short_url,
    },
    {
      name: "Link_id",
      key: "link_id",
      type: dataType.text,
      defaultValue: viewData?.link_id,
    },
    {
      name: "Comment",
      key: "comment",
      type: dataType.text,
      defaultValue: viewData?.comment,
    },
  ];
  const addNewid = async () => {
    setIsLoading(true);
    const res = await index.getApi(token.userToken.token, "jobs");
    setlistdata(res.data.data);
    setIsLoading(false);
  };
  function updateItemHandler(enteredItemText) {
    const newobj = Object.fromEntries(
      Object.entries(enteredItemText).filter(([_, val]) => val !== "")
    );
    index.UpdateApi(token.userToken.token, newobj, dataID, "jobs");
    setisvisible(false);
    setviewData("");
    addNewid();
  }

  function deleteDataHandler(id) {
    index.deleteApi(token.userToken.token, id, "jobs");
    addNewid();
  }

  async function updateHandler(id) {
    setdataID(id);
    const res = await index.getaApi(token.userToken.token, id, "jobs");
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
        <Text style={{ fontSize: 20 }}>Job List</Text>
        <Pressable
          onPress={addHandler}
          style={styles.btnStyle}
          android_ripple={{ color: "#00580c" }}
        >
          <View>
            <Text style={{ color: "#ffffff" }}>Add Job</Text>
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
                  name: "Date",
                  value: itemData?.item?.date,
                },
                {
                  name: "Day",
                  value: itemData?.item?.day,
                },
                {
                  name: "Client_id",
                  value: itemData?.item?.client_id,
                },
                {
                  name: "Job number",
                  value: itemData?.item?.job_no,
                },
                {
                  name: "Time",
                  value: itemData?.item?.time,
                },
                {
                  name: "Day Start",
                  value: itemData?.item?.day_finish,
                },
              ];
              const viewform = [
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
                  name: "Client_id",
                  key: "client_id",
                  type: dataType.text,
                  value: JSON.stringify(itemData?.item?.client_id),
                },
                {
                  name: "Job number",
                  key: "job_no",
                  type: dataType.text,
                  value: itemData?.item?.job_no,
                },
                {
                  name: "Time",
                  key: "time",
                  type: dataType.time,
                  value: itemData?.item?.time,
                },
                {
                  name: "Day Start",
                  key: "day_finish",
                  type: dataType.date,
                  value: itemData?.item?.day_finish,
                },
                {
                  name: "Day Total",
                  key: "day_total",
                  type: dataType.text,
                  value: itemData?.item?.day_total,
                },
                {
                  name: "Docket number",
                  key: "docket_no",
                  type: dataType.country,
                  value: itemData?.item?.docket_no,
                },
                {
                  name: "Docket hours",
                  key: "docket_hours",
                  type: dataType.text,
                  value: itemData?.item?.docket_hours,
                },
                {
                  name: "Invoice no.",
                  key: "invoice_no",
                  type: dataType.text,
                  value: itemData?.item?.invoice_no,
                },
                {
                  name: "Driver ID",
                  key: "driver_id",
                  type: dataType.text,
                  value: JSON.stringify(itemData?.item?.driver_id),
                },
                {
                  name: "Rego ID",
                  key: "rego_id",
                  type: dataType.text,
                  value: JSON.stringify(itemData?.item?.rego_id),
                },
                {
                  name: "Rego planned ID",
                  key: "rego_planned_id",
                  type: dataType.text,
                  value: JSON.stringify(itemData?.item?.rego_planned_id),
                },
                {
                  name: "Color ID",
                  key: "color_id",
                  type: dataType.text,
                  value: JSON.stringify(itemData?.item?.color_id),
                },
                {
                  name: "Travel time",
                  key: "travel_time",
                  type: dataType.time,
                  value: itemData?.item?.travel_time,
                },
                {
                  name: "Admin dstart",
                  key: "admin_dstart",
                  type: dataType.text,
                  value: itemData?.item?.admin_dstart,
                },
                {
                  name: "Long URL",
                  key: "long_url",
                  type: dataType.text,
                  value: itemData?.item?.long_url,
                },
                {
                  name: "Short URL",
                  key: "short_url",
                  type: dataType.text,
                  value: itemData?.item?.short_url,
                },
                {
                  name: "Link_id",
                  key: "link_id",
                  type: dataType.text,
                  value: itemData?.item?.link_id,
                },
                {
                  name: "Comment",
                  key: "comment",
                  type: dataType.text,
                  value: itemData?.item?.comment,
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

export default JobEntry;

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 40,
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
