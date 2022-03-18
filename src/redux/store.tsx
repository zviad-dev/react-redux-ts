import { applyMiddleware, combineReducers, createStore } from "redux";

import gitHubUsers from "../models/githubusers";
import thunk from "./middlewares/thunk";

const stateFromServer = {};

const reducer = combineReducers({
    gitHubUsers
});

export type RootState = ReturnType<typeof reducer>;

declare module "react-redux" {
    interface DefaultRootState extends RootState {}
}

export default createStore(reducer, stateFromServer, applyMiddleware(thunk));
