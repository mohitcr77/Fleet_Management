import { StyleSheet, Text, View, Pressable, FlatList } from "react-native";
import React from "react";
import { useState, useEffect, useContext } from "react";
import InputModal from "../components/InputModal";
import AppItem from "../components/AppItem";
import dataType from "../constants/dataType";
import index from "../service/index";
import TokenContext from "../service/context";
import LoadingScreen from "./LoadingScreen";
//redux toolkit
//include base 64 , quality 0.7 in image
const Regos = () => {
  const token = useContext(TokenContext);
  const [isLoading, setIsLoading] = useState(true);
  const [isvisible, setisvisible] = useState(false);
  const [updateData, setupdateData] = useState("");
  const [crud, setcrud] = useState("");
  const [listdata, setlistdata] = useState("");
  const [viewData, setviewData] = useState("");
  const [dataID, setdataID] = useState("");
  const getLoadingSreen = async () => {
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
    try {
      await sleep(2000);
    } finally {
      setIsLoading(false);
    }
  };

  //console.log(token.userToken.token);

  useEffect(() => {
    getLoadingSreen();
  }, []);
  const initialState = {
    name: "",
    rego_rate: "",
    milage_threshold: "",
    vehicle_type: "",
    checksheet_type: "",
    plate_no: "",
    year: "",
    make: "",
    model: "",
    vin_no: "",
    engine_no: "",
    model_no: "",
    serial_no: "",
    fuel_type: "",
    transmission_type: "",
    cc_rating: "",
    current_kms: "",
    service_due_kms: "",
    wof_cof_due_date: "",
    registration_due_date: "",
    fire_extinguisher_due_date: "",
    first_aid_kit_due_dates: "",
  };

  useEffect(() => {
    addNewid();
  }, []);
  //console.log(token.userToken.token);
  async function addItemHandler(enteredItemText) {
    console.log(enteredItemText);
    index.postRegoData(token.userToken.token, enteredItemText);
    const res = await index.getRegoData(token.userToken.token);
    setlistdata(res.data.data);
    setisvisible(false);
    addNewid();
  }

  const form = [
    {
      name: "Name",
      key: "name",
      type: dataType.text,
      defaultValue: viewData?.name,
    },
    {
      name: "Regos Rate",
      key: "rego_rate",
      type: dataType.text,
      defaultValue: viewData?.rego_rate,
    },
    {
      name: "Milage Threshold",
      key: "milage_threshold",
      type: dataType.text,
      defaultValue: JSON.stringify(viewData?.milage_threshold),
    },
    {
      name: "Vehicle Type",
      key: "vehicle_type",
      type: dataType.text,
      defaultValue: viewData?.vehicle_type,
    },
    {
      name: "CheckSheet Type",
      key: "checksheet_type",
      type: dataType.text,
      defaultValue: viewData?.checksheet_type,
    },
    {
      name: "Plate No",
      key: "plate_no",
      type: dataType.text,
      defaultValue: viewData?.plate_no,
    },
    {
      name: "Year",
      key: "year",
      type: dataType.text,
      defaultValue: JSON.stringify(viewData?.year),
    },
    {
      name: "Make",
      key: "make",
      type: dataType.text,
      defaultValue: viewData?.make,
    },
    {
      name: "Model",
      key: "model",
      type: dataType.text,
      defaultValue: viewData?.model,
    },
    {
      name: "Vin No",
      key: "vin_no",
      type: dataType.text,
      defaultValue: viewData?.vin_no,
    },
    {
      name: "Engine No",
      key: "engine_no",
      type: dataType.text,
      defaultValue: viewData?.engine_no,
    },
    {
      name: "Model No",
      key: "model_no",
      type: dataType.text,
      defaultValue: viewData?.model_no,
    },
    {
      name: "Serial No",
      key: "serial_no",
      type: dataType.text,
      defaultValue: viewData?.serial_no,
    },
    {
      name: "Fuel Type",
      key: "fuel_type",
      type: dataType.text,
      defaultValue: viewData?.fuel_type,
    },
    {
      name: "Transmission Type",
      key: "transmission_type",
      type: dataType.text,
      defaultValue: viewData?.transmission_type,
    },
    {
      name: "CC Rating",
      key: "cc_rating",
      type: dataType.text,
      defaultValue: viewData?.cc_rating,
    },
    {
      name: "Current KMS",
      key: "current_kms",
      type: dataType.text,
      defaultValue: JSON.stringify(viewData?.current_kms),
    },

    {
      name: "Service Due KMS",
      key: "service_due_kms",
      type: dataType.text,
      defaultValue: JSON.stringify(viewData?.service_due_kms),
    },
    {
      name: "Service Due Date",
      key: "service_due_date",
      type: dataType.date,
      defaultValue: viewData?.service_due_date,
    },
    {
      name: "WOF COF Due Date",
      key: "wof_cof_due_date",
      type: dataType.date,
      defaultValue: viewData?.wof_cof_due_date,
    },
    {
      name: "Registration Due Date",
      key: "registration_due_date",
      type: dataType.date,
      defaultValue: viewData?.registration_due_date,
    },
    {
      name: "Fire Extinguisher Due Date",
      key: "fire_extinguisher_due_date",
      type: dataType.date,
      defaultValue: viewData?.fire_extinguisher_due_date,
    },
    {
      name: "First Aid Kit Due Dates",
      key: "first_aid_kit_due_dates",
      type: dataType.date,
      defaultValue: viewData?.first_aid_kit_due_dates,
    },
  ];
  const addNewid = async () => {
    const res = await index.getRegoData(token.userToken.token);
    setlistdata(res.data.data);
  };
  function updateItemHandler(enteredItemText) {
    const newobj = Object.fromEntries(
      Object.entries(enteredItemText).filter(([_, val]) => val !== "")
    );
    index.UpdateRegoData(token.userToken.token, newobj, dataID);
    setisvisible(false);
    setviewData("");
    addNewid();
  }

  function deleteDataHandler(id) {
    index.deleteRegoData(token.userToken.token, id);
    addNewid();
  }

  async function updateHandler(id) {
    setdataID(id);
    const res = await index.getaRego(token.userToken.token, id);
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
        <Text style={{ fontSize: 20 }}>Regos List</Text>
        <Pressable
          onPress={addHandler}
          style={styles.btnStyle}
          android_ripple={{ color: "#00580c" }}
        >
          <View>
            <Text style={{ color: "#ffffff" }}>Add Regos</Text>
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
        {isLoading ? (
          <LoadingScreen />
        ) : (
          <FlatList
            data={listdata}
            renderItem={(itemData) => {
              const cardviewform = [
                {
                  name: "Name",
                  value: itemData.item.name,
                },
                {
                  name: "Regos Rate",
                  value: itemData.item.rego_rate,
                },
                {
                  name: "Milage Threshold",
                  value: JSON.stringify(itemData.item.milage_threshold),
                },
                {
                  name: "Vehicle Type",
                  value: itemData.item.vehicle_type,
                },
                {
                  name: "CheckSheet Type",
                  value: itemData.item.checksheet_type,
                },
                {
                  name: "Plate No",
                  value: itemData.item.plate_no,
                },
              ];
              const viewform = [
                {
                  name: "Name",
                  key: "name",
                  type: dataType.text,
                  value: itemData.item.name,
                },
                {
                  name: "Regos Rate",
                  key: "rego_rate",
                  type: dataType.text,
                  value: itemData.item.rego_rate,
                },
                {
                  name: "Milage Threshold",
                  key: "milage_threshold",
                  type: dataType.text,
                  value: JSON.stringify(itemData.item.milage_threshold),
                },
                {
                  name: "Vehicle Type",
                  key: "vehicle_type",
                  type: dataType.text,
                  value: itemData.item.vehicle_type,
                },
                {
                  name: "CheckSheet Type",
                  key: "checksheet_type",
                  type: dataType.text,
                  value: itemData.item.checksheet_type,
                },
                {
                  name: "Plate No",
                  key: "plate_no",
                  type: dataType.text,
                  value: itemData.item.plate_no,
                },
                {
                  name: "Year",
                  key: "year",
                  type: dataType.text,
                  value: JSON.stringify(itemData.item.year),
                },
                {
                  name: "Make",
                  key: "make",
                  type: dataType.text,
                  value: itemData.item.make,
                },
                {
                  name: "Model",
                  key: "model",
                  type: dataType.text,
                  value: itemData.item.model,
                },
                {
                  name: "Vin No",
                  key: "vin_no",
                  type: dataType.text,
                  value: itemData.item.vin_no,
                },
                {
                  name: "Engine No",
                  key: "engine_no",
                  type: dataType.text,
                  value: itemData.item.engine_no,
                },
                {
                  name: "Model No",
                  key: "model_no",
                  type: dataType.text,
                  value: itemData.item.model_no,
                },
                {
                  name: "Serial No",
                  key: "serial_no",
                  type: dataType.text,
                  value: itemData.item.serial_no,
                },
                {
                  name: "Fuel Type",
                  key: "fuel_type",
                  type: dataType.text,
                  value: itemData.item.fuel_type,
                },
                {
                  name: "Transmission Type",
                  key: "transmission_type",
                  type: dataType.text,
                  value: itemData.item.transmission_type,
                },
                {
                  name: "CC Rating",
                  key: "cc_rating",
                  type: dataType.text,
                  value: itemData.item.cc_rating,
                },
                {
                  name: "Current KMS",
                  key: "current_kms",
                  type: dataType.text,
                  value: JSON.stringify(itemData.item.current_kms),
                },

                {
                  name: "Service Due KMS",
                  key: "service_due_kms",
                  type: dataType.text,
                  value: JSON.stringify(itemData.item.service_due_kms),
                },
                {
                  name: "Service Due Date",
                  key: "service_due_date",
                  type: dataType.date,
                  value: itemData.item.service_due_date,
                },
                {
                  name: "WOF COF Due Date",
                  key: "wof_cof_due_date",
                  type: dataType.date,
                  value: itemData.item.wof_cof_due_date,
                },
                {
                  name: "Registration Due Date",
                  key: "registration_due_date",
                  type: dataType.date,
                  value: itemData.item.registration_due_date,
                },
                {
                  name: "Fire Extinguisher Due Date",
                  key: "fire_extinguisher_due_date",
                  type: dataType.date,
                  value: itemData.item.fire_extinguisher_due_date,
                },
                {
                  name: "First Aid Kit Due Dates",
                  key: "first_aid_kit_due_dates",
                  type: dataType.date,
                  value: itemData.item.first_aid_kit_due_dates,
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
        )}
      </View>
    </View>
  );
};

export default Regos;

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
    borderWidth: 2,
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
