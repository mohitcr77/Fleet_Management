import React, { useState } from "react";

import DriverJobsCard from "../../components/DriverJobsCard";
import ParentContainer from "../../components/ParentContainer";
import useFetch from "../../hooks/useFetch";

export default function DriverJobs({ route }) {
  const { title, endpoint, showBtn } = route.params;
  const [list, setList] = useState([]);

  const { refresh } = useFetch(endpoint, handleFetchSuccess);

  function handleFetchSuccess(e) {
    let arr = [];
    e.data.data.forEach((ele) => {
      const a = [
        {
          name: "#Id",
          key: "text",
          value: ele.id,
        },
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
      ];
      arr.push(a);
    });
    setList(arr);
  }
  return (
    <ParentContainer title={title + "!!"}>
      {list.map((i) => (
        <DriverJobsCard key={i} data={i} showBtn={showBtn} />
      ))}
    </ParentContainer>
  );
}
