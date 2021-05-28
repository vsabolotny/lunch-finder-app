import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { TabActions } from "@react-navigation/native";

import CustomHeaderButton from "../components/HeaderButton";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Map with Food Trucks</Text>
    </View>
  );
};

const jumpToAction = TabActions.jumpTo("AddTruck");

export const screenOptions = (navData) => {
  return {
    headerTitle: "Lunch Finder",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName="add-outline"
          onPress={() => {
            navData.navigation.dispatch(jumpToAction);
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  greeting: {
    fontFamily: "open-sans",
  },
});

export default HomeScreen;
