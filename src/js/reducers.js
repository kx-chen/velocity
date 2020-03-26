import { SET_TIME_FORMAT } from "./actions/settings";

const initialState = {
  time_format: localStorage.getItem("timeFormat") == "true",
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TIME_FORMAT:
      return {
        time_format: action.time_format,
      };
    default:
      return state;
  }
}

export default rootReducer;
