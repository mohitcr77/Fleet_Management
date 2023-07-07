import { Text } from "react-native";
import React from "react";
import ParentContainer from "../components/ParentContainer";

import screenNames from "../constants/screenNames";
import { driverEndpoints } from "../service/endpoint";
import dataType from "../constants/dataType";
import { DROPDOWN_LIST } from "../constants/entity";
import useAuth from "../hooks/useAuth";

export default function TimeSheet({ route }) {
  const { endpoint } = route.params;
  const { auth } = useAuth();

  const { id, company_id } = auth.user;

  const timeSheetForm = [
    {
      name: "Mechanic Id",
      key: "mechanic_id",
      type: dataType.number,
      value: id,
    },
    {
      name: "Company Id",
      key: "company_id",
      type: dataType.number,
      value: company_id,
    },

    {
      name: "Date",
      key: "date",
      type: dataType.date,
    },
    {
      name: "Start Time",
      key: "start_time",
      type: dataType.time,
    },
    {
      name: "End Time",
      key: "end_time",
      type: dataType.time,
    },
    {
      name: "Break",
      key: "break",
      type: dataType.dropdown,
      data: DROPDOWN_LIST.BREAK,
    },
    {
      name: "Driver Total",
      key: "driver_total",
      type: dataType.number,
    },
  ];

  const formProps = {
    backScreen: screenNames.TIME_SHEET_LIST_SCREEN,
    endpoint,
    form: timeSheetForm,
    title: "Time Sheet",
  };
  return (
    <ParentContainer
      useScroll={false}
      title="Time Sheet"
      addScreen={{
        name: screenNames.TIME_SHEET_FORM_SCREEN,
        params: formProps,
      }}
    >
      <Text>TimeSheet</Text>
    </ParentContainer>
  );
}
