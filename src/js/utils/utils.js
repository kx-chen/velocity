function setWallpaper(e) {
  const reader = new FileReader();
  reader.readAsDataURL(e.target.files[0]);

  reader.onload = (e) => {
    document.getElementById(
      "body-wrapper"
    ).style.backgroundImage = `url(${e.target.result})`;
    localStorage.setItem("background", e.target.result);
  };
}

// TODO: make time a parameter
function determineMessageUnderClock() {
  let message = "";
  const hours = getCurrentTime()[0];

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
function getCurrentTime() {
  const today = new Date();
  const h = today.getHours();
  let m = today.getMinutes();
  m = checkTime(m);

  return [h, m];
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

export { determineMessageUnderClock, setWallpaper, getCurrentTime };
