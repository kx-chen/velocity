import "../../css/Settings.css";
import SettingsIcon from "../components/SettingsIcon";
import SettingsModal from "../components/SettingsModal";
import { setTimeFormat } from "../actions/settings";
import { setWallpaper } from "../utils/utils";

import { useEffect, useState } from "preact/hooks";
import { h } from "preact";
import { connect } from "react-redux";

export function SettingsContainer({ changeTimeFormat, timeFormat }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // TODO: refactor, hacky.
    window.onclick = function (event) {
      let modal = document.getElementById("myModal");
      if (event.target === document.getElementById("body-wrapper")) {
        modal.style.display = "none";
        setMenuOpen(false);
      }
    };
  }, []);

  return (
    <div>
      <div className="left-bottom">
        <SettingsIcon onClick={() => setMenuOpen(!menuOpen)} />
      </div>
      <SettingsModal
        handleWallpaperChange={setWallpaper}
        closeMenu={() => setMenuOpen(false)}
        visible={menuOpen}
        changeTimeFormat={changeTimeFormat}
        timeFormat={timeFormat}
      />
    </div>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    changeTimeFormat: (timeFormat) => dispatch(setTimeFormat(timeFormat)),
  };
}

function mapStateToProps(state, ownProps) {
  return {
    ...state,
    timeFormat: state.time_format,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsContainer);
