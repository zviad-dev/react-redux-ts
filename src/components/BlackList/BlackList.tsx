import React from "react";
import "./BlackList.css";

function BlackList() {
  const [visibilityBlackList, setVisibilityBlackList] = React.useState(localStorage.getItem("visibilityBlackList") === 'true');
  
  React.useEffect(() => {
    localStorage.setItem("visibilityBlackList", visibilityBlackList.toString());
  }, [visibilityBlackList])

  const togglevisibilityBlackList = () => {
    setVisibilityBlackList(!visibilityBlackList);
  };

  const [blackList, setBlackList] = React.useState(JSON.parse(localStorage.getItem("blackList") || "[]"));
  const [input, setInput] = React.useState<string>("");

  React.useEffect(() => {
    localStorage.setItem("blackList", JSON.stringify(blackList));
  }, [blackList])

  const toggleBlackList = () => {
    setBlackList([...blackList, input]);
  }

  return (
    <React.Fragment>
      <h1 className="signatures">Черный список</h1> 
      <button className="button" onClick={togglevisibilityBlackList}>Настройки черного списка</button>
      {visibilityBlackList && 
      <React.Fragment>
        <input className="input" type="text" placeholder="логин нежелательного ревьювера"
          value={input}
          onInput={(event) => {setInput(event.currentTarget.value)}}/>
        <button className="button" onClick={toggleBlackList}>Добавить в черный список</button>
        <h1 className="signaturesBlackList">{JSON.stringify(blackList)}</h1> 
      </React.Fragment>
      }

    </React.Fragment>
  );
}

export default BlackList;