function setWallpaper(e) {
  const reader = new FileReader()
  reader.readAsDataURL(e.target.files[0])

  reader.onload = (e) => {
    document.getElementById(
      'body-wrapper'
    ).style.backgroundImage = `url(${e.target.result})`
    localStorage.setItem('background', e.target.result)
  }
}

function startClock() {
  doTimeCount();
  setTimeout(startClock, 500);
}

function setMessageUnderClock() {
  let message = "Hello.";
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

  if (document.getElementById("message-under-clock").innerHTML !== message) {
    document.getElementById("message-under-clock").innerHTML = message;
  }
}

function getCurrentTime() {
  const today = new Date();
  const h = today.getHours();
  let m = today.getMinutes();
  m = checkTime(m);

  return [h, m];
}

function doTimeCount() {
  setTimeOnPage(getCurrentTime());
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function setTimeOnPage(time) {
  setMessageUnderClock();

  if (
    parseInt(document.getElementById("minute").innerHTML) !== parseInt(time[1])
  ) {
    document.getElementById("hour").innerHTML = time[0];
    document.getElementById("minute").innerHTML = time[1];
  }
}

export { setWallpaper, startClock, checkTime, setTimeOnPage, doTimeCount, getCurrentTime, setMessageUnderClock };