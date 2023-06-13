import { StyleSheet, Text, View, Pressable, FlatList } from "react-native";
import React from "react";
import { useState, useEffect, useContext } from "react";
import InputModal from "../../components/InputFormSCreen";
import AppItem from "../../components/AppItem";
import dataType from "../../constants/dataType";
import index from "../../service/index";
import TokenContext from "../../service/context";
import LoadingScreen from "./LoadingScreen";

const ReportIssue = () => {
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
    shift: "",
    report_time: "",
    reported_by: "",
    report: "",
  };

  useEffect(() => {
    addNewid();
  }, []);

  async function addItemHandler(enteredItemText) {
    index.postApi(token.userToken.token, enteredItemText, "issues");
    const res = await index.getApi(token.userToken.token, "issues");
    setlistdata(res.data.data);
    setisvisible(false);
  }

  const form = [
    {
      name: "Date",
      key: "date",
      type: dataType.date,
      defaultValue: viewData?.date,
    },
    {
      name: "Shift",
      key: "shift",
      type: dataType.text,
      defaultValue: JSON.stringify(viewData?.shift),
    },
    {
      name: "Report time",
      key: "report_time",
      type: dataType.time,
      defaultValue: viewData?.report_time,
    },
    {
      name: "Reported by",
      key: "reported_by",
      type: dataType.text,
      defaultValue: viewData?.reported_by,
    },
    {
      name: "Report",
      key: "report",
      type: dataType.text,
      defaultValue: viewData?.report,
    },
  ];
  const addNewid = async () => {
    setIsLoading(true);
    const res = await index.getApi(token.userToken.token, "issues");
    setlistdata(res.data.data);
    setIsLoading(false);
  };
  function updateItemHandler(enteredItemText) {
    const newobj = Object.fromEntries(
      Object.entries(enteredItemText).filter(([_, val]) => val !== "")
    );
    index.UpdateApi(token.userToken.token, newobj, dataID, "issues");
    setisvisible(false);
    setviewData("");
  }

  function deleteDataHandler(id) {
    index.deleteApi(token.userToken.token, id, "issues");
  }

  async function updateHandler(id) {
    setdataID(id);
    const res = await index.getaApi(token.userToken.token, id, "issues");
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
    <ParentContainer>
      <View style={styles.topContainer}>
        <Text style={{ fontSize: 20 }}>Report List</Text>
        <Pressable
          onPress={addHandler}
          style={styles.btnStyle}
          android_ripple={{ color: "#00580c" }}
        >
          <View>
            <Text style={{ color: "#ffffff" }}>Report Issue</Text>
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
                name: "Shift",
                value: itemData?.item?.shift,
              },
              {
                name: "Report time",
                value: itemData?.item?.report_time,
              },
              {
                name: "Reported by",
                value: itemData?.item?.reported_by,
              },
              {
                name: "Report",
                value: itemData?.item?.report,
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
                name: "Shift",
                key: "shift",
                type: dataType.text,
                value: JSON.stringify(itemData?.item?.shift),
              },
              {
                name: "Report time",
                key: "report_time",
                type: dataType.time,
                value: itemData?.item?.report_time,
              },
              {
                name: "Reported by",
                key: "reported_by",
                type: dataType.text,
                value: itemData?.item?.reported_by,
              },
              {
                name: "Report",
                key: "report",
                type: dataType.text,
                value: itemData?.item?.report,
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
    </ParentContainer>
  );
};

export default ReportIssue;

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
