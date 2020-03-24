import { h } from "preact";

function SettingsIcon({ onClick }) {
  return (
    <a id="settings-cog" onClick={onClick}>
      <img
        src="../../icons/settings-24px.svg"
        alt="Settings"
        height="35"
        width="35"
      />
    </a>
  );
}

export default SettingsIcon;
