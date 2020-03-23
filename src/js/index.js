import { render, h } from "preact";
import App from "./App";

function initPage() {
  render(<App />, document.getElementById("app"));

  setTimeout(fadeInBackground, 100);

  document.getElementById("name").addEventListener("keydown", nameSubmitted);

  promptUserForNameIfNeeded();
  setUserWallpaper();
}

function setUserWallpaper() {
  if (localStorage.getItem("background") !== null) {
    document.getElementById(
      "body-wrapper"
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
  document.getElementById("body-wrapper").style.display = "block";
}

function nameSubmitted(e) {
  if (e.key === "Enter") {
    localStorage.setItem("name", e.srcElement.value);
    document.getElementById("name-form").style.display = "none";
    document.getElementById("clock").style.display = "block";
    document.getElementById("message-under-clock").style.display = "block";
  }
}

function ready(fn) {
  if (document.readyState !== "loading") {
    fn();
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

ready(initPage);
