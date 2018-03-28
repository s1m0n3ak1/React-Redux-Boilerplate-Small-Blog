// naming conventions: [noun]_[action]
// eg.: if i have an action related to a blog post
// and the action is about retriving all the posts
// i will call that action: POST_FETCH_ALL
// if the action will retrieve only one specific posts
// i will call it: POST_FETCH_ONE

import axios from 'axios';

// Action Types
export const USER_CREATE_START = 'USER_CREATE_START';
export const USER_CREATE_SUCCESS = 'USER_CREATE_SUCCESS';
export const USER_CREATE_FAILURE = 'USER_CREATE_FAILURE';
export const USER_LOGIN_START = 'USER_LOGIN_START';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE';

// our local base url
const API_URL = 'http://localhost:8081';

export const userCreate = payload => {
  return {
    types: [
        USER_CREATE_START,
        USER_CREATE_SUCCESS,
        USER_CREATE_FAILURE
    ],
    callAPI: () => axios.post(`${ API_URL }/api/users/signup`, payload),
    payload: { payload }
  }
}

export const userLogin = payload => {
  return {
    types: [
        USER_LOGIN_START,
        USER_LOGIN_SUCCESS,
        USER_LOGIN_FAILURE
    ],
    callAPI: () => axios.get(`${ API_URL }/api/users/login`, payload),
    payload: { payload }
  }
}
