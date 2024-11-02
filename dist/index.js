const fajrHours = 5;
const fajrMinutes = 25;

const maghribHours = 6;
const maghribMinutes = 34;

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

  if (val > 60) {
    ishaExitHours++;

    val = 60 - val;
  }

  return val;
};

const exactHours = Math.floor(ishaExitHours) + maghribHours;
const exactMinutes = Math.floor(ishaExitMinutes());

console.log(exactHours + ":" + exactMinutes);
