import React from "react";
import { useState } from "react";
import dataType from "../../constants/dataType";
import ParentContainer from "../../components/ParentContainer";
import endpoint from "../../service/endpoint";
import screenNames from "../../constants/screenNames";
import AdminListRendered from "../../components/AdminListRendered";
import useFetch from "../../hooks/useFetch";
import getNestedData from "../../helpers/getNestedData";
import { DROPDOWN_LIST } from "../../constants/entity";

const JobEntry = () => {
  const [listData, setListData] = useState([]);

  const { refresh, loading } = useFetch(endpoint.job, handleGetJobSuccess);

  function handleGetJobSuccess(d) {
    let arr = [];
    d.data.data.forEach((item) => {
      let a = [];
      form.forEach((i) => {
        const value = getNestedData(item, i.mapKey);
        a.push({ ...i, value });
      });
      arr.push(a);
    });
    setListData(arr);
  }

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
      name: "Date",
      key: "date",
      type: dataType.date,
      value: null,
      card: true,
      mapKey: ["date"],
    },
    {
      name: "Day",
      key: "day",
      type: dataType.dropdown,
      data: DROPDOWN_LIST.DAYS,
      value: null,
      card: true,
      mapKey: ["day"],
    },
    {
      name: "Client",
      key: "client_id",
      type: dataType.dropdown,
      data: DROPDOWN_LIST.CLIENTS,
      value: null,
      card: true,
      mapKey: ["client_id"],
    },
    {
      name: "Job number",
      key: "job_no",
      type: dataType.number,
      value: null,
      card: true,
      mapKey: ["job_no"],
    },
    {
      name: "Time",
      key: "time",
      type: dataType.time,
      value: null,
      card: true,
      mapKey: ["time"],
    },
    {
      name: "Day Start",
      key: "day_start",
      type: dataType.time,
      value: null,
      mapKey: ["day_start"],
    },
    {
      name: "Day Finish",
      key: "day_finish",
      type: dataType.time,
      value: null,
      mapKey: ["day_finish"],
    },
    {
      name: "Day Total",
      key: "day_total",
      type: dataType.time,
      value: null,
      mapKey: ["day_total"],
    },
    {
      name: "Docket number",
      key: "docket_no",
      type: dataType.number,
      value: null,
      mapKey: ["docket_no"],
    },
    {
      name: "Docket hours",
      key: "docket_hours",
      type: dataType.number,
      value: null,
      mapKey: ["docket_hours"],
    },
    {
      name: "Invoice no.",
      key: "invoice_no",
      type: dataType.number,
      value: null,
      mapKey: ["invoice_no"],
    },
    {
      name: "Driver",
      key: "driver_id",
      type: dataType.dropdown,
      data: DROPDOWN_LIST.DRIVERS,
      value: null,
      mapKey: ["driver_id"],
    },
    {
      name: "Rego",
      key: "rego_id",
      type: dataType.dropdown,
      data: DROPDOWN_LIST.REGOS,
      value: null,
      mapKey: ["rego_id"],
    },
    {
      name: "Rego planned",
      key: "rego_planned_id",
      type: dataType.dropdown,
      data: DROPDOWN_LIST.REGOS,
      value: null,
      mapKey: ["rego_planned_id"],
    },
    {
      name: "Color",
      key: "color_id",
      type: dataType.dropdown,
      data: DROPDOWN_LIST.COLORS,
      value: null,
      mapKey: ["color_id"],
    },
    {
      name: "Travel time",
      key: "travel_time",
      type: dataType.number,
      value: null,
      mapKey: ["travel_time"],
    },
    {
      name: "Admin dstart",
      key: "admin_dstart",
      type: dataType.time,
      value: null,
      mapKey: ["admin_dstart"],
    },
    {
      name: "Long URL",
      key: "long_url",
      type: dataType.text,
      value: null,
      mapKey: ["long_url"],
    },
    {
      name: "Short URL",
      key: "short_url",
      type: dataType.text,
      value: null,
      mapKey: ["short_url"],
    },
    {
      name: "Link",
      key: "link_id",
      type: dataType.text,
      value: null,
      mapKey: ["link_id"],
    },
    {
      name: "Comment",
      key: "comment",
      type: dataType.text,
      value: null,
      mapKey: ["comment"],
    },
  ];
  const formProps = {
    backScreen: screenNames.JOB_ENTRY,
    endpoint: endpoint.job,
    form,
    title: "Add Job",
  };

  return (
    <ParentContainer
      useScroll={false}
      title="Jobs"
      addScreen={{ name: screenNames.FORM_SCREEN, params: formProps }}
    >
      <AdminListRendered
        data={listData}
        onRefresh={refresh}
        loading={loading}
        backScreen={screenNames.JOB_ENTRY}
        listTitle={"Job Details"}
        editTitle={"Edit Job"}
        endpoint={endpoint.job}
      />
    </ParentContainer>
  );
};

export default JobEntry;
