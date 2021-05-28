import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import { ProjectStackNavigator } from "./StackNavigator";
import TabNavigator from "./TabNavigator";
import ImprintScreen from "../screens/ImprintScreen";

const Drawer = createDrawerNavigator();

const DrawerNavigator = ({ navigation }) => {
  console.log(TabNavigator);
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={TabNavigator} />
      <Drawer.Screen name="Project" component={ProjectStackNavigator} />
      <Drawer.Screen name="Imprint" component={ImprintScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
