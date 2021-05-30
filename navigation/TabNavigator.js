import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { MainStackNavigator, ProjectStackNavigator } from "./StackNavigator";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelPosition: "below-icon",
        style: {
          position: "absolute",
          height: 100,
          padding: 10,
          backgroundColor: "white",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={MainStackNavigator}
        options={{
          tabBarLabel: "Finde dein Lunch",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="home-search"
              color={color}
              size={40}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Project"
        component={ProjectStackNavigator}
        options={{
          tabBarLabel: "Lerne uns kennen",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account-supervisor"
              color={color}
              size={40}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
