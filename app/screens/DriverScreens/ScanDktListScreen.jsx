import React, { useState, useEffect, useContext } from "react";
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
import useFetchList from "../../hooks/useFetchList";
import ListCard from "../../components/ListCard";
import { height } from "../../helpers/scales";

export default function ScanDktList({ navigation }) {
  const CardComponent = ({ obj }) => {
    const data = {
      cardData: [
        { key: "Client Name", value: "obj.client.name", type: "text" },
        // { key: "Travel", value: obj.travel, type: "text" },
        { key: "Docket No.", value: "obj.id", type: "text" },
        { key: "Machine Type", value: "obj.machine_type", type: "text" },
        { key: "Job No.", value: "obj.job_no", type: "text" },
        {
          key: "Start Time",
          value:
            'formatDate(obj.date).monthNameFormat + "  " + AMPMFormat(obj.start)',
          type: "date",
        },
        {
          key: "Finish Time",
          value: "AMPMFormat(obj.finish)" || "Not Finished",
          type: "date",
        },
        {
          key: "Submitted",
          value: "obj.finish && obj.mail_sent === 1" ? "Yes" : "No",
          type: "text",
        },
      ],
      data: [
        { key: "Date", value: "obj.date", type: "text" },
        { key: "Shift", value: "obj.shift" ? "Day" : "Night", type: "text" },
        { key: "Operator", value: "obj.operator", type: "text" },
        { key: "Total", value: "obj.total", type: "text" },
        { key: "CC Phone Number", value: "obj.cc_phone", type: "text" },
        { key: "Location", value: "obj.location", type: "text" },
        { key: "Travel", value: "obj.travel_time", type: "text" },
        { key: "Details", value: " obj.details", type: "list" },
        { key: "Customer Sign", value: "obj.singature", type: "image" },
      ],
    };

    return (
      <ListCard
        data={data}
        obj={obj}
        editScreen={screenNames.fullDktEdit}
        listScreen={screenNames.fullDktList}
      />
    );
  };
  return (
    <ParentContainer useScroll={false}>
      <ListHeader
        listName={"Scan Dkt List"}
        btnName={"Create"}
        onPress={() => navigation.navigate(screenNames.SCAN_DKT_FORM_SCREEN)}
      />
      <View style={styles.container}>
        {false ? (
          <Text style={{ marginTop: 100, alignSelf: "center", height }}>
            No Data
          </Text>
        ) : (
          <FlatList
            data={[1, 2, 3]}
            keyExtractor={(item, index) => "key" + index}
            scrollEventThrottle={16}
            decelerationRate={"fast"}
            // onRefresh={() => initialDetails(1)}
            // refreshing={loading}
            // onEndReached={(value) => {
            //   if (details.length > 5) {
            //     nextPage();
            //     setListEndReached(false);
            //   }
            // }}
            onEndReachedThreshold={0.05}
            // ListFooterComponent={() => {
            //   return loading && <Loader />;
            // }}
            renderItem={({ item }) => {
              return <CardComponent obj={item} />;
            }}
          />
        )}
      </View>
    </ParentContainer>
  );
  // const { auth, refresh } = useContext(AuthContext);
  // const { fullDktListDetails } = useSelector((state) => state.fullDktList);

  // const [details, setDetails] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [page, setPage] = useState(1);
  // const [listEndReached, setListEndReached] = useState(false);

  // useEffect(() => {
  //   initialDetails(page);
  // }, [fullDktListDetails]);

  // const initialDetails = async (v) => {
  //   setLoading(true);
  //   try {
  //     const resp = await services.getFullDKTJobs(auth.token, v);
  //     setLoading(false);
  //     if (resp.data.data.length === 0) setListEndReached(true);
  //     let newResp = [...details, ...resp.data.data];
  //     newResp = newResp
  //       .filter(
  //         (value, index, self) =>
  //           index === self.findIndex((t) => t.id === value.id)
  //       )
  //       .sort((a, b) => a.date < b.date);
  //     if (resp.status == 200) {
  //       setDetails(newResp);
  //     } else {
  //       alert("Something went wrong!!!");
  //     }
  //   } catch (error) {
  //     console.warn(error, "error");
  //     setLoading(false);
  //   }
  // };
  // const nextPage = () => {
  //   if (listEndReached) return;
  //   let v = page;
  //   v++;
  //   initialDetails(v);
  //   setPage(v);
  // };
  // const Loader = () => (
  //   <>
  //     {
  //       <View
  //         style={{
  //           flex: 1,
  //           height: 80,
  //         }}
  //       >
  //         <ActivityIndicator size="large" color={colors.themeColor} />
  //       </View>
  //     }
  //   </>
  // );
  // const CardComponent = ({ obj }) => {
  //   const data = {
  //     cardData: [
  //       { key: "Client Name", value: obj.client.name, type: "text" },
  //       // { key: "Travel", value: obj.travel, type: "text" },
  //       { key: "Docket No.", value: obj.id, type: "text" },
  //       { key: "Machine Type", value: obj.machine_type, type: "text" },
  //       { key: "Job No.", value: obj.job_no, type: "text" },
  //       {
  //         key: "Start Time",
  //         value:
  //           formatDate(obj.date).monthNameFormat + "  " + AMPMFormat(obj.start),
  //         type: "date",
  //       },
  //       {
  //         key: "Finish Time",
  //         value: AMPMFormat(obj.finish) || "Not Finished",
  //         type: "date",
  //       },
  //       {
  //         key: "Submitted",
  //         value: obj.finish && obj.mail_sent === 1 ? "Yes" : "No",
  //         type: "text",
  //       },
  //     ],
  //     data: [
  //       { key: "Date", value: obj.date, type: "text" },
  //       { key: "Shift", value: obj.shift ? "Day" : "Night", type: "text" },
  //       { key: "Operator", value: obj.operator, type: "text" },
  //       { key: "Total", value: obj.total, type: "text" },
  //       { key: "CC Phone Number", value: obj.cc_phone, type: "text" },
  //       { key: "Location", value: obj.location, type: "text" },
  //       { key: "Travel", value: obj.travel_time, type: "text" },
  //       { key: "Details", value: obj.details, type: "list" },
  //       { key: "Customer Sign", value: obj.singature, type: "image" },
  //     ],
  //   };

  //   return (
  //     <ListCard
  //       data={data}
  //       obj={obj}
  //       editScreen={screenNames.fullDktEdit}
  //       listScreen={screenNames.fullDktList}
  //     />
  //   );
  // };
  // return (
  //   <>
  //     <Icons.Refresh
  //       onClick={() => {
  //         initialDetails(1);
  //         setPage(1);
  //       }}
  //     />
  //     <DrawerHeader />
  //     <>
  //       <View style={styles.container}>
  //         {details?.length === 0 ? (
  //           <AppText style={{ marginTop: 100, alignSelf: "center", height }}>
  //             No Data
  //           </AppText>
  //         ) : (
  //           <FlatList
  //             data={details}
  //             keyExtractor={(item, index) => "key" + index}
  //             scrollEventThrottle={16}
  //             decelerationRate={"fast"}
  //             onRefresh={() => initialDetails(1)}
  //             refreshing={loading}
  //             onEndReached={(value) => {
  //               if (details.length > 5) {
  //                 nextPage();
  //                 setListEndReached(false);
  //               }
  //             }}
  //             onEndReachedThreshold={0.05}
  //             ListFooterComponent={() => {
  //               return loading && <Loader />;
  //             }}
  //             renderItem={({ item }) => {
  //               return <CardComponent obj={item} />;
  //             }}
  //           />
  //         )}
  //       </View>
  //     </>
  //   </>
  // );
}

const styles = StyleSheet.create({});
