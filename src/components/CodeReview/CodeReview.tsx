import React from "react";
import UserCard from "../UserCard/UserCard";
import "./CodeReview.css";
import { useSelector, useDispatch} from "react-redux";
import fetchUser from "../../models/fetchUser";

function CodeReview({login, repo}:{login: string, repo: string}) {
    const {me, reviewer} = useSelector(({ gitHubUsers }) => gitHubUsers);
    const dispatch = useDispatch();

    const togglevisibilityCodeReview = () => {
      if (login && repo) {
        dispatch(fetchUser(login, repo));
      } else{
        alert("Необходимо заполнить все поля");
      }
  };

  return (
    <React.Fragment>
      <h1 className="signatures">Поиск ревьювера</h1> 
      <button className="button" onClick={togglevisibilityCodeReview}>Начать поиск</button>
      {me.login && reviewer.login &&
        <div className={"result"}>
          <UserCard login={me.login} avatar={me.avatar_url} />
          <UserCard login={reviewer.login} avatar={reviewer.avatar_url} />
        </div>
      }
    </React.Fragment>
  );
}

export default CodeReview;
