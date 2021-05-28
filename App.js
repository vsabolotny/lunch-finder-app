import React, { useState } from "react";
import { Asset } from "expo-asset";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { MainStackNavigator } from "./navigation/StackNavigator";
import BottomTabNavigator from "./navigation/TabNavigator";
import DrawerNavigator from "./navigation/DrawerNavigator";

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          setFontLoaded(true);
        }}
        onError={console.warn}
      />
    );
  }

  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
