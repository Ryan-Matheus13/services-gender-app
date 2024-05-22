import { View, Image, StyleSheet } from "react-native";
import React from "react";

export default function UserPerfil() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/images/perfil.png")}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 45,
    width: 45,
    borderRadius: 100,
    backgroundColor: "#555",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: "100%",
    objectFit: "contain",
    width: "100%",
  },
});
