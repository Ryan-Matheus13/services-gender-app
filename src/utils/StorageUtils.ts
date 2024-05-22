type DayInfo = {
  day: number;
  dayName: string;
};

type MonthInfo = {
  month: string;
  days: DayInfo[];
};

class StorageUtils {
  static capitalize(str: string) {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }
  static getDaysOfNextThreeMonths(): MonthInfo[] {
    const result: MonthInfo[] = [];
    const currentDate = new Date();

    for (let i = 0; i < 3; i++) {
      const monthDays: DayInfo[] = [];
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth() + i;

      let date: Date;
      if (i === 0) {
        date = new Date(year, month, currentDate.getDate());
      } else {
        date = new Date(year, month, 1);
      }

      while (date.getMonth() === month % 12) {
        monthDays.push({
          day: date.getDate(),
          dayName: date.toLocaleString("pt-BR", { weekday: "short" }),
        });
        date.setDate(date.getDate() + 1);
      }

      const monthName = date.toLocaleString("pt-BR", { month: "long" });

      result.push({
        month: monthName,
        days: monthDays,
      });
    }

    return result;
  }
}

export default StorageUtils;
