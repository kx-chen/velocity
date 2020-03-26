export const SET_TIME_FORMAT = "SET_TIME_FORMAT";

export function setTimeFormat(format) {
  // console.log('setTimeFormat', format);
  return (dispatch) => {
    localStorage.setItem("timeFormat", format);
    dispatch(saveTimeFormat(format));
  };
}

export function getTimeFormat() {
  return (dispatch) => {
    if (localStorage.getItem("timeFormat")) {
      dispatch(saveTimeFormat(localStorage.getItem("timeFormat") == "true"));
    }
  };
}

function saveTimeFormat(format) {
  console.log("saveTimeFormat", format);
  return {
    type: SET_TIME_FORMAT,
    time_format: format,
  };
}
