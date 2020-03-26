import { h } from "preact";
import "../../css/Settings.css";
import { useEffect, useState } from "preact/hooks";
import SettingsIcon from "../components/SettingsIcon";
import SettingsModal from "../components/SettingsModal";
import { setWallpaper } from "../utils/utils";
import { getTimeFormat, setTimeFormat } from "../actions/settings";
import { connect } from "react-redux";

export function SettingsContainer({ changeTimeFormat, timeFormat, dispatch }) {
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

  // TODO: find if use of setMenuOpen down there is ok
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
    dispatch,
  };
}

function mapStateToProps(state, ownProps) {
  return {
    ...state,
    timeFormat: state.time_format,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsContainer);
