import { addGitHubUser } from "../models/githubusers";
import store, { RootState } from "../redux/store";
import { Dispatch } from "redux";
import React from "react";

type User = {
  login: string;
  id: string;
  avatar_url: string;
}

export default function findUser(login: string, repo: string) {
  return function (dispatch: Dispatch, getState: () => RootState) {
    return fetch(`https://api.github.com/repos/${login}/${repo}/contributors`)
    .then((response) => response.json())
    .then((data) => {

      const filteredReviewer = data.filter(
        (item:User) => (
        item.login !== login &&
        JSON.parse(localStorage.getItem("blackList") || "[]").indexOf(item.login) === -1
        ));
  
      const filteredUser = data.find((item:User) => item.login === login);
  
      if (filteredReviewer.length) {
        const randomReviewer: User = filteredReviewer[Math.floor(Math.random() * filteredReviewer.length)]
        dispatch(addGitHubUser({me: filteredUser, reviewer: randomReviewer}));
        } else{
          alert("Ревьювера по данным настройкам нет");
        }
                  
    })
    .catch(function (err) {
      console.warn('Что-то пошло не так.', err);
      alert("Что-то пошло не так. Возможно ошибка в логине или репозитории данных");
      })

  };
}

