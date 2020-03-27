import { render, h } from "preact";
import App from "./App";
import { determineMessageUnderClock } from "./utils/utils";

function initPage() {
  render(<App />, document.getElementById("app"));

  fadeInBackground();
  setUserWallpaper();
  // setTimeout(fadeInBackground, 50);

  // TODO: move this logic out of here
  promptUserForNameIfNeeded();
}

function setUserWallpaper() {
  if (localStorage.getItem("background") !== null) {
    document.getElementById(
      "background"
    ).style.backgroundImage = `url(${localStorage.getItem("background")})`;
  }
}

function promptUserForNameIfNeeded() {
  if (localStorage.getItem("name") == null) {
    document.getElementById("name-form").style.display = "block";
    document.getElementById("clock").style.display = "none";
    document.getElementById("message-under-clock").style.display = "none";
  }
}

function fadeInBackground() {
  document.getElementById("background").style.display = "block";
}

function ready(fn) {
  if (document.readyState !== "loading") {
    fn();
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

ready(initPage);
