import { useNavigationState } from "@react-navigation/native";
import React, { useEffect, useState } from "react";

import { driverEndpoints } from "../../service/endpoint";
import DriverJobsCard from "../../components/DriverJobsCard";
import ParentContainer from "../../components/ParentContainer";
import screenNames from "../../constants/screenNames";
import useFetch from "../../hooks/useFetch";

export default function DriverJobs({ route }) {
  const { title, endpoint, showBtn } = route.params;
  const [list, setList] = useState([]);

  const { refresh } = useFetch(endpoint, handleFetchSuccess);

  // useEffect(() => {
  //   console.log(route.params, "oooo");
  // }, [route.params]);

  function handleFetchSuccess(e) {
    console.log("first");
    let arr = [];
    e.data.data.forEach((ele) => {
      const a = [
        {
          name: "Date",
          key: "date",
          value: ele.date,
        },
        { name: "Day", key: "day", value: ele.day },
        { name: "Client", key: "clients.name", value: ele.clients.user.name },

        { name: "Color", key: "color", value: ele.color.name },
        { name: "Job No.", key: "job_no", value: ele.job_no },
        { name: "Start", key: "drv_start", value: ele.day_start },
        // { name: "Rego", key: "regos[name]", value: "data.regos.name" },
      ];
      arr.push(a);
    });
    setList(arr);
  }
  return (
    <ParentContainer title={title}>
      {list.map((i) => (
        <DriverJobsCard key={i} data={i} showBtn={showBtn} />
      ))}
    </ParentContainer>
  );
}
