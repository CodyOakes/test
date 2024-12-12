const getNthWeekdayOfMonth = (
  n: number,
  dayOfWeek: number,
  month: number,
  year: number
): Date => {
  const firstDay = new Date(year, month, 1); // 1st day of the month
  const firstDayOfWeek = firstDay.getDay(); // Day of the week (0 = Sunday, 6 = Saturday)
  const offset = (dayOfWeek - firstDayOfWeek + 7) % 7;

  if (n > 0) {
    // For nth occurrence
    return new Date(year, month, 1 + offset + (n - 1) * 7);
  } else {
    // For the last occurrence
    const lastDay = new Date(year, month + 1, 0); // Last day of the month
    const lastDayOfWeek = lastDay.getDay();
    return new Date(
      year,
      month,
      lastDay.getDate() - ((lastDayOfWeek - dayOfWeek + 7) % 7)
    );
  }
};

const getHdmHolidays = (year: number): Date[] => [
  new Date(year, 0, 1), // New Year's Day (January 1)
  getNthWeekdayOfMonth(-1, 1, 4, year), // Memorial Day: Last Monday of May
  new Date(year, 6, 4), // Independence Day (July 4)
  getNthWeekdayOfMonth(1, 1, 8, year), // Labor Day: 1st Monday of September
  getNthWeekdayOfMonth(4, 4, 10, year), // Thanksgiving Day: 4th Thursday of November
  new Date(year, 11, 25), // Christmas Day (December 25)
];

export const isHdmHoliday = () => {
  const today = new Date();
  const holidays = getHdmHolidays(today.getFullYear());

  return holidays.some(
    (holiday) =>
      today.getDate() === holiday.getDate() &&
      today.getMonth() === holiday.getMonth() &&
      today.getFullYear() === holiday.getFullYear()
  );
};
