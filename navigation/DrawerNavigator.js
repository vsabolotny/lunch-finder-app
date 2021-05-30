import React from "react";
import { createDrawerNavigator, DrawerItem } from "@react-navigation/drawer";

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
      <Drawer.Screen
        name="Imprint"
        component={ImprintStackNavigator}
        options={{
          drawerLabel: "Impressum",
        }}
      />
      <Drawer.Screen
        name="Privacy"
        component={PrivacyStackNavigator}
        options={{
          drawerLabel: "Datenschutz",
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsStackNavigator}
        options={{
          drawerLabel: "Einstellungen",
        }}
      />
      <Drawer.Screen
        name="AddTruck"
        component={AddTruckStackNavigator}
        options={{
          drawerLabel: "Food Truck einfügen",
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
