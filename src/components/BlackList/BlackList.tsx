import React from "react";
import "./BlackList.css";

function BlackList() {
  const [visibilityBlackList, setVisibilityBlackList] = React.useState<string>(localStorage.getItem("visibilityBlackList") || 'false');

  const [blackList, setBlackList] = React.useState(JSON.parse(localStorage.getItem("blackList") || "[]"));
  const [input, setInput] = React.useState<string>("");
  const togglevisibilityBlackList = () => {
    const state = visibilityBlackList === "true" ? "false" : "true"
    localStorage.setItem("visibilityBlackList", state);
    setVisibilityBlackList(state);
  };

  const toggleBlackList = () => {
    localStorage.setItem("blackList", JSON.stringify([...blackList, input]));
    setBlackList([...blackList, input]);
  }

  return (
    <React.Fragment>
      <h1 className="signatures">Черный список</h1> 
      <button className="button" onClick={togglevisibilityBlackList}>Настройки черного списка</button>
      {visibilityBlackList === "true" && 
      <React.Fragment>
        <input className="input" type="text" placeholder="логин нежелательного ревьювера"
          value={input}
          onInput={(event) => {setInput(event.currentTarget.value)}}/>
        <button className="button" onClick={toggleBlackList}>Добавить в черный список</button>
        <h1 className="signaturesBlackList">{localStorage.getItem('blackList')}</h1> 
      </React.Fragment>
      }

    </React.Fragment>
  );
}

export default BlackList;