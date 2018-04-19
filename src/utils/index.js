import moment from 'moment';

// Will return the current day number from the given start date
// Will return 0 if the start date is in the future
export const currentDayNumber = (startDate, today = moment()) => {
  const mStart = moment(startDate);
  const dayNumber = today.diff(mStart, 'days') + 1;
  return dayNumber > 0 ? dayNumber : 0;
};

export const currentWeekNumber = (startDate, today = moment()) => {
  const dayNumber = currentDayNumber(startDate, today);
  const weekNumber = Math.floor(dayNumber / 7) + 1;
  return weekNumber;
};
