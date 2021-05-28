import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import CustomHeaderButton from "../components/HeaderButton";

const ImprintScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Imprint</Text>
    </View>
  );
};

export const screenOptions = navData => {
  return {
    headerTitle: "Imprint",
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

export default ImprintScreen;
