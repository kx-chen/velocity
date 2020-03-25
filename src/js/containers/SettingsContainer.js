import { h } from "preact";
import "../../css/Settings.css";
import { useEffect, useState } from "preact/hooks";
import SettingsIcon from "../components/SettingsIcon";
import SettingsModal from "../components/SettingsModal";
import { setWallpaper } from "../utils/utils";

function SettingsContainer() {
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
      />
    </div>
  );
}

export default SettingsContainer;
