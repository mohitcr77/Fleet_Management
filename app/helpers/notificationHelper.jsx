import services from "../services";
import * as SecureStore from "expo-secure-store";
import * as Notifications from "expo-notifications";

const key = "loggedInDetails";

async function notificationHelper() {
  const d = await SecureStore.getItemAsync(key);
  const details = JSON.parse(d);
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: true,
    }),
  });

  async function requestPermissionsAsync() {
    return await Notifications.requestPermissionsAsync({
      ios: {
        allowAlert: true,
        allowBadge: true,
        allowSound: true,
        allowAnnouncements: true,
      },
    });
  }
  requestPermissionsAsync();

  try {
    const token = (await Notifications.getExpoPushTokenAsync()).data;
    const r = await services.saveToken(
      details.user.toLowerCase(),
      {
        user_id: details.user_id,
        token,
      },
      details.token
    );
  } catch (error) {
    console.warn(error);
  }
}

export default notificationHelper;
