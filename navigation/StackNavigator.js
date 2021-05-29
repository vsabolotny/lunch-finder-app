import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen, {
  screenOptions as homeScreenOptions,
} from "../screens/HomeScreen";
import ProjectScreen, {
  screenOptions as projectScreenOptions,
} from "../screens/ProjectScreen";
import ImprintScreen, {
  screenOptions as imprintScreenOptions,
} from "../screens/ImprintScreen";
import PrivacyScreen, {
  screenOptions as privacyScreenOptions,
} from "../screens/PrivacyScreen";
import SettingsScreen, {
  screenOptions as settingsScreenOptions,
} from "../screens/SettingsScreen";
import AddTruckScreen, {
  screenOptions as addTruckScreenOptions,
} from "../screens/AddTruckScreen";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
    height: 100,
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={homeScreenOptions}
      />
      <Stack.Screen name="Project" component={ProjectScreen} />
    </Stack.Navigator>
  );
};

const ProjectStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Project"
        component={ProjectScreen}
        options={projectScreenOptions}
      />
    </Stack.Navigator>
  );
};

const ImprintStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Imprint"
        component={ImprintScreen}
        options={imprintScreenOptions}
      />
    </Stack.Navigator>
  );
};

const PrivacyStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Privacy"
        component={PrivacyScreen}
        options={privacyScreenOptions}
      />
    </Stack.Navigator>
  );
};

const SettingsStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={settingsScreenOptions}
      />
    </Stack.Navigator>
  );
};

const AddTruckStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="AddTruck"
        component={AddTruckScreen}
        options={addTruckScreenOptions}
      />
    </Stack.Navigator>
  );
};

export {
  MainStackNavigator,
  ProjectStackNavigator,
  ImprintStackNavigator,
  PrivacyStackNavigator,
  SettingsStackNavigator,
  AddTruckStackNavigator,
};
