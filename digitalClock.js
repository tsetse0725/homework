const dateElement = document.getElementById("date");
const timeElement = document.getElementById("time");
const dayElement = document.getElementById("day");

const updateClock = () => {
  const now = new Date();
  const year = now.getFullYear();
  const day = now.getDate().toString().padStart(2, "0");
  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  let ampm;
  if (hours >= 12) {
    ampm = "PM";
  } else {
    ampm = "AM";
  }

  hours = hours % 12;
  if (hours === 0) {
    hours = 12;
  } else {
    hours = hours;
  }

  hours = hours.toString().padStart(2, "0");

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthIndex = now.getMonth();
  const monthName = monthNames[monthIndex];
  const formattedMonthName =
    monthName.charAt(0).toUpperCase() + monthName.slice(1);

  const dateString = `${year}-${formattedMonthName}-${day}`;
  const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;

  dateElement.textContent = dateString;
  timeElement.textContent = timeString;

  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayIndex = now.getDay();
  const dayName = dayNames[dayIndex];
  dayElement.textContent = dayName;
};

updateClock();
setInterval(updateClock, 1000);
