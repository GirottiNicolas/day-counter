
export class DayCounter {

  static MS_PER_DAY = 1000 * 60 * 60 * 24;
  static MAX_YEAR = 9999;

  constructor(title, dateString) {
    this.title = title;
    this.date = this.dateStringToDate(dateString);
  }

  dateStringToDate(dateString){
    const [year, month, day] = dateString.split("-").map(Number);
    const newDate = new Date(year, month - 1, day);
    newDate.setHours(0, 0, 0, 0);

    return newDate
  }

  numberOfDaysSince() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return Math.abs(
      Math.floor((today - this.date) / DayCounter.MS_PER_DAY)
    );
  }

  verifyDate(dateString){
    const dateToCheck = this.dateStringToDate(dateString);
    return this.isADateAfterToday(dateToCheck) && this.isAValidDateForMonth(dateString) && this.isAValidYear(dateToCheck); 
  }

  isADateAfterToday(date){
    return date > Date.now()
  }

  isAValidDateForMonth(dateString){
    const [year, month, day] = dateString.split("-").map(Number);
    const dateToCheck = this.dateStringToDate(dateString);

    return (
      dateToCheck.getFullYear() === year &&
      dateToCheck.getMonth() === month - 1 &&
      dateToCheck.getDate() === day
    );
  }

  isAValidYear(date){
    return date.getFullYear <= DayCounter.MAX_YEAR;
  }
}