import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ImprintScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>ImprintScreen</Text>
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
    fontFamily: "open-sans",
  },
});

export default ImprintScreen;
