import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Map with Food Trucks</Text>
      <Button
        title="Go to project"
        onPress={() => navigation.navigate("Project")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  greeting: {
    fontFamily: "open-sans-bold",
  },
});

export default HomeScreen;
