import { h } from "preact";
import SettingsContainer from "./containers/SettingsContainer";
import ClockContainer from "./containers/ClockContainer";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <div id="body-wrapper">
        <ClockContainer />
        <SettingsContainer />
      </div>
    </Provider>
  );
}

export default App;
