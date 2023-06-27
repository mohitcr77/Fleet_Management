import React from "react";
import { useState } from "react";
import dataType from "../../constants/dataType";
import ParentContainer from "../../components/ParentContainer";
import { adminEndpoints } from "../../service/endpoint";
import screenNames from "../../constants/screenNames";
import AdminListRendered from "../../components/AdminListRendered";
import useFetch from "../../hooks/useFetch";
import getNestedData from "../../helpers/getNestedData";

const JobColor = () => {
  const [listData, setListData] = useState([]);

  const { refresh, loading } = useFetch(
    adminEndpoints.job_color,
    handleJobColorSuccess
  );

  function handleJobColorSuccess(d) {
    let arr = [];
    d.data.data.forEach((item) => {
      let a = [];
      form.forEach((i) => a.push({ ...i, value: item[i.key] }));
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
      name: "Name",
      key: "name",
      type: dataType.text,
      card: true,
      mapKey: ["name"],
    },
    {
      name: "code",
      key: "code",
      type: dataType.color,
      card: true,
      mapKey: ["code"],
    },
    {
      name: "Description",
      key: "description",
      type: dataType.text,
      card: true,
      mapKey: ["description"],
    },
  ];
  const formProps = {
    backScreen: screenNames.JOB_COLOR,
    endpoint: adminEndpoints.job_color,
    form,
    title: "Add Job Color",
  };

  return (
    <ParentContainer
      useScroll={false}
      title="Job Color"
      addScreen={{ name: screenNames.FORM_SCREEN, params: formProps }}
    >
      <AdminListRendered
        data={listData}
        onRefresh={refresh}
        loading={loading}
        backScreen={screenNames.JOB_COLOR}
        listTitle={"JobColor Details"}
        editTitle={"Edit JobColoe"}
        endpoint={adminEndpoints.job_color}
      />
    </ParentContainer>
  );
};

export default JobColor;
