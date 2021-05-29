import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { TabActions } from "@react-navigation/native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

import CustomHeaderButton from "../components/HeaderButton";

const HomeScreen = (navigator) => {
  const [curLocation, setCurLocation] = useState(null);

  return (
    <View style={styles.container}>
      <MapView style={styles.map} provider={PROVIDER_GOOGLE}></MapView>
      {/* <View style={styles.truckTile}>
        <Text>Food Truck #1</Text>
      </View> */}
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
  truckTile: {
    ...StyleSheet.absoluteFill,
    width: 100,
    height: 100,
    backgroundColor: "blue",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export default HomeScreen;
