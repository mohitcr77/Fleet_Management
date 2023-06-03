import { StyleSheet, Text, View, Pressable, FlatList } from "react-native";
import React from "react";
import { useState, useEffect, useContext } from "react";
import InputModal from "../../components/InputModal";
import AppItem from "../../components/AppItem";
import dataType from "../../constants/dataType";
import index from "../../service/index";
import TokenContext from "../../service/context";
import LoadingScreen from "./LoadingScreen";

const Staff = () => {
  const token = useContext(TokenContext);
  const [isLoading, setIsLoading] = useState(true);
  const [isvisible, setisvisible] = useState(false);
  const [updateData, setupdateData] = useState("");
  const [crud, setcrud] = useState("");
  const [listdata, setlistdata] = useState("");
  const [viewData, setviewData] = useState("");
  const [dataID, setdataID] = useState("");
  const initialState = {
    name: "",
    email: "",
    password: "",
    address1: "",
    address2: "",
    state_id: "",
    city_id: "",
    country_id: "",
    hire_date: "",
    date_of_birth: "",
    pincode: "",
    select_staff_type: "",
    certification: "",
    licence_number: "",
    licence_expiry: "",
    other_staff: "",
  };

  useEffect(() => {
    addNewid();
    //index.poststaff(token.userToken.token, "");
  }, []);

  async function addItemHandler(enteredItemText) {
    index.postApi(token.userToken.token, enteredItemText, "staff");
    const res = await index.getApi(token.userToken.token, "staff");
    setlistdata(res.data.data);
    setisvisible(false);
    addNewid();
  }

  const form = [
    {
      name: "Name",
      key: "name",
      type: dataType.text,
      defaultValue: viewData?.user?.name,
    },
    {
      name: "Email",
      key: "email",
      type: dataType.text,
      defaultValue: viewData?.user?.email,
    },
    {
      name: "Mobile",
      key: "mobile",
      type: dataType.text,
      defaultValue: viewData?.user?.user_details?.email,
    },
    {
      name: "Password",
      key: "password",
      type: dataType.password,
      defaultValue: viewData?.password,
    },
    {
      name: "Re-enter Password",
      key: "repassword",
      type: dataType.password,
      defaultValue: viewData?.repassword,
    },
    {
      name: "address 1",
      key: "address1",
      type: dataType.text,
      defaultValue: viewData?.user?.user_details?.current_address_1,
    },
    {
      name: "Address 2",
      key: "address2",
      type: dataType.text,
      defaultValue: viewData?.user?.user_details?.current_address_2,
    },
    {
      name: "City",
      key: "city_id",
      type: dataType.city,
      defaultValue: viewData?.city_id,
    },
    {
      name: "State",
      key: "state_id",
      type: dataType.state,
      defaultValue: viewData?.state_id,
    },
    {
      name: "Country",
      key: "country_id",
      type: dataType.country,
      defaultValue: viewData?.country_id,
    },
    {
      name: "Hire Date",
      key: "hire_date",
      type: dataType.date,
      defaultValue: viewData?.hire_date,
    },
    {
      name: "Date of birth",
      key: "date_of_birth",
      type: dataType.date,
      defaultValue: viewData?.date_of_birth,
    },
    {
      name: "Pincode",
      key: "pincode",
      type: dataType.text,
      defaultValue: viewData?.pincode,
    },
    {
      name: "Select Staff Type",
      key: "select_staff_type",
      type: dataType.text,
      defaultValue: viewData?.select_staff_type,
    },
    {
      name: "Certifiation",
      key: "certification",
      type: dataType.text,
      defaultValue: viewData?.certification,
    },
    {
      name: "Licence Number",
      key: "licence_number",
      type: dataType.text,
      defaultValue: viewData?.liscence_number,
    },
    {
      name: "Licence Expiry",
      key: "licence_expiry",
      type: dataType.text,
      defaultValue: viewData?.licence_expiry,
    },
    {
      name: "Other Staff",
      key: "other_staff",
      type: dataType.text,
      defaultValue: viewData?.other_staff,
    },
  ];
  const addNewid = async () => {
    setIsLoading(true);
    const res = await index.getApi(token.userToken.token, "staff");
    setlistdata(res.data.data);
    setIsLoading(false);
  };
  function updateItemHandler(enteredItemText) {
    const newobj = Object.fromEntries(
      Object.entries(enteredItemText).filter(([_, val]) => val !== "")
    );
    index.UpdateApi(token.userToken.token, newobj, dataID, "staff");
    setisvisible(false);
    setviewData("");
  }

  function deleteDataHandler(id) {
    index.deleteApi(token.userToken.token, id, "staff");
    addNewid();
  }

  async function updateHandler(id) {
    setdataID(id);
    const res = await index.getaApi(token.userToken.token, id, "staff");
    setviewData(res?.data);
    setcrud("update");
    setisvisible(true);
    addNewid();
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
        <Text style={{ fontSize: 20 }}>Staff List</Text>
        <Pressable
          onPress={addHandler}
          style={styles.btnStyle}
          android_ripple={{ color: "#00580c" }}
        >
          <View>
            <Text style={{ color: "#ffffff" }}>Add Staff</Text>
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
                name: "Name",
                key: "name",
                type: dataType.text,
                value: itemData?.item?.user?.name,
              },
              {
                name: "Email",
                key: "email",
                type: dataType.text,
                value: itemData?.item?.user?.email,
              },
              {
                name: "address 1",
                key: "address1",
                type: dataType.text,
                value: itemData?.item?.user?.user_details?.current_address_1,
              },
              {
                name: "Address 2",
                key: "address2",
                type: dataType.text,
                value: itemData?.item?.user?.user_details?.current_address_2,
              },
              {
                name: "Hire Date",
                key: "hire_date",
                type: dataType.date,
                value: itemData?.item?.hire_date,
              },
              {
                name: "Date of birth",
                key: "date_of_birth",
                type: dataType.date,
                value: itemData?.item?.date_of_birth,
              },
            ];
            const viewform = [
              {
                name: "Name",
                key: "name",
                type: dataType.text,
                value: itemData?.item?.user?.name,
              },
              {
                name: "Email",
                key: "email",
                type: dataType.text,
                value: itemData?.item?.user?.email,
              },
              {
                name: "Password",
                key: "password",
                type: dataType.password,
                value: itemData?.item?.password,
              },
              {
                name: "address 1",
                key: "address1",
                type: dataType.text,
                value: itemData?.item?.user?.user_details?.current_address_1,
              },
              {
                name: "Address 2",
                key: "address2",
                type: dataType.text,
                value: itemData?.item?.user?.user_details?.current_address_2,
              },
              {
                name: "Mobile",
                key: "mobile",
                type: dataType.city,
                value: itemData?.item?.user?.user_details?.mobile,
              },
              {
                name: "City",
                key: "city_id",
                type: dataType.city,
                value: itemData?.item?.city_id,
              },
              {
                name: "State",
                key: "state_id",
                type: dataType.state,
                value: itemData?.item?.state_id,
              },
              {
                name: "Country",
                key: "country_id",
                type: dataType.country,
                value: itemData?.item?.country_id,
              },
              {
                name: "Hire Date",
                key: "hire_date",
                type: dataType.date,
                value: itemData?.item?.hire_date,
              },
              {
                name: "Date of birth",
                key: "date_of_birth",
                type: dataType.date,
                value: itemData?.item?.date_of_birth,
              },
              {
                name: "Pincode",
                key: "pincode",
                type: dataType.text,
                value: itemData?.item?.pincode,
              },
              {
                name: "Select Staff Type",
                key: "select_staff_type",
                type: dataType.text,
                value: itemData?.item?.select_staff_type,
              },
              {
                name: "Certifiation",
                key: "certification",
                type: dataType.text,
                value: itemData?.item?.certification,
              },
              {
                name: "Licence Number",
                key: "liscence_number",
                type: dataType.text,
                value: itemData?.item?.liscence_number,
              },
              {
                name: "Licence Expiry",
                key: "licence_expiry",
                type: dataType.text,
                value: itemData?.item?.licence_expiry,
              },
              {
                name: "Other Staff",
                key: "other_staff",
                type: dataType.text,
                value: itemData?.item?.other_staff,
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

export default Staff;

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
