import { h } from "preact";
import "../../css/Settings.css";
import { useEffect, useState } from "preact/hooks";
import SettingsIcon from "../components/SettingsIcon";
import SettingsModal from "../components/SettingsModal";
import { setWallpaper } from "../utils/utils";

function openSettingsMenu(open) {
  let modal = document.getElementById("myModal");
  let span = document.getElementsByClassName("close")[0];

  if (open) {
    modal.style.display = "block";
  } else {
    modal.style.display = "none";
  }

  span.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target === document.getElementById("body-wrapper")) {
      modal.style.display = "none";
    }
  };
}

function SettingsContainer() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    openSettingsMenu(menuOpen);
  }, [menuOpen]);

  return (
    <div>
      <div className="left-bottom">
        <SettingsIcon onClick={() => setMenuOpen(!menuOpen)} />
      </div>
      <SettingsModal handleWallpaperChange={setWallpaper} />
    </div>
  );
}

export default SettingsContainer;
