import React, { useState } from "react";
import { View, Text } from "react-native";

export default useApi = (api) => {
  const [error, setError] = useState();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  const request = async (params) => {
    setLoading(true);
    try {
      const data = await api(...params);
      setData(data);
      setLoading(false);
      return data;
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };
  return { request, data, error, loading };
};
