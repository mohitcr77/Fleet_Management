import React, { useState, useContext, useEffect } from "react";
import { View, Text } from "react-native";
import AuthContext from "../auth/context";
import services from "../services";

export default useRegoList = (update, showDate, showStartTime) => {
  const [error, setError] = useState();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    request();
  }, [update, showDate, showStartTime]);

  const request = async () => {
    setLoading(true);
    try {
      let showStartTimeTemp =
        showStartTime?.split(":").length > 2
          ? showStartTime
          : showStartTime + ":00";

      const data = await services.getFreeRegoList(auth.token, {
        date: showDate,
        admin_dstart: showStartTimeTemp,
      });
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
