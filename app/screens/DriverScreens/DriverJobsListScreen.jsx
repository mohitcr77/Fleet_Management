import { View, Text } from "react-native";
import React from "react";
import ParentContainer from "../../components/ParentContainer";
import DriverJobsCard from "../../components/DriverJobsCard";

export default function DriverJobsList() {
  return (
    <ParentContainer>
      {[1, 2, 3, 4, 5, 6, 7].map((i) => (
        <DriverJobsCard key={i} showBtn={false} />
      ))}
    </ParentContainer>
  );
}
