import React from "react";
import "./Settings.css";
import Menu from "../Menu/Menu";

function Settings() {
  const [visibilitySettings, setVisibilitySettings] = 
  React.useState(localStorage.getItem("visibilitySettings") === "true"); 

  React.useEffect(() => {
      localStorage.setItem("visibilitySettings", visibilitySettings.toString());
  }, [visibilitySettings])

  const togglevisibilitySettings = () => {
    setVisibilitySettings(!visibilitySettings)
  };

  return (
    <div className="window">
      <div className="content">
        <h3>Поиск ревьювера</h3>
        <button className="button" onClick={togglevisibilitySettings}>Настройки</button>
        {visibilitySettings && <Menu />}
      </div>
    </div>
  );
}

export default Settings;