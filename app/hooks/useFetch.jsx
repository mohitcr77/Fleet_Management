import React, { useState, useEffect } from "react";
import useAuth from "./useAuth";
import api, { getHeader } from "../service/api";

export default useFetch = (
  endpoint,
  onSuccess = () => {},
  onFail = () => {}
) => {
  const [data, setData] = useState(null);
  const [update, setUpdate] = useState(true);
  const [loading, setLoading] = useState(true);
  const { token } = useAuth();

  useEffect(() => {
    request();
  }, [update]);

  const refresh = () => setUpdate(!update);

  const request = async () => {
    try {
      const data = await api.get(endpoint, {}, getHeader(token));
      if (data.ok) {
        setData(data?.data);
        onSuccess(data?.data);
      }
      // else Toast.show(ToastType.ERROR);
    } catch (error) {
      onFail();
    }
    setLoading(false);
  };
  return { request, data, refresh, loading };
};
