import { StyleSheet } from "react-native";
import React from "react";
import { useState } from "react";
import dataType from "../../constants/dataType";
import ParentContainer from "../../components/ParentContainer";
import endpoint from "../../service/endpoint";
import screenNames from "../../constants/screenNames";
import AdminListRendered from "../../components/AdminListRendered";
import useGet from "./../../hooks/useGet";

const Staff = () => {
  const form = [
    {
      name: "Id#",
      key: "id",
      type: dataType.number,
      value: null,
      card: true,
    },
    {
      name: "Name",
      key: "name",
      type: dataType.text,
      value: null,
      card: true
    },
    {
      name: "Email",
      key: "email",
      type: dataType.text,
      value: null,
      card: true
    },
    {
      name: "Mobile",
      key: "mobile",
      type: dataType.text,
      value: null,
      card: true
    },
    {
      name: "Password",
      key: "password",
      type: dataType.password,
      value: null,
      card: true
    },
    {
      name: "Re-enter Password",
      key: "repassword",
      type: dataType.password,
      value: null,
      card: true
    },
    {
      name: "address 1",
      key: "address1",
      type: dataType.text,
      value: null,
    },
    {
      name: "Address 2",
      key: "address2",
      type: dataType.text,
      value: null,
    },
    {
      name: "City",
      key: "city_id",
      type: dataType.city,
      value: null,
    },
    {
      name: "State",
      key: "state_id",
      type: dataType.state,
      value: null,
    },
    {
      name: "Country",
      key: "country_id",
      type: dataType.country,
      value: null,
    },
    {
      name: "Hire Date",
      key: "hire_date",
      type: dataType.date,
      value: null,
    },
    {
      name: "Date of birth",
      key: "date_of_birth",
      type: dataType.date,
      value: null,
    },
    {
      name: "Pincode",
      key: "pincode",
      type: dataType.text,
      value: null,
    },
    {
      name: "Select Staff Type",
      key: "select_staff_type",
      type: dataType.text,
      value: null,
    },
    {
      name: "Certifiation",
      key: "certification",
      type: dataType.text,
      value: null,
    },
    {
      name: "Licence Number",
      key: "licence_number",
      type: dataType.text,
      value: null,
    },
    {
      name: "Licence Expiry",
      key: "licence_expiry",
      type: dataType.text,
      value: null,
    },
    {
      name: "Other Staff",
      key: "other_staff",
      type: dataType.text,
      value: null,
    },
  ];
  const [listData, setListData] = useState([]);

  const { refresh, loading } = useGet(endpoint.staff, handleGetStaffSuccess);

  function handleGetStaffSuccess(d) {
    let arr = [];
    d.forEach((item) => {
      let a = [];
      form.forEach((i) => a.push({ ...i, value: item[i.key] }));
      arr.push(a);
    });
    setListData(arr);
  }

  const formProps = {
    backScreen: screenNames.STAFF,
    endpoint: endpoint.staff,
    form,
    title: "Add Staff",
  };

  return (
    <ParentContainer
      useScroll={false}
      title="Staff"
      addScreen={{ name: screenNames.FORM_SCREEN, params: formProps }}
    >
      <AdminListRendered
        data={listData}
        onRefresh={refresh}
        loading={loading}
        backScreen={screenNames.STAFF}
        listTitle={"Staff Details"}
        editTitle={"Edit Staff"}
        endpoint={endpoint.staff}
      />
    </ParentContainer>
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
