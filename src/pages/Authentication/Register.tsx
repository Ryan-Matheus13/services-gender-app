import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";

const windowHeight = Dimensions.get("window").height;
const navbarHeight = windowHeight - (windowHeight + Constants.statusBarHeight);

export default function Register() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView
        style={styles.content}
        contentContainerStyle={{
          gap: 20,
          justifyContent: "space-between",
          padding: 20,
        }}
      >
        <Text>Register</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    width: "100%",
    marginTop: Constants.statusBarHeight,
    paddingBottom: navbarHeight + 60,
  },
});
