const dateElement = document.getElementById("date");
const timeElement = document.getElementById("time");

const updateClock = () => {
  const now = new Date();
  let year = now.getFullYear();
  let month = now.getMonth() + 1;
  let day = now.getDate();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let ampm;

  if (hours >= 12) {
    ampm = "PM";
  } else {
    ampm = "AM";
  }

  hours = hours % 12;
  if (hours) {
  } else {
    hours = 12;
  }

  if (month < 10) {
    month = "0" + month;
  }
  if (day < 10) {
    day = "0" + day;
  }
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  const dateString = `${year}-${month}-${day}`;
  const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;

  dateElement.textContent = dateString;
  timeElement.textContent = timeString;
};

updateClock();

setInterval(updateClock, 1000);
