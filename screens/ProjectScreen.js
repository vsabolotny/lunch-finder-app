import React from "react";
import { StyleSheet, Text, View, Linking, Button } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { TabActions } from "@react-navigation/native";

import CustomHeaderButton from "../components/HeaderButton";

const ProjectScreen = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.textblock}>
        <Text style={styles.description}>
          Die mobilen Lunch Anbieter wie Foodtrucks oder
          Grillhähnchen-Imbisswagen sind oft schwer zu finden. Die
          Öffnungszeiten ändern sich oft. Mit unserer App wollen wir das ändern.
        </Text>
      </View>
      <View style={styles.textblock}>
        <Text style={styles.description}>
          <Text style={styles.appname}>Lunch Finder</Text> soll Dir helfen,
          Deinen Lunch dort zu finden, wo immer du gerade hunger hast.
        </Text>
      </View>
      <View style={styles.textblock}>
        <Text style={styles.description}>
          Wir, das Team von <Text style={styles.appname}>Lunch Finder</Text>
          geben unser Bestes, um so schnell es geht, die App auf den Weg zu
          bringen.
        </Text>
      </View>
      <View style={styles.textblock}>
        <Text style={styles.description}>
          Wenn Du mehr über uns erfahren magst, dann besuche bitte unser
        </Text>
        <Button
          title="Blog"
          onPress={() => {
            Linking.openURL("https://www.find-a-lunch.de");
          }}
        />
      </View>
      <View style={styles.textblock}>
        <Text style={styles.description}>
          Wir wünschen Dir einen guten Hunger und bis bald!
        </Text>
      </View>
    </View>
  );
};

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
    justifyContent: "flex-start",
  },
  description: {
    fontFamily: "open-sans",
    fontSize: 20,
    textAlign: "left",
    color: "#8E8E8F",
  },
  textblock: {
    padding: 10,
  },
  appname: {
    color: "#ffb347",
  },
});

export default ProjectScreen;
