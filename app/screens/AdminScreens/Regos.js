import { StyleSheet, Text, View, Pressable, FlatList } from "react-native";
import React from "react";
import { useState, useEffect, useContext } from "react";
import InputModal from "../../components/InputFormSCreen";
import AppItem from "../../components/AppItem";
import dataType from "../../constants/dataType";
import index from "../../service/index";
import TokenContext from "../../service/context";
import LoadingScreen from "./LoadingScreen";
import ParentContainer from "../../components/ParentContainer";
import usePost from "../../hooks/usePost";
import endpoint from "../../service/endpoint";
import screenNames from "../../constants/screenNames";
import AdminListRendered from "../../components/AdminListRendered";
import useGet from "./../../hooks/useGet";
//redux toolkit
//include base 64 , quality 0.7 in image
const Regos = () => {
  const token = useContext(TokenContext);

  const [isvisible, setisvisible] = useState(false);
  const [updateData, setupdateData] = useState("");
  const [crud, setcrud] = useState("");
  const [listdata, setlistdata] = useState("");
  const [viewData, setviewData] = useState("");
  const [dataID, setdataID] = useState("");
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

  const [listData, setListData] = useState([]);

  const { refresh, loading } = useGet(endpoint.rego, handleGetRegoSuccess);

  function handleGetRegoSuccess(d) {
    let arr = [];
    d.forEach((item) => {
      const a = [
        {
          name: "Name",
          value: item.name,
          card: true,
        },
        {
          name: "Regos Rate",
          value: item.rego_rate,
          card: true,
        },
        {
          name: "Milage Threshold",
          value: JSON.stringify(item.milage_threshold),
          card: true,
        },
        {
          name: "Vehicle Type",
          value: item.vehicle_type,
        },
        {
          name: "CheckSheet Type",
          value: item.checksheet_type,
          card: true,
        },
        {
          name: "Plate No",
          value: item.plate_no,
          card: true,
        },

        {
          name: "Regos Rate",
          key: "rego_rate",
          type: dataType.text,
          value: item.rego_rate,
          card: true,
        },
        {
          name: "Milage Threshold",
          key: "milage_threshold",
          type: dataType.text,
          value: JSON.stringify(item.milage_threshold),
        },
        {
          name: "Vehicle Type",
          key: "vehicle_type",
          type: dataType.text,
          value: item.vehicle_type,
        },
        {
          name: "CheckSheet Type",
          key: "checksheet_type",
          type: dataType.text,
          value: item.checksheet_type,
        },
        {
          name: "Plate No",
          key: "plate_no",
          type: dataType.text,
          value: item.plate_no,
        },
        {
          name: "Year",
          key: "year",
          type: dataType.text,
          value: JSON.stringify(item.year),
        },
        {
          name: "Make",
          key: "make",
          type: dataType.text,
          value: item.make,
        },
        {
          name: "Model",
          key: "model",
          type: dataType.text,
          value: item.model,
        },
        {
          name: "Vin No",
          key: "vin_no",
          type: dataType.text,
          value: item.vin_no,
        },
        {
          name: "Engine No",
          key: "engine_no",
          type: dataType.text,
          value: item.engine_no,
        },
        {
          name: "Model No",
          key: "model_no",
          type: dataType.text,
          value: item.model_no,
        },
        {
          name: "Serial No",
          key: "serial_no",
          type: dataType.text,
          value: item.serial_no,
        },
        {
          name: "Fuel Type",
          key: "fuel_type",
          type: dataType.text,
          value: item.fuel_type,
        },
        {
          name: "Transmission Type",
          key: "transmission_type",
          type: dataType.text,
          value: item.transmission_type,
        },
        {
          name: "CC Rating",
          key: "cc_rating",
          type: dataType.text,
          value: item.cc_rating,
        },
        {
          name: "Current KMS",
          key: "current_kms",
          type: dataType.text,
          value: JSON.stringify(item.current_kms),
        },

        {
          name: "Service Due KMS",
          key: "service_due_kms",
          type: dataType.text,
          value: JSON.stringify(item.service_due_kms),
        },
        {
          name: "Service Due Date",
          key: "service_due_date",
          type: dataType.date,
          value: item.service_due_date,
        },
        {
          name: "WOF COF Due Date",
          key: "wof_cof_due_date",
          type: dataType.date,
          value: item.wof_cof_due_date,
        },
        {
          name: "Registration Due Date",
          key: "registration_due_date",
          type: dataType.date,
          value: item.registration_due_date,
        },
        {
          name: "Fire Extinguisher Due Date",
          key: "fire_extinguisher_due_date",
          type: dataType.date,
          value: item.fire_extinguisher_due_date,
        },
        {
          name: "First Aid Kit Due Dates",
          key: "first_aid_kit_due_dates",
          type: dataType.date,
          value: item.first_aid_kit_due_dates,
        },
      ];
      arr.push(a);
    });
    setListData(arr);
  }

  function handlePostRegoFail() {
    console.log("fail");
  }

  function deleteDataHandler(id) {
    index.deleteApi(token.userToken.token, id, "regos");
  }

  async function updateHandler(id) {
    setdataID(id);
    const res = await index.getaApi(token.userToken.token, id, "regos");
    setviewData(res?.data);
    setcrud("update");
    setisvisible(true);
  }
  const form = [
    {
      name: "Name",
      key: "name",
      type: dataType.text,
    },
    {
      name: "Regos Rate",
      key: "rego_rate",
      type: dataType.number,
    },
    {
      name: "Milage Threshold",
      key: "milage_threshold",
      type: dataType.number,
    },
    {
      name: "Vehicle Type",
      key: "vehicle_type",
      type: dataType.text,
    },
    {
      name: "CheckSheet Type",
      key: "checksheet_type",
      type: dataType.text,
    },
    {
      name: "Plate No",
      key: "plate_no",
      type: dataType.number,
    },
    {
      name: "Year",
      key: "year",
      type: dataType.text,
    },
    {
      name: "Make",
      key: "make",
      type: dataType.text,
    },
    {
      name: "Model",
      key: "model",
      type: dataType.text,
    },
    {
      name: "Vin No",
      key: "vin_no",
      type: dataType.number,
    },
    {
      name: "Engine No",
      key: "engine_no",
      type: dataType.number,
    },
    {
      name: "Model No",
      key: "model_no",
      type: dataType.number,
    },
    {
      name: "Serial No",
      key: "serial_no",
      type: dataType.number,
    },
    {
      name: "Fuel Type",
      key: "fuel_type",
      type: dataType.text,
    },
    {
      name: "Transmission Type",
      key: "transmission_type",
      type: dataType.text,
    },
    {
      name: "CC Rating",
      key: "cc_rating",
      type: dataType.text,
    },
    {
      name: "Current KMS",
      key: "current_kms",
      type: dataType.number,
    },
    {
      name: "Service Due KMS",
      key: "service_due_kms",
      type: dataType.number,
    },
    {
      name: "Service Due Date",
      key: "service_due_date",
      type: dataType.date,
    },
    {
      name: "WOF COF Due Date",
      key: "wof_cof_due_date",
      type: dataType.date,
    },
    {
      name: "Registration Due Date",
      key: "registration_due_date",
      type: dataType.date,
    },
    {
      name: "Fire Extinguisher Due Date",
      key: "fire_extinguisher_due_date",
      type: dataType.date,
    },
    {
      name: "First Aid Kit Due Dates",
      key: "first_aid_kit_due_dates",
      type: dataType.date,
    },
  ];
  const formProps = {
    backScreen: screenNames.REGOS,
    endpoint: endpoint.rego,
    form,
    title: "Add Regos",
  };
  return (
    <ParentContainer
      useScroll={false}
      title="Regos"
      addScreen={[screenNames.FORM_SCREEN, formProps]}
    >
      <AdminListRendered
        data={listData}
        onRefresh={refresh}
        loading={loading}
      />
    </ParentContainer>
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
