import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import {
  AddTruckStackNavigator,
  ImprintStackNavigator,
  PrivacyStackNavigator,
  SettingsStackNavigator,
} from "./StackNavigator";
import TabNavigator from "./TabNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={TabNavigator} />
      <Drawer.Screen name="Imprint" component={ImprintStackNavigator} />
      <Drawer.Screen name="Privacy" component={PrivacyStackNavigator} />
      <Drawer.Screen name="Settings" component={SettingsStackNavigator} />
      <Drawer.Screen name="AddTruck" component={AddTruckStackNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
