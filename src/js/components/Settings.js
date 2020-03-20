import { Component, h } from "preact";

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
        <h1> Settings </h1>
      </div>
    );
  }
}

export default Settings;
