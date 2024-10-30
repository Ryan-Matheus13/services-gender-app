import React from "react";
import { Text, View } from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { StyleSheet } from "react-native";

LocaleConfig.locales["pt-br"] = {
  monthNames: [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ],
  dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
};
LocaleConfig.defaultLocale = "pt-br";

export default function NewCalendar() {
  return (
    <Calendar
      initialDate={"2024-12-10"}
      minDate={"2024-10-29"}
      onDayPress={(day: any) => {
        console.log("selected day", day);
      }}
      monthFormat={"MMMM yyyy"}
      hideExtraDays={true}
      firstDay={1}
      renderArrow={(direction: any) =>
        direction === "left" ? (
          <ArrowBackIosRoundedIcon />
        ) : (
          <ArrowForwardIosRoundedIcon />
        )
      }
      theme={{
        calendarBackground: "white",
        textSectionTitleColor: "#b6c1cd",
        selectedDayBackgroundColor: "#0084ff",
        selectedDayTextColor: "#ffffff",
        todayTextColor: "#0084ff",
        dayTextColor: "#2d4150",
        textDisabledColor: "#d9e1e8",
        monthTextColor: "#0084ff",
        textDayFontFamily: "sans-serif",
        textMonthFontFamily: "sans-serif-medium",
        textDayHeaderFontFamily: "sans-serif-medium",
        textDayFontSize: 16,
        textMonthFontSize: 20,
        textDayHeaderFontSize: 12,
      }}
      renderHeader={(date: any) => {
        const month = date.toString("MMMM yyyy");
        return (
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>{month}</Text>
          </View>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  arrowIcon: {
    color: "#0084ff",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 10,
  },
  headerText: {
    fontSize: 18,
    color: "#0084ff",
  },
});
