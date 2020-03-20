import Form from "./Form";
import { render } from 'preact';
import React from "preact/compat";

function initPage() {
  const wrapper = document.getElementById("container");
  render(<Form />, wrapper);

  startClock();
  setMessageUnderClock();

  setTimeout(fadeInBackground, 100);
  document
    .getElementById("settings-cog")
    .addEventListener("click", openSettingsMenu);

  document.getElementById("name").addEventListener("keydown", nameSubmitted);

  promptUserForNameIfNeeded();
}

function promptUserForNameIfNeeded() {
  if (localStorage.getItem("name") == null) {
    document.getElementById("name-form").style.display = "block";
    document.getElementById("clock").style.display = "none";
    document.getElementById("message-under-clock").style.display = "none";
  }
}

function openSettingsMenu(e) {
  alert("settings");
}

function fadeInBackground() {
  document.getElementById("body-wrapper").style.display = "block";
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
