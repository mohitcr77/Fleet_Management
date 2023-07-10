import { StyleSheet, Text, View, Pressable, FlatList } from "react-native";
import React from "react";
import { useState, useEffect, useContext } from "react";

import InputModal from "../../components/InputFormSCreen";
import AppItem from "../../components/AppItem";
import dataType from "../../constants/dataType";
import index from "../../service/index";
import LoadingScreen from "./LoadingScreen";
import ParentContainer from "../../components/ParentContainer";

const CompanyInfo = () => {
  const { token } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [isvisible, setisvisible] = useState(false);
  const [updateData, setupdateData] = useState("");
  const [crud, setcrud] = useState("");
  const [listdata, setlistdata] = useState("");
  const [viewData, setviewData] = useState("");
  const [dataID, setdataID] = useState("");
  const initialState = {
    name: "",
    company_mobile: "",
    company_address1: "",
    company_address2: "",
    country_id: "",
    state_id: "",
    city_id: "",
    company_gstin: "",
    company_office: "",
    pincode: "",
    payment_note: "",
    office_email: "",
  };

  useEffect(() => {
    addNewid();
  }, []);

  async function addItemHandler(enteredItemText) {
    index.postApi(token, enteredItemText, "company");
    const res = await index.getApi(token, "company");
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
      name: "Company Mobile",
      key: "company_mobile",
      type: dataType.text,
      defaultValue: viewData?.company_mobile,
    },
    {
      name: "Office Email",
      key: "office_email",
      type: dataType.text,
      defaultValue: viewData?.office_email,
    },
    {
      name: "Company address 1",
      key: "company_address1",
      type: dataType.text,
      defaultValue: viewData?.company_address1,
    },
    {
      name: "Company Address 2",
      key: "company_address2",
      type: dataType.text,
      defaultValue: viewData?.company_address2,
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
      name: "Company Gstin",
      key: "company_gstin",
      type: dataType.text,
      defaultValue: viewData?.company_gstin,
    },
    {
      name: "Company office",
      key: "company_office",
      type: dataType.text,
      defaultValue: viewData?.company_office,
    },
    {
      name: "Note",
      key: "payment_note",
      type: dataType.text,
      defaultValue: viewData?.payment_note,
    },
  ];
  const addNewid = async () => {
    setIsLoading(true);
    const res = await index.getApi(token, "company");
    setlistdata(res.data.data);
    setIsLoading(false);
  };
  function updateItemHandler(enteredItemText) {
    const newobj = Object.fromEntries(
      Object.entries(enteredItemText).filter(([_, val]) => val !== "")
    );
    index.UpdateApi(token, newobj, dataID, "company");
    setisvisible(false);
    setviewData("");
    addNewid();
  }

  function deleteDataHandler(id) {
    index.deleteApi(token, id, "company");
    addNewid();
  }

  async function updateHandler(id) {
    setdataID(id);
    const res = await index.getaApi(token, id, "company");
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
      <View style={{ flex: 10 }}>
        <View style={styles.topContainer}>
          <Text style={{ fontSize: 20 }}>Company List</Text>
          <Pressable
            onPress={addHandler}
            style={styles.btnStyle}
            android_ripple={{ color: "#00580c" }}
          >
            <View>
              <Text style={{ color: "#ffffff" }}>Add Company</Text>
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
                  value: itemData?.item?.name,
                },
                {
                  name: "Company Mobile",
                  value: JSON.stringify(itemData?.item?.company_mobile),
                },
                {
                  name: "Office Email",
                  value: itemData?.item?.office_email,
                },
                {
                  name: "Company address 1",
                  value: itemData?.item?.company_address1,
                },
                {
                  name: "Company Address 2",
                  value: itemData?.item?.company_address2,
                },
                {
                  name: "City",
                  value: itemData?.item?.city_id,
                },
              ];
              const viewform = [
                {
                  name: "Name",
                  key: "name",
                  type: dataType.text,
                  value: itemData?.item.name,
                },
                {
                  name: "Company Mobile",
                  key: "company_mobile",
                  type: dataType.text,
                  value: itemData?.item.company_mobile,
                },
                {
                  name: "Office Email",
                  key: "office_email",
                  type: dataType.text,
                  value: itemData?.item.office_email,
                },
                {
                  name: "Company address 1",
                  key: "company_address1",
                  type: dataType.text,
                  value: itemData?.item.company_address1,
                },
                {
                  name: "Company Address 2",
                  key: "company_address2",
                  type: dataType.text,
                  value: itemData?.item.company_address2,
                },
                {
                  name: "City",
                  key: "city_id",
                  type: dataType.city,
                  value: itemData?.item.city_id,
                },
                {
                  name: "State",
                  key: "state_id",
                  type: dataType.text,
                  value: itemData?.item.state_id,
                },
                {
                  name: "Country",
                  key: "country_id",
                  type: dataType.text,
                  value: itemData?.item.country_id,
                },
                {
                  name: "Company Gstin",
                  key: "company_gstin",
                  type: dataType.text,
                  value: itemData?.item.company_gstin,
                },
                {
                  name: "Company office",
                  key: "company_office",
                  type: dataType.text,
                  value: itemData?.item.company_office,
                },
                {
                  name: "Note",
                  key: "payment_note",
                  type: dataType.text,
                  value: itemData?.item.payment_note,
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
    </ParentContainer>
  );
};

export default CompanyInfo;

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
