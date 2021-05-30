import React, { useState } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import { useSafeArea } from "react-native-safe-area-context";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import CustomHeaderButton from "../components/HeaderButton";

const AddTruckScreen = (props) => {
  const [message, setMessage] = useState("Add a Truck");

  Alert.alert("Kein Food Truck gefunden?", "Stelle ein Request ein", [
    {
      text: "Später",
      onPress: () => setMessage("Ich will hier einen Food Truck haben!"),
      style: "default",
    },
    {
      text: "Nice!",
      onPress: () => setMessage("Ich will hier einen Food Truck haben!"),
      style: "destructive",
    },
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>{message}</Text>
    </View>
  );
};

export const screenOptions = (navData) => {
  return {
    headerTitle: "Food Truck einfügen",
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

export default AddTruckScreen;
