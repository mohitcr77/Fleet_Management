import { StyleSheet } from "react-native";
import React from "react";
import { useState } from "react";
import dataType from "../../constants/dataType";
import ParentContainer from "../../components/ParentContainer";
import endpoint from "../../service/endpoint";
import screenNames from "../../constants/screenNames";
import AdminListRendered from "../../components/AdminListRendered";
import useFetch from "../../hooks/useFetch";
import getNestedData from "../../helpers/getNestedData";

const Staff = () => {
  const form = [
    {
      name: "Id#",
      key: "id",
      type: dataType.number,
      value: null,
      card: true,
      mapKey: ["id"],
    },
    {
      name: "Name",
      key: "name",
      type: dataType.text,
      value: null,
      mapKey: [""],
    },
    {
      name: "Email",
      key: "email",
      type: dataType.text,
      value: null,
      mapKey: [""],
    },
    {
      name: "Mobile",
      key: "mobile",
      type: dataType.text,
      value: null,
      mapKey: [""],
    },
    {
      name: "Password",
      key: "password",
      type: dataType.password,
      value: null,
      mapKey: [""],
    },
    {
      name: "Re-enter Password",
      key: "repassword",
      type: dataType.password,
      value: null,
      mapKey: [""],
    },
    {
      name: "address 1",
      key: "address1",
      type: dataType.text,
      value: null,
      mapKey: [""],
    },
    {
      name: "Address 2",
      key: "address2",
      type: dataType.text,
      value: null,
      mapKey: [""],
    },
    {
      name: "Country",
      key: "country_id",
      type: dataType.country,
      value: null,
      mapKey: ["country_id", "state_id", "city_id"],
    },
    {
      name: "State",
      key: "state_id",
      type: dataType.state,
      value: null,
      mapKey: [""],
    },
    {
      name: "City",
      key: "city_id",
      type: dataType.city,
      value: null,
      mapKey: [""],
    },
    {
      name: "Hire Date",
      key: "hire_date",
      type: dataType.date,
      value: null,
      card: true,
      mapKey: ["hire_date"],
    },
    {
      name: "Date of birth",
      key: "date_of_birth",
      type: dataType.date,
      value: null,
      card: true,
      mapKey: ["date_of_birth"],
    },
    {
      name: "Pincode",
      key: "pincode",
      type: dataType.text,
      value: null,
      card: true,
      mapKey: ["pincode"],
    },
    {
      name: "Select Staff Type",
      key: "select_staff_type",
      type: dataType.text,
      value: null,
      mapKey: ["select_staff_type"],
    },
    {
      name: "Certification",
      key: "certification",
      type: dataType.text,
      value: null,
      mapKey: ["certification"],
    },
    {
      name: "License Number",
      key: "licence_number",
      type: dataType.text,
      value: null,
      mapKey: ["licence_number"],
    },
    {
      name: "License Expiry",
      key: "licence_expiry",
      type: dataType.text,
      value: null,
      mapKey: ["licence_expiry"],
    },
    {
      name: "Other Staff",
      key: "other_staff",
      type: dataType.text,
      value: null,
      mapKey: ["other_staff"],
    },
  ];
  const [listData, setListData] = useState([]);

  const { refresh, loading } = useFetch(endpoint.staff, handleGetStaffSuccess);

  function handleGetStaffSuccess(d) {
    let arr = [];
    d.data.data.forEach((item) => {
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
