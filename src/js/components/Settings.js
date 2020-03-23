import { h } from 'preact'
import '../../css/Settings.css'
import { useEffect } from 'preact/hooks'
import SettingsIcon from './SettingsIcon'
import SettingsModal from './SettingsModal'
import { setWallpaper } from '../utils/utils';

function openSettingsMenu(e) {
  let modal = document.getElementById("myModal");
  let span = document.getElementsByClassName("close")[0];

  modal.style.display = "block";

  span.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target === document.getElementById("body-wrapper")) {
      modal.style.display = "none";
    }
  };
}

function Settings () {
  useEffect(() => {
    document
      .getElementById("settings-cog")
      .addEventListener("click", openSettingsMenu);
  }, []);

  return (
    <div>
      <div className="left-bottom">
        <SettingsIcon />
      </div>
      <SettingsModal handleWallpaperChange={setWallpaper}/>
    </div>
  )
}

export default Settings
