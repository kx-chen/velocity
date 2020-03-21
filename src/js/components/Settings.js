import { Component, h } from "preact";
import "../../css/Settings.css";

class Settings extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);

    reader.onload = (e) => {
      // redux!!
      document.getElementById(
        "body-wrapper"
      ).style.backgroundImage = `url(${e.target.result})`;
      localStorage.setItem("background", e.target.result);
    };
  }

  render() {
    return (
      <div>
        <a id="settings-cog" className="close-icon close">
          <img
            src="../../icons/close-black-18dp.svg"
            alt="Settings"
            height="35"
            width="35"
          />
        </a>
        <h1 className="settings"> Settings </h1>
        <h2>Set a background</h2>
        <input
          id="file"
          type="file"
          onChange={this.handleChange}
          accept="image/*"
        />
      </div>
    );
  }
}

export default Settings;
