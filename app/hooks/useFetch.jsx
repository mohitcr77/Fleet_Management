import { useState, useEffect } from "react";
import useAuth from "./useAuth";
import api, { getHeader } from "../service/api";

export default useFetch = ({
  endpoint,
  onSuccess = () => {},
  onFail = () => {},
  params = {},
}) => {
  const [data, setData] = useState(null);
  const [update, setUpdate] = useState(true);
  const [loading, setLoading] = useState(true);
  const { token } = useAuth();

  useEffect(() => {
    request();
    return () => {};
  }, [update]);

  const refresh = () => setUpdate(!update);

  const request = async () => {
    try {
      const data = await api.get(endpoint, params, getHeader(token));
      if (data.ok) {
        setData(data?.data);
        onSuccess(data?.data);
      }
    } catch (error) {
      onFail();
    }
    setLoading(false);
  };
  return { request, data, refresh, loading };
};
