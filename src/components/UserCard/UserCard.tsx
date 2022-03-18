import React from "react";
import "./UserCard.css";

function UserCard({login, avatar}:{login: string, avatar: string}) {

  return (
    <React.Fragment>
          <a className="position" href={"https://github.com/" + login}>
              <div className="image" style={{ backgroundImage: `url(${avatar}` }} />
              <div className="signaturesLogin">{login}</div>
              <div className="signaturesRole">{"Пользователь"}</div>
          </a>
   </React.Fragment>

  );
}

export default UserCard;