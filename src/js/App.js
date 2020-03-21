import { h } from "preact";
import NameForm from "./components/NameForm";
import Clock from "./components/Clock";
import UnderClockMessage from "./components/UnderClockMessage";
import SettingsIcon from "./components/SettingsIcon";

function App() {
  return (
    <div id="body-wrapper">
      <div id="clock-wrapper">
        <NameForm />
        <Clock />
        <UnderClockMessage />
      </div>

      <div className="left-bottom">
        <SettingsIcon />
      </div>
    </div>
  );
}

export default App;
