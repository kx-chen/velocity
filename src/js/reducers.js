import { SET_TIME_FORMAT, SET_DISPLAY_NAME } from "./actions/settings";

const initialState = {
  time_format: localStorage.getItem("timeFormat") == "true",
  display_name: localStorage.getItem("name"),
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TIME_FORMAT:
      return {
        ...state,
        time_format: action.time_format,
      };
    case SET_DISPLAY_NAME:
      return {
        ...state,
        display_name: action.display_name,
      };
    default:
      return state;
  }
}

export default rootReducer;
