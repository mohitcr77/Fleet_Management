import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  LayoutAnimation,
  UIManager,
  Platform,
} from "react-native";
import React, { useState } from "react";

import colors from "../constants/colors";
import { useNavigation } from "@react-navigation/native";
import Icons from "./Icons";
import { Button, Divider, List, ListItem } from "@ui-kitten/components";

if (Platform.OS === "android") {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function DrawerButtonAccordion({ data, show }) {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(false);

  return (
    <View>
      <Button
        onPress={() => {
          if (data.screen) {
            navigation.navigate(data.screen);
            return;
          }
          LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
          setSelected(!selected);
        }}
        appearance="ghost"
        status="info"
        style={[styles.container]}
        accessoryRight={
          data.children ? () => <Icons.Chevron closed={!selected} /> : null
        }
      >
        {data.name}
      </Button>
      <Divider />

      {selected && data.children && (
        <List
          style={{ maxHeight: data.children.length * 45 }}
          data={data.children}
          ItemSeparatorComponent={Divider}
          renderItem={({ item, index }) => (
            <ListItem
              onPress={() => navigation.navigate(item.screen)}
              title={`${item.name}`}
              // description={`${item.description} ${index + 1}`}
            />
          )}
        />
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: 290,
    marginVertical: 2,
    flexDirection: "row",
    borderRadius: 5,
    justifyContent: "space-between",
  },
  childrenBtn: {
    width: 270,
    height: 40,
    marginBottom: 3,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-end",
    paddingLeft: 15,
    borderRadius: 5,
  },
});
