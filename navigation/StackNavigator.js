import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import ProjectScreen from "../screens/ProjectScreen";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Project" component={ProjectScreen} />
    </Stack.Navigator>
  );
};

const ProjectStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Project" component={ProjectScreen} />
    </Stack.Navigator>
  );
};

export { MainStackNavigator, ProjectStackNavigator };
