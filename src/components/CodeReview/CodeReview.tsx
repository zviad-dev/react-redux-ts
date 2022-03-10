import React from "react";
import "./CodeReview.css";

function CodeReview({login, repo}:{login: string, repo: string}) {
    const [visibilityCodeReview, setVisibilityCodeReview] = React.useState<string>(localStorage.getItem("visibilityCodeReview") || 'false');
    const [reviewer, setReviewer] = React.useState<any>("");
    const [user, setUser] = React.useState<any>("");
    const togglevisibilityCodeReview = () => {
      const state = visibilityCodeReview === "true" ? "false" : "true"
      localStorage.setItem("visibilityCodeReview", state);
      setVisibilityCodeReview(state);

      if (login && repo) {
        fetch(`https://api.github.com/repos/${login}/${repo}/contributors`)
        .then(function(response) {return response.json();})
        .then(function(data) {
          
          const filteredReviewer = data.filter(
            (item:any) => (
              item.login !== login &&
              JSON.parse(localStorage.getItem("blackList") || "[]").indexOf(item.login) === -1
            )
          );

          const filteredUser = data.filter(
            (item:any) => (
              item.login === login
              )
          );
          setUser(filteredUser[0].avatar_url);
          console.log(user);
          if (filteredReviewer.length) {
            const randomReviewer: any = filteredReviewer[Math.floor(Math.random() * filteredReviewer.length)]
            setReviewer({avatar: randomReviewer.avatar_url, login: randomReviewer.login})
          }

          
        })
        .catch(function (err) {
        console.warn('Что-то пошло не так.', err);
        })
      } else{
        alert("Необходимо заполнить все поля");
      }
  };

  return (
    <React.Fragment>
      <h1 className="signatures">Поиск ревьювера</h1> 
      <button className="button" onClick={togglevisibilityCodeReview}>Начать поиск</button>
      {visibilityCodeReview === "true" && (login && repo) &&
      <React.Fragment>
        <div className={"result"}>
          <a className="position" href={"https://github.com/" + login}>
              <div className="image" style={{ backgroundImage: `url(${user}` }} />
              <div className="signaturesLogin">{login}</div>
              <div className="signaturesRole">{"Пользователь"}</div>
          </a>
          <a className="position" href={"https://github.com/" + reviewer.login}>
              <div className="image" style={{ backgroundImage: `url(${reviewer.avatar}` }} />
              <div className="signaturesLogin">{reviewer.login}</div>
              <div className="signaturesRole">{"Ревьювер"}</div>
          </a>
        </div>
      </React.Fragment>
      }

    </React.Fragment>
  );
}

export default CodeReview;
