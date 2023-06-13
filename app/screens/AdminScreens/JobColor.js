import React from "react";
import { useState} from "react";
import dataType from "../../constants/dataType";
import ParentContainer from "../../components/ParentContainer";
import endpoint from "../../service/endpoint";
import screenNames from "../../constants/screenNames";
import AdminListRendered from "../../components/AdminListRendered";
import useGet from "./../../hooks/useGet";

const JobColor = () => {
  const [listData, setListData] = useState([]);

  const { refresh, loading } = useGet(endpoint.job_color, handleJobColorSuccess);

  function handleJobColorSuccess(d) {
    let arr = [];
    d.forEach((item) => {
      const a = [
        {
          name: "Name",
          value: item.name,
          card: true
        },
        {
          name: "Code",
          value: item.code,
          card: true
        },
        {
          name: "Description",
          value: item.description,
          card: true
        },
      ];
      arr.push(a);
    });
    setListData(arr);
  }
  const form = [
    {
      name: "Name",
      key: "name",
      type: dataType.text,
    },
    {
      name: "code",
      key: "code",
      type: dataType.text,
    },
    {
      name: "Description",
      key: "description",
      type: dataType.text,
    },
  ];
  const formProps = {
    backScreen: screenNames.JOB_COLOR,
    endpoint: endpoint.job_color,
    form,
    title: "Add Job Color",
  };

  return (
    <ParentContainer
      useScroll={false}
      title="Job Color"
      addScreen={[screenNames.FORM_SCREEN, formProps]}
    >
      <AdminListRendered
        data={listData}
        onRefresh={refresh}
        loading={loading}
      />
    </ParentContainer>
  );
};

export default JobColor;
