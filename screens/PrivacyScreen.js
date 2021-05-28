import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import CustomHeaderButton from "../components/HeaderButton";

const PrivacyScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>
        Data protection
      </Text>
    </View>
  );
};

export const screenOptions = navData => {
  return {
    headerTitle: "Data protection",
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
    )
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

export default PrivacyScreen;
