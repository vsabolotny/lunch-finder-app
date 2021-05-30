import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Dimensions, Alert } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { TabActions } from "@react-navigation/native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";
import AppLoading from "expo-app-loading";

import CustomHeaderButton from "../components/HeaderButton";
import ENV from "../env";

const HomeScreen = (props) => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  console.log(location);

  // return (
  //   <View style={styles.container}>
  //     <Text style={styles.paragraph}>{text}</Text>
  //   </View>
  // );

  return (
    <MapView
      style={styles.map}
      provider={PROVIDER_GOOGLE}
      initialRegion={{
        latitude: 48.15913,
        longitude: 11.626086,
        // latitude: location.coords.latitude,
        // longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    />
  );
};
//   const [location, setLocation] = useState(null);

//   Location.setGoogleApiKey(ENV.googleApiKey);
//   Location.set

//   const fetchLocation = () => {
//     async () => {
//       let { status } = await Location.requestForegroundPermissionsAsync();
//       if (status !== "granted") {
//         setErrorMsg("Permission to access location was denied");
//         return;
//       }

//       let loca = await Location.getCurrentPositionAsync();
//       setLocation(loca);
//     };
//   };

//   fetchLocation();

//   console.log(location);

//   return (
//     <MapView
//       style={styles.map}
//       provider={PROVIDER_GOOGLE}
//       initialRegion={{
//         latitude: 48.15913,
//         longitude: 11.626086,
//         // latitude: location.coords.latitude,
//         // longitude: location.coords.longitude,
//         latitudeDelta: 0.0922,
//         longitudeDelta: 0.0421,
//       }}
//     />
//   );
// };

const jumpToAction = TabActions.jumpTo("AddTruck");

export const screenOptions = (navData) => {
  return {
    headerTitle: "Lunch Finder",
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
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName="add-outline"
          onPress={() => {
            navData.navigation.dispatch(jumpToAction);
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
    // },
    // truckTile: {
    //   ...StyleSheet.absoluteFill,
    //   width: 100,
    //   height: 100,
    //   backgroundColor: "blue",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export default HomeScreen;
