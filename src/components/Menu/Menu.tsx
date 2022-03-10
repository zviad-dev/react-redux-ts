import React from "react";
import "./Menu.css";
import BlackList from "../BlackList/BlackList";
import CodeReview from "../CodeReview/CodeReview";

function Menu() {
  const [login, setLogin] = React.useState("");
  const [repo, setRepo] = React.useState("");

  return (
    <React.Fragment>
      <h1 className="signatures">Логин на GitHub</h1>
      <input className="input" type="text" placeholder="zviad-dev"
        value={login}
        onChange={(e) => setLogin(e.target.value)}/>
      <h1 className="signatures">Репозиторий</h1>
      <input className="input" type="text" placeholder="react"
        value={repo}
        onInput={(event) => setRepo(event.currentTarget.value)}/>
      <BlackList />
      <CodeReview login={login} repo={repo}/>
   </React.Fragment>

  );
}

export default Menu;