// TODO: feels too tightly coupled with localStorage, FileReader, etc.
function setWallpaper(e) {
  const reader = new FileReader();
  reader.readAsDataURL(e.target.files[0]);

  reader.onload = (e) => {
    document.getElementById(
      "background"
    ).style.backgroundImage = `url(${e.target.result})`;
    localStorage.setItem("background", e.target.result);
  };
}

// TODO: decouple from localStorage
function determineMessageUnderClock() {
  let message = "";
  let hours = getCurrentTime(false)[0];

  if (hours > 24) {
    message = "Have a good day";
  } else if (hours >= 18) {
    message = "Good evening";
  } else if (hours < 6) {
    message = "Have a good night";
  } else if (hours >= 12) {
    message = "Good afternoon";
  } else if (hours >= 6) {
    message = "Good morning";
  }

  message += ", " + localStorage.getItem("name") + ".";

  return message;
}

// TODO: return something other than array?
function getCurrentTime(twelveHour) {
  // TODO: parameter?
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  m = checkTime(m);

  if (twelveHour) {
    h = h % 12;
  }

  return [h, m];
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

export { determineMessageUnderClock, setWallpaper, getCurrentTime, checkTime };
