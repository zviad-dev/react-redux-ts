import React from "react";
import "./Settings.css";
import Menu from "../Menu/Menu";

function Settings() {
  const [visibilitySettings, setVisibilitySettings] = React.useState<string>(localStorage.getItem("visibilitySettings") || 'false');
  
  const togglevisibilitySettings = () => {
    const state = visibilitySettings === "true" ? "false" : "true"
    localStorage.setItem("visibilitySettings", state);
    setVisibilitySettings(state);
  };


  return (
    <div className="window">
      <div className="content">
        <h3>Поиск ревьювера</h3>
        <button className="button" onClick={togglevisibilitySettings}>Настройки</button>
        {visibilitySettings === "true" && <Menu />
        }
      </div>
    </div>
  );
}

export default Settings;