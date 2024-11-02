const fajrHours = 5;
const fajrMinutes = 25;

const maghribHours = 6;
const maghribMinutes = 34;

// Calculate the average of the time difference between Maghrib and Fajr
let ishaExitHours = (12 - maghribHours + fajrHours) / 2;

const ishaExitMinutes = () => {
  const minutesDifference = fajrMinutes - maghribMinutes;
  let val;
  if (minutesDifference < 0) {
    ishaExitHours--;
    val = (60 + minutesDifference) / 2;
  } else {
    val = minutesDifference / 2;
  }

  val = val + (ishaExitHours % 1) * 60;

  if (val >= 60) {
    ishaExitHours++;
    val = val - 60;
  }

  return val;
};

// Calculate the exact hours and minutes for Isha exit time
const exactHours = Math.floor(ishaExitHours) + maghribHours;
const exactMinutes = Math.floor(ishaExitMinutes());

// Print the Isha exit time in HH:MM format
console.log(`${exactHours}:${exactMinutes < 10 ? "0" : ""}${exactMinutes}`);
