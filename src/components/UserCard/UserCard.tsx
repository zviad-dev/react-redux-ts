import React from "react";
import "./UserCard.css";

function UserCard({login, avatar, role}:{login: string, avatar: string, role: string}) {

  return (
    <React.Fragment>
          <a className="position" href={"https://github.com/" + login}>
              <div className="image" style={{ backgroundImage: `url(${avatar}` }} />
              <div className="signaturesLogin">{login}</div>
              <div className="signaturesRole">{role}</div>
          </a>
   </React.Fragment>

  );
}

export default UserCard;