import React from "react";
import { useState } from "react";
import dataType from "../../constants/dataType";
import ParentContainer from "../../components/ParentContainer";
import { adminEndpoints } from "../../service/endpoint";
import screenNames from "../../constants/screenNames";
import AdminListRendered from "../../components/AdminListRendered";
import useFetch from "../../hooks/useFetch";
import getNestedData from "../../helpers/getNestedData";

const ReportIssue = () => {
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
      name: "Report time",
      key: "report_time",
      type: dataType.time,
      value: null,
      card: true,
      mapKey: ["report_time"],
    },
    {
      name: "Shift",
      key: "shift",
      type: dataType.number,
      value: null,
      mapKey: ["shift"],
    },
    {
      name: "Reported by",
      key: "reported_by",
      type: dataType.text,
      value: null,
      mapKey: ["reported_by"],
    },
    {
      name: "Report",
      key: "report",
      type: dataType.text,
      value: null,
      mapKey: ["report"],
    },
  ];

  const [listData, setListData] = useState([]);

  const { refresh, loading } = useFetch({
    endpoint: adminEndpoints.report_issue,
    onSuccess: handleGetIssueSuccess,
  });

  function handleGetIssueSuccess(d) {
    let arr = [];
    d.data.data.forEach((item) => {
      let a = [];
      form.forEach((i) => a.push({ ...i, value: item[i.key] }));
      arr.push(a);
    });
    setListData(arr);
  }

  const formProps = {
    backScreen: screenNames.REPORT_ISSUE,
    endpoint: adminEndpoints.report_issue,
    form,
    title: "Add Issue",
  };

  return (
    <ParentContainer
      useScroll={false}
      title="Issue"
      addScreen={{ name: screenNames.FORM_SCREEN, params: formProps }}
    >
      <AdminListRendered
        data={listData}
        onRefresh={refresh}
        loading={loading}
        backScreen={screenNames.REPORT_ISSUE}
        listTitle={"Issue Details"}
        editTitle={"Edit Issue"}
        endpoint={adminEndpoints.report_issue}
      />
    </ParentContainer>
  );
};

export default ReportIssue;
