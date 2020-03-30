import SettingsContainer from "./containers/SettingsContainer";
import ClockContainer from "./containers/ClockContainer";
import rootReducer from "./reducers";

import { Provider } from "react-redux";
import { h } from "preact";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <div id="body-wrapper" className="inner">
        <ul id="background" className="background" />
        <ul id="fade" className="background" />
        <ClockContainer />
        <div className="left-bottom">
          <SettingsContainer />
        </div>
        <div className="center-bottom">
          <h1>"My dogs are named Billy and Panda." -Angus Smith</h1>
        </div>
      </div>
    </Provider>
  );
}

export default App;
