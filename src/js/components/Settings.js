import { Component, h } from "preact";
import '../../css/Settings.css';

class Settings extends Component {
  constructor() {
    super();
    this.state = {
      value: ""
    };
  }

  render() {
    return (
      <div>
        <span className="close">X</span>
        <h1 className="settings"> Settings </h1>
      </div>
    );
  }
}

export default Settings;
