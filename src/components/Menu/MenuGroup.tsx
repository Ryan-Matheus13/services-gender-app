import { View, Text, StyleSheet, Dimensions, Platform } from "react-native";
import React from "react";
import MenuButton from "./MenuButton";
import IconCalendarMenu from "../Icons/IconCalendarMenu";
import IconHome from "../Icons/IconHome";
import IconChat from "../Icons/IconChat";
import IconMenu from "../Icons/IconMenu";
import { useAppSelector } from "@/src/store/hooks/useAppSelector";
import Constants from "expo-constants";
import { useAppDispatch } from "@/src/store/hooks/useAppDispatch";
import { handleSetMenu } from "@/src/store/root/actions";

const windowHeight = Dimensions.get("window").height;
const navbarHeight = windowHeight - (windowHeight + Constants.statusBarHeight);

type MenuGroupProps = {
  navigation: any;
};

export default function MenuGroup({ navigation }: MenuGroupProps) {
  const dispatch = useAppDispatch();
  const rootStore = useAppSelector((store) => store.root);

  const handleClick = (menuIndex: number, route: string) => {
    dispatch(handleSetMenu(menuIndex));
    navigation.navigate(route, { screen: route });
  };

  return (
    <View style={styles.container}>
      <MenuButton
        active={rootStore.menu == 1 ? true : false}
        label={"Home"}
        Icon={() => <IconHome />}
        onClick={() => handleClick(1, "Home")}
      />
      <MenuButton
        active={rootStore.menu == 2 ? true : false}
        label={"Agendar"}
        Icon={() => <IconCalendarMenu />}
        onClick={() => handleClick(2, "Scheduling")}
      />
      <MenuButton
        active={rootStore.menu == 3 ? true : false}
        label={"Chat"}
        Icon={() => <IconChat />}
        onClick={() => {}}
      />
      <MenuButton
        active={rootStore.menu == 4 ? true : false}
        label={"Menu"}
        Icon={() => <IconMenu />}
        onClick={() => {}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flexDirection: "row",
    position: "absolute",
    bottom: Platform.OS === "ios" ? 0 : navbarHeight + 20,
    width: "100%",
    height: 70,
    borderTopWidth: 2,
    borderColor: "#EDEDED",
    paddingHorizontal: 15,
  },
});
