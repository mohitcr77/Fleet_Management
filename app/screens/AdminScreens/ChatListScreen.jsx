import React from "react";
import {
  List,
  ListItem,
  Divider,
  Layout,
  Tab,
  TabView,
} from "@ui-kitten/components";

import { Header } from "../../components/ParentContainer";
import colors from "../../constants/colors";
import { height, width } from "../../helpers/scales";
import { StyleSheet, Text, View } from "react-native";
import Icons from "../../components/Icons";
import screenNames from "../../constants/screenNames";
import { useNavigation } from "@react-navigation/native";

const data = new Array(20).fill({
  title: "Person",
  description: "Last Chat",
});
function ChatList() {
  const navigation = useNavigation();
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const renderItem = ({ item, index }) => (
    <ListItem
      onPress={() => navigation.navigate(screenNames.CHAT_ROOM_SCREEN)}
      style={{ height: 70 }}
      title={`${item.title} ${index + 1}`}
      description={`${item.description} ${index + 1}`}
      accessoryLeft={<Icons.PersonLogo />}
      accessoryRight={() => <Text style={styles.time}>20:30</Text>}
    />
  );
  return (
    <View>
      <Header title={"Chats"} />
      <TabView
        selectedIndex={selectedIndex}
        onSelect={(index) => setSelectedIndex(index)}
      >
        <Tab title="Driver">
          <List
            style={styles.container}
            data={data}
            renderItem={renderItem}
            ItemSeparatorComponent={<Divider />}
          />
        </Tab>
        <Tab title="Mechanic">
          <List
            style={styles.container}
            data={data}
            renderItem={renderItem}
            ItemSeparatorComponent={<Divider />}
          />
        </Tab>
        <Tab title="Staff">
          <List
            style={styles.container}
            data={data}
            renderItem={renderItem}
            ItemSeparatorComponent={<Divider />}
          />
        </Tab>
      </TabView>
    </View>
  );
}
export default ChatList;
const styles = StyleSheet.create({
  tabContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  time: {
    color: colors.gray2,
  },
  container: {
    height: height,
    width: width,
  },
});

// export default function ChatList({ navigation }) {
//   const renderItem = ({ item, index }) => (
//     <ListItem
//       onPress={() => navigation.navigate(screenNames.CHAT_ROOM_SCREEN)}
//       style={{ height: 70 }}
//       title={`${item.title} ${index + 1}`}
//       description={`${item.description} ${index + 1}`}
//       accessoryLeft={<Icons.PersonLogo />}
//       accessoryRight={() => <Text style={styles.time}>20:30</Text>}
//     />
//   );
//   return (
//     <ParentContainer useScroll={false} title={"Chat"}>
//       <List
//         style={styles.container}
//         data={data}
//         renderItem={renderItem}
//         ItemSeparatorComponent={<Divider />}
//       />
//     </ParentContainer>
//   );
// }
