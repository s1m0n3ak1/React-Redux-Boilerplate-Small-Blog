// naming conventions: [noun]_[action]
// eg.: if i have an action related to a blog post
// and the action is about retriving all the posts
// i will call that action: POST_FETCH_ALL
// if the action will retrieve only one specific posts
// i will call it: POST_FETCH_ONE

import axios from 'axios';

// declaring posts actions
export const POST_FETCH_ALL = 'POST_FETCH_ALL';
export const POST_FETCH_ONE = 'POST_FETCH_ONE';
export const POST_NEW = 'POST_NEW';
export const POST_DELETE = 'POST_DELETE';

// our local base url
const API_URL = 'http://localhost:8081';

// retrieve all posts
export const postFetchAll = () => {
    const payload = axios.get(`${ API_URL }/api/posts`);

    return {
        type: POST_FETCH_ALL,
        payload
    };
};

// retrieve a specific post
export const postFetchOne = id => {
    const payload = axios.get(`${ API_URL }/api/posts/${ id }`);

    return {
        type: POST_FETCH_ONE,
        payload
    };
};

// endpoint to create a post instance on DB
export const postNew = values => {
    const payload = axios.post(`${ API_URL }/api/posts/new`, values)
                         .then(res => res);

    return {
        type: POST_NEW,
        payload
    };
};

// delete a specific post
export const postDelete = id => {
    const payload = axios.delete(`${ API_URL }/api/posts/${ id }`);

    return {
       type: POST_DELETE,
       payload
   };
};
