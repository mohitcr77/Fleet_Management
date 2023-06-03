import { StyleSheet, Text, View, FlatList, Animated } from "react-native";
import React from "react";
import slides from "../../constants/slides";
import OnboardingItem from "../../components/OnboardingItem";
import { useRef, useState, useCallback } from "react";

const Onboarding = () => {
  const flatListRef = useRef();
  function scrollHandler(index) {
    flatListRef?.current?.scrollToIndex({ animated: true, index });
  }
  // todo - check for last index in flatlist
  return (
    <View style={styles.container}>
      <View style={{ flex: 3 }}>
        <FlatList
          ref={flatListRef}
          data={slides}
          renderItem={({ item, index }) => (
            <OnboardingItem
              item={item}
              index={index}
              listLength={slides.length - 1}
              setscrollIndex={scrollHandler}
            />
          )}
          pagingEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
