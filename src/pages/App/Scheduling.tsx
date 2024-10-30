import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
  Platform,
} from "react-native";
import Constants from "expo-constants";
import { RootStackParamList } from "@/src/navigation/Screens";
import { StackNavigationProp } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import MenuGroup from "@/src/components/Menu/MenuGroup";
import Category from "@/src/components/Category";
import IconStethoscope from "@/src/components/Icons/IconStethoscope";
import IconHospital from "@/src/components/Icons/IconHospital";
import Header from "@/src/components/Header/Header";
import NewCalendar from "@/src/components/NewCalendar/Calendar";

const windowHeight = Dimensions.get("window").height;
const navbarHeight = windowHeight - (windowHeight + Constants.statusBarHeight);

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Scheduling"
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

export default function Scheduling({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView
        style={styles.content}
        contentContainerStyle={{
          gap: 20,
          justifyContent: "space-between",
          padding: 20,
          paddingBottom: Platform.OS === "ios" ? 60 : 90,
          height: "100%",
        }}
      >
        <Header logo={true} textLogo={false} perfil={true} userHello={true} />
        {/* <Category
          size="largest"
          label={"Médicos"}
          onClick={() => navigation.navigate("SchedulingDoctors")}
          Icon={() => (
            <IconStethoscope width={50} height={50} color={"#3097E1"} />
          )}
        />
        <Category
          size="largest"
          label={"Clínicas"}
          onClick={() => navigation.navigate("SchedulingDoctors")}
          Icon={() => <IconHospital width={50} height={50} color={"#3097E1"} />}
        /> */}
        <NewCalendar />
      </ScrollView>
      <MenuGroup navigation={navigation} />
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
    position: "relative",
  },
  content: {
    width: "100%",
    marginTop: Constants.statusBarHeight,
    paddingBottom: navbarHeight + 60,
  },
  categoryContainer: {
    flexDirection: "row",
    gap: 20,
  },
  doctorsContainer: {
    gap: 20,
  },
  subTitle: {
    color: "#999",
    fontSize: 18,
    fontFamily: "Outfit-Medium",
  },
});
