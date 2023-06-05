import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import ParentContainer from "../../components/ParentContainer";
import { width } from "../../helpers/scales";
import colors from "../../constants/colors";
import TouchableText from "../../components/TouchableText";

export default function Documents() {
  return (
    <ParentContainer>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
        <CardComponent key={i} item={i} />
      ))}
    </ParentContainer>
  );
}
function CardComponent({ item }) {
  return (
    <View style={styles.card} key={item}>
      <TouchableText title={"Open"} onPress={() => {}} />
      <Image
        source={getIcon("obj.path")}
        style={styles.img}
        resizeMode="stretch"
      />
      <View style={styles.dataContainer}>
        <Text style={{ fontWeight: "bold" }}>Name</Text>
        <View style={styles.data}>
          <Text style={{ color: colors.gray2 }}>New Doc</Text>
          <Text style={{ color: colors.gray2 }}>
            23 / 4 / 98
            {/* {"formatDate(obj.created_at).monthNameFormat"} */}
          </Text>
        </View>
      </View>
    </View>
  );

  function getIcon(doc) {
    return require(`../../assets/images/pdf.jpg`);

    // const ext = doc.split(".")[1] || "image";
    // if (ext === "jpg" || ext === "jpeg" || ext === "png") {
    //   return require(`../../assets/images/jpegIcon.png`);
    // } else {
    //   if (ext === "pdf") {
    //     return require(`../../assets/images/pdf.jpg`);
    //   } else return require(`../../assets/images/doc.png`);
    // }
  }
}
const styles = StyleSheet.create({
  card: {
    width: width - 30,
    elevation: 5,
    borderRadius: 8,
    marginVertical: 10,
    flexDirection: "row",
    paddingHorizontal: 5,
    paddingVertical: 20,
    backgroundColor: "white",
  },
  img: {
    height: 70,
    width: 50,
  },
  dataContainer: {
    paddingHorizontal: 5,
  },
  data: {
    width: width * 0.6,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});