import { StyleSheet, Text, View, Pressable, FlatList } from "react-native";
import React from "react";
import { useState, useEffect, useContext } from "react";
import InputModal from "../../components/InputModal";
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

  const { data } = useGet(endpoint.rego, handleGetRegoSuccess);

  function handleGetRegoSuccess(d) {
    setlistdata(d);
    let arr = [];
    console.log(d, "success");
    d.forEach((item) => {
      const cardData = [
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
      const viewData = [
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
    });
    setListData(d);
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
      <AdminListRendered data={[1, 2, 3, 4, 5, 6]} />

      <View style={styles.listStyle}>
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
      </View>
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
