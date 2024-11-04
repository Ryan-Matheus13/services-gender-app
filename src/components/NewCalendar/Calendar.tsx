import { Text, View } from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { LeftArrowIcon } from "../Icons/LeftArrowIcon";
import { RightArrowIcon } from "../Icons/RightArrowIcon";
import React from "react";
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
  monthNamesShort: [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ],
  dayNames: [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ],
  dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
  today: "Hoje",
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
        direction === "left" ? <LeftArrowIcon /> : <RightArrowIcon />
      }
      theme={{
        backgroundColor: "#ffffff",
        calendarBackground: "#ffffff",
        textSectionTitleColor: "#b6c1cd",
        textSectionTitleDisabledColor: "#d9e1e8",
        selectedDayBackgroundColor: "#00adf5",
        selectedDayTextColor: "#ffffff",
        todayTextColor: "#00adf5",
        dayTextColor: "#2d4150",
        textDisabledColor: "#d9e1e8",
        dotColor: "#00adf5",
        selectedDotColor: "#ffffff",
        arrowColor: "orange",
        disabledArrowColor: "#d9e1e8",
        monthTextColor: "blue",
        indicatorColor: "blue",
        textDayFontFamily: "monospace",
        textMonthFontFamily: "monospace",
        textDayHeaderFontFamily: "monospace",
        textDayFontWeight: "300",
        textMonthFontWeight: "bold",
        textDayHeaderFontWeight: "300",
        textDayFontSize: 16,
        textMonthFontSize: 16,
        textDayHeaderFontSize: 16,
      }}
      renderHeader={(dateIso: any) => {
        const date = new Date(dateIso);

        const monthYear = date.toLocaleDateString("pt-BR", {
          month: "long",
          year: "numeric",
        });

        return (
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>
              {monthYear
                .replace(" de ", " ")
                .replace(/^\w/, (c) => c.toUpperCase())}
            </Text>
          </View>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
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
