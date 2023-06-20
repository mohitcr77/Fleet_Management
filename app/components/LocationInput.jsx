import { View, Text } from "react-native";
import React, { useState, useRef, useEffect } from "react";

import { Dropdown } from "react-native-element-dropdown";
import customStyles from "../constants/styles";
import useGet from "../hooks/useGet";
import endpoint from "../service/endpoint";
import CompWrapper from "./CompWrapper";
import LoadingScreen from "../screens/AdminScreens/LoadingScreen";

const initialData = [{ label: "", name: "" }];

export default function LocationInput(props) {
  const [location, setLocation] = useState([
    { name: "Country", key: "country_id", list: initialData },
    { name: "State", key: "state_id", list: initialData },
    { name: "City", key: "city_id", list: initialData },
  ]);

  const locationRef = useRef({
    country_id: "101",
    state_id: "1",
    city_id: "1",
  });

  const { loading: countryLoading, refresh: refreshCountry } = useGet(
    endpoint.countries,
    (d) => onGetData(d, 0)
  );
  const { loading: stateLoading, refresh: refreshState } = useGet(
    endpoint.states + locationRef.current.country_id,
    (d) => onGetData(d, 1)
  );
  const { loading: cityLoading } = useGet(
    endpoint.cities + locationRef.current.state_id,
    (d) => onGetData(d, 2)
  );

  useEffect(() => {
    props.onLocationSelect(locationRef.current);
  }, []);

  function onGetData(d, index) {
    location[index].list = d.data;
    setLocation(location);
  }

  function onChange(e, k) {
    locationRef.current[k] = e.id;
    refreshCountry();
    refreshState();
    props.onLocationSelect(locationRef.current);
  }

  return location.map((item, index) => (
    <CompWrapper name={item.name} key={index}>
      <LoadingScreen loading={countryLoading || stateLoading || cityLoading} />
      <Dropdown
        style={[customStyles.inputBox, { paddingHorizontal: 14, height: 40 }]}
        // placeholder={getDropdownPlaceholder()}
        placeholderStyle={{ color: "black", fontSize: 15 }}
        data={item.list}
        search
        searchPlaceholder="Search..."
        onChange={(e) => onChange(e, item.key)}
        labelField="name"
        valueField="value"
      />
    </CompWrapper>
  ));
}
