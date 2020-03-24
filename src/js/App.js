import { h } from "preact";
import SettingsContainer from "./containers/SettingsContainer";
import ClockContainer from "./containers/ClockContainer";

function App() {
  return (
    <div id="body-wrapper">
      <ClockContainer />
      <SettingsContainer />
    </div>
  );
}

export default App;
