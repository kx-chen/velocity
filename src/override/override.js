function initPage() {
    initClock();
    setMessageUnderClock()
}

function initClock() {
    doTimeCount();
    setTimeout(initClock, 500);
}

function setMessageUnderClock() {
    // TODO: add to locales instead of string
    let message = "Hello.";
    const hours = getCurrentTime()[0];


    // TODO: do something else other than this to handle weird cases
    // TODO: add into translatable text!!
    if(hours > 24) {
        message = "Have a good day."
    } else if (hours >= 18) {
        message = "Good evening."
    } else if (hours < 6) {
        message = "Have a good night."
    } else if (hours >= 12) {
        message = "Good afternoon."
    } else if (hours >= 6) {
        message = "Good morning."
    }

    document.getElementById("message-under-clock").innerHTML = message;
}


function getCurrentTime() {
    const today = new Date();
    const h = today.getHours();
    let m = today.getMinutes();
    m = checkTime(m);

    return [h, m];
}

// TODO: better naming
function doTimeCount() {
    let time = getCurrentTime();
    setTimeOnPage(time);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i}  // add zero in front of numbers < 10
    return i;
}

function setTimeOnPage(time) {
    document.getElementById('clock').innerHTML =  time[0] + ":" + time[1];
}


function ready(fn) {
    if (document.readyState !== 'loading'){
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

ready(initPage());
