import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import HelloUser from "./HelloUser";
import TextWithLogo from "./TextWithLogo";
import UserPerfil from "./UserPerfil";

type HeaderProps = {
  logo: boolean;
  textLogo: boolean;
  perfil: boolean;
  userHello: boolean;
};

export default function Header({
  logo,
  textLogo,
  perfil,
  userHello,
}: HeaderProps) {
  return (
    <>
      {logo && textLogo && !perfil && !userHello && (
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <TextWithLogo label={true} />
          </View>
        </View>
      )}
      {logo && perfil && userHello && (
        <View style={styles.container}>
          <View>
            <HelloUser />
          </View>
          <View style={styles.imageContainer}>
            <TextWithLogo label={false} />
          </View>
          <View>
            <UserPerfil />
          </View>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  imageContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    height: "100%",
  },
  image: {
    height: "100%",
    objectFit: "contain",
    width: 50,
  },
  title: {
    color: "#3097E1",
    fontSize: 16,
    fontFamily: "Outfit-Bold",
    paddingTop: 4,
  },
});
