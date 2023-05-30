import * as ImagePicker from "expo-image-picker";

const captureImageHelper = () => {
  try {
    let result = ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: isAndroid(),
      quality: 0.1,
      base64: true,
    });
    if (!result.cancelled) {
      return result;
    }
  } catch (e) {
    console.error(e);
  }
};
export default captureImageHelper;
