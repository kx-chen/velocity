import { h } from "preact";

function SettingsModal({ handleWallpaperChange, closeMenu, visible }) {
  // TODO: hacky
  let display = "none";
  if (visible) {
    display = "block";
  }

  return (
    <div
      id="myModal"
      className="modal-content modal"
      style={{ display: display }}
    >
      <a className="close-icon close" onClick={() => closeMenu()}>
        <img
          src="../../icons/close-black-18dp.svg"
          alt="Close"
          height="35"
          width="35"
        />
      </a>
      <h1 className="settings"> Settings </h1>
      <h2>Set a background</h2>
      <input
        id="file"
        type="file"
        onChange={handleWallpaperChange}
        accept="image/*"
      />
    </div>
  );
}

export default SettingsModal;
