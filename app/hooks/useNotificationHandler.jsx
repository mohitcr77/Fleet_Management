import React, { useEffect } from "react";
import useApi from "./useApi";
import { endpoints } from "../service/endpoint";
import * as Notifications from "expo-notifications";
import api, { getHeader } from "../service/api";
import useAuth from "./useAuth";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export default useNotificationHandler = () => {
  const { token: headerToken } = useAuth();
  useEffect(() => {
    requestPermissions();
    saveToken();
  }, []);

  async function requestPermissions() {
    await Notifications.requestPermissionsAsync({
      ios: {
        allowAlert: true,
        allowBadge: true,
        allowSound: true,
        allowAnnouncements: true,
      },
    });
  }

  async function saveToken() {
    try {
      const fcm_token = (await Notifications.getDevicePushTokenAsync()).data;
      //   const token = (await Notifications.getExpoPushTokenAsync()).data;

      const data = await api.post(
        endpoints.save_token,
        { fcm_token },
        getHeader(headerToken)
      );
    } catch (error) {}
  }
};
