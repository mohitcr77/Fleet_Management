import React, { useState, useContext, useEffect } from "react";
import { View, Text } from "react-native";
import AuthContext from "../auth/context";
import services from "../services";

export default useTodayJobs = (update) => {
  const [error, setError] = useState();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    request();
  }, [update]);

  const request = async () => {
    setLoading(true);
    try {
      const data = await services.getTodayJob(auth.token);
      setData(data);
      setLoading(false);
      return data;
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };
  return { data, error, loading };
};
