import { Action, Reducer } from "redux";
import UserCard from "../components/UserCard/UserCard";

const ADD_GITHUB_USER_ACTION = "ADD_GITHUB_USER_ACTION";

type User = {
    login: string;
    id: string;
    avatar_url: string;
}

const defaultUser:User = {
    login: '',
    id: '',
    avatar_url: ''
};

interface GithubReview {
    me: User,
    reviewer: User,
}

interface AddGithubUserAction extends Action<typeof ADD_GITHUB_USER_ACTION> {
    payload: GithubReview;
}

export function addGitHubUser(userData: GithubReview) {
    return {
        type: ADD_GITHUB_USER_ACTION,
        payload: userData
    };
}

const gitHubUsers: Reducer<GithubReview, AddGithubUserAction> = (
    state = {me: defaultUser, reviewer: defaultUser},
    { type, payload }
) => {
    switch (type) {
        case ADD_GITHUB_USER_ACTION:
            return { ...state, ...payload };
        default:
            return state;
    }
};

export default gitHubUsers;