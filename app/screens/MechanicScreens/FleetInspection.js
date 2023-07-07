import {
  StyleSheet,
  View,
  ActivityIndicator,
  FlatList,
  Text,
} from "react-native";
import ParentContainer from "../../components/ParentContainer";
import ListHeader from "../../components/ListHeader";
import screenNames from "../../constants/screenNames";
import ListCard from "../../components/ListCard";
import { height } from "../../helpers/scales";

const FleetInspection = () => {
  const CardComponent = ({ obj }) => {
    const data = {
      cardData: [
        {
          key: "Id",
          value: "obj.id",
        },
        { key: "Created at", value: "obj.date", type: "date" },
        { key: "Created by", value: "obj.created_by", type: "text" },
        {
          key: "Fleet number",
          value: "obj.fleet_number",
          type: "text",
        },
        {
          key: "Description",
          value: "obj.description",
          type: "text",
        },
      ],
    };

    return (
      <ListCard
        inspectionData={data}
        obj={obj}
        editScreen={screenNames.MECHANIC_TIME_SHEET_FORM}
        listScreen={screenNames.MECHANIC_TIME_SHEET_DATA}
        resolveBtn={true}
        viewBtn={true}
        showMore={false}
        view={true}
      />
    );
  };
  return (
    <ParentContainer
      useScroll={false}
      title={"Fleet Inspection"}
      // containerStyle={{ alignItems: "center" }}
    >
      <View style={styles.container}>
        {false ? (
          <Text style={{ marginTop: 100, alignSelf: "center", height }}>
            No Data
          </Text>
        ) : (
          <FlatList
            data={[1, 2, 3]}
            keyExtractor={(item, index) => "key" + index}
            renderItem={({ item }) => {
              return <CardComponent obj={item} />;
            }}
          />
        )}
      </View>
    </ParentContainer>
  );
};

export default FleetInspection;

const styles = StyleSheet.create({});
