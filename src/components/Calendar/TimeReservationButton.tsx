import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import IconAdd from "../Icons/IconAdd";

export default function TimeReservationButton() {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>Reservar horário</Text>
      <IconAdd />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3097E115",
    paddingVertical: 15,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  text: {
    color: "#3097E1",
    fontSize: 16,
    fontFamily: "Outfit-Regular",
  },
});
