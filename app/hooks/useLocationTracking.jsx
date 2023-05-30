import { useEffect } from "react";
import * as Location from "expo-location";
import * as TaskManager from "expo-task-manager";
import { Alert } from "react-native";

const LOCATION_TRACKING = "location-tracking";

export default function useLocationTracking() {
  useEffect(() => {
    getLocationPermission();
  }, []);

  async function getLocationPermission() {
    try {
      let { granted: foregroundPermission } =
        await Location.requestForegroundPermissionsAsync();
      let { granted: backgroundPermission } =
        await Location.requestBackgroundPermissionsAsync();
      if (foregroundPermission && backgroundPermission) stopLocationUpdate();
    } catch (e) {
      console.warn(e);
    }
  }

  const checkPermission = async () => {
    let { granted: foregroundPermission } =
      await Location.getBackgroundPermissionsAsync();
    let { granted: backgroundPermission } =
      await Location.getForegroundPermissionsAsync();
    return foregroundPermission && backgroundPermission;
  };

  const stopLocationUpdate = async () => {
    Location.stopLocationUpdatesAsync(LOCATION_TRACKING);
  };

  const startLocationTracking = async () => {
    if (!checkPermission()) {
      getLocationPermission();
      return;
    }

    await Location.getCurrentPositionAsync({});

    await Location.startLocationUpdatesAsync(LOCATION_TRACKING, {
      accuracy: Location.Accuracy.Highest,
      timeInterval: 5000,
      distanceInterval: 0,
    });
    const hasStarted = await Location.hasStartedLocationUpdatesAsync(
      LOCATION_TRACKING
    );
    console.log("tracking started?", hasStarted);
  };
  return { startLocationTracking, stopLocationUpdate };
}
TaskManager.defineTask(LOCATION_TRACKING, async ({ data, error }) => {
  if (error) {
    console.log("LOCATION_TRACKING task ERROR:", error);
    return;
  }
  if (data) {
    const { locations } = data;
    let lat = locations[0].coords.latitude;
    let long = locations[0].coords.longitude;
  }
});
