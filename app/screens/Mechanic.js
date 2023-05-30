import { StyleSheet, Text, View, Pressable, FlatList } from "react-native";
import React from "react";
import { useState, useEffect, useContext } from "react";
import InputModal from "../components/InputModal";
import AppItem from "../components/AppItem";
import dataType from "../constants/dataType";
import index from "../service/index";
import TokenContext from "../service/context";
import LoadingScreen from "./LoadingScreen";

const Mechanic = () => {
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
    repassword: "",
    current_address1: "",
    current_address2: "",
    current_state_id: "",
    current_city_id: "",
    country_id: "",
    availibility_status: "",
  };

  useEffect(() => {
    addNewid();
  }, []);

  async function addItemHandler(enteredItemText) {
    //console.log(enteredItemText);
    index.postApi(token.userToken.token, enteredItemText, "mechanic");
    const res = await index.getApi(token.userToken.token, "mechanic");
    setlistdata(res.data.data);
    setisvisible(false);
    addNewid();
  }
  //console.log(viewData?.user);

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
      name: "Address 1",
      key: "current_address_1",
      type: dataType.text,
      defaultValue: viewData?.user?.user_details?.current_address_1,
    },
    {
      name: "Address 2",
      key: "current_address_2",
      type: dataType.text,
      defaultValue: viewData?.user?.user_details?.current_address_2,
    },
    {
      name: "State",
      key: "state_id",
      type: dataType.state,
      defaultValue: viewData?.user?.user_details?.current_state_id,
    },
    {
      name: "City",
      key: "city_id",
      type: dataType.city,
      defaultValue: viewData?.user?.user_details?.current_city_id,
    },
    {
      name: "Country",
      key: "conutry_id",
      type: dataType.country,
      defaultValue: viewData?.user?.user_details?.current_conutry_id,
    },
    {
      name: "Availabilty Status",
      key: "availibility_status",
      type: dataType.text,
      defaultValue: viewData?.availibility_status,
    },
  ];
  const addNewid = async () => {
    setIsLoading(true);
    const res = await index.getApi(token.userToken.token, "mechanic");
    setlistdata(res.data.data);
    setIsLoading(false);
  };
  function updateItemHandler(enteredItemText) {
    const newobj = Object.fromEntries(
      Object.entries(enteredItemText).filter(([_, val]) => val !== "")
    );
    index.UpdateApi(token.userToken.token, newobj, dataID, "mechanic");
    setisvisible(false);
    setviewData("");
    addNewid();
  }

  function deleteDataHandler(id) {
    index.deleteApi(token.userToken.token, id, "mechanic");
    addNewid();
  }

  async function updateHandler(id) {
    setdataID(id);
    const res = await index.getaApi(token.userToken.token, id, "mechanic");
    //console.log(res?.data?.name);
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
        <Text style={{ fontSize: 20 }}>Mechanic List</Text>
        <Pressable
          onPress={addHandler}
          style={styles.btnStyle}
          android_ripple={{ color: "#00580c" }}
        >
          <View>
            <Text style={{ color: "#ffffff" }}>Add Mechanic</Text>
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
                  value: itemData?.item?.user?.name,
                },
                {
                  name: "Email",
                  value: itemData?.item?.user?.email,
                },
                {
                  name: "Address 1",
                  value: itemData?.item?.user?.user_details?.current_address_1,
                },
                {
                  name: "Address 2",
                  value: itemData?.item?.user?.user_details?.current_address_2,
                },
                {
                  name: "Availabilty Status",
                  value: itemData?.item?.availibility_status,
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
                  name: "Re-enter Password",
                  key: "repassword",
                  type: dataType.password,
                  value: itemData?.item?.repassword,
                },
                {
                  name: "Address 1",
                  key: "address1",
                  type: dataType.text,
                  value: itemData?.item?.user?.user_details?.currrent_address_1,
                },
                {
                  name: "Address 2",
                  key: "address2",
                  type: dataType.text,
                  value: itemData?.item?.user?.user_details?.currrent_address_2,
                },
                {
                  name: "State",
                  key: "state_id",
                  type: dataType.state,
                  value: itemData?.item?.user?.user_details?.current_state_id,
                },
                {
                  name: "City",
                  key: "city_id",
                  type: dataType.city,
                  value: itemData?.item?.user?.user_details?.current_city_id,
                },
                {
                  name: "Country",
                  key: "conutry_id",
                  type: dataType.country,
                  value: itemData?.item?.user?.user_details?.current_conutry_id,
                },
                {
                  name: "Availabilty Status",
                  key: "availability_status",
                  type: dataType.city,
                  value:
                    itemData?.item?.user?.user_details?.availability_status,
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

export default Mechanic;

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
