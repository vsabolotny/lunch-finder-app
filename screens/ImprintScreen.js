import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { WebView } from "react-native-webview";

import CustomHeaderButton from "../components/HeaderButton";

const ImprintScreen = (props) => {
  const HOST = "https://www.find-a-lunch.de/";

  return (
    <View style={styles.container}>
      {/* <WebView
        style={styles.webtext}
        source={{ uri: HOST + "imprint/isApp" }}
      /> */}
      <Text>Impressum</Text>
    </View>
  );
};

export const screenOptions = (navData) => {
  return {
    headerTitle: "Impressum",
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
  webtext: {
    fontFamily: "open-sans",
  },
});

export default ImprintScreen;
