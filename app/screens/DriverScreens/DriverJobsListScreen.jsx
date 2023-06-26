import { useNavigationState } from "@react-navigation/native";
import React, { useEffect, useState } from "react";

import { driverEndpoints } from "../../service/endpoint";
import DriverJobsCard from "../../components/DriverJobsCard";
import ParentContainer from "../../components/ParentContainer";
import screenNames from "../../constants/screenNames";
import useFetch from "../../hooks/useFetch";

const screenParams = {
  [screenNames.DRIVER_ACCEPTED_JOBS_SCREEN]: {
    title: "Accepted Jobs",
    endpoint: driverEndpoints.accepted_jobs,
    data: [1, 2, 3, 4],
  },
  [screenNames.DRIVER_PENDING_JOBS_SCREEN]: {
    title: "Pending Jobs",
    endpoint: driverEndpoints.pending_jobs,
    data: [1, 2],
  },
};

export default function DriverJobs() {
  const { history: routeHistory } = useNavigationState((state) => state);
  const [params, setParams] = useState(
    screenParams[screenNames.DRIVER_ACCEPTED_JOBS_SCREEN]
  );

  const screen = routeHistory
    .filter((i) => i.type === "route")
    .slice(-1)
    .pop().key;

  const currentScreen = screen.substring(0, screen.indexOf("-"));

  useEffect(() => {
    setParams(screenParams[currentScreen]);
  }, [currentScreen]);

  const { data: jobs } = useFetch(params.endpoint);

  return (
    <ParentContainer title={params.title}>
      {params.data.map((i) => (
        <DriverJobsCard key={i} />
      ))}
    </ParentContainer>
  );
}
