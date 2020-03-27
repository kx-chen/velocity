export const SET_TIME_FORMAT = "SET_TIME_FORMAT";
export const SET_DISPLAY_NAME = "SET_DISPLAY_NAME";

// TODO: fix naming, stop repeating self
export function setTimeFormat(format) {
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

export function setDisplayName(e) {
  return (dispatch) => {
    if (e.key === "Enter") {
      localStorage.setItem("name", e.target.value);
      dispatch(saveDisplayName(e.target.value));
    }
  };
}

function saveDisplayName(name) {
  return {
    type: SET_DISPLAY_NAME,
    display_name: name,
  };
}

function saveTimeFormat(format) {
  return {
    type: SET_TIME_FORMAT,
    time_format: format,
  };
}
