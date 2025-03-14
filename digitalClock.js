const dateElement = document.getElementById("date");
const timeElement = document.getElementById("time");

const updateClock = () => {
  const now = new Date();
  let year = now.getFullYear();
  let month = (now.getMonth() + 1).toString().padStart(2, "0");
  let day = now.getDate().toString().padStart(2, 0)
  let hours = now.getHours().toString().padStart(2, "0");
  let minutes = now.getMinutes().toString().padStart(2, "0");
  let seconds = now.getSeconds().toString().padStart(2, "0");
  let ampm;

  // const tz = now.getTimezoneOffset();
  // console.log("TX",tz)

  const monthNames = ["jan", "feb", "mar", "apr", "may", "june", "july", "aug", "sep", "oct", "nov"];
  let monthINdex = now.getMonth();
  let monthName = monthNames[monthINdex];

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

  hours = hours.toString().padStart(2, "0");

  const dateString = `${year}-${monthName.toUpperCase()}-${day}`;
  const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;

  dateElement.textContent = dateString;
  timeElement.textContent = timeString;
};

updateClock();

setInterval(updateClock, 1000);


