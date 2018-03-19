import axios from 'axios';

// declaring posts actions
export const FETCH_ALL = 'FETCH_ALL';
export const FETCH_POST = 'FETCH_POST';
export const NEW_POST = 'NEW_POST';
export const DELETE_POST = 'DELETE_POST';

// our local base url
const API_URL = 'http://localhost:8081';

// retrieve all posts
export const fetchAll = () => {
    const payload = axios.get(`${ API_URL }/api/posts`);

    return {
        type: FETCH_ALL,
        payload
    };
};

// retrieve a specific post
export const fetchPost = (id) => {
    const payload = axios.get(`${ API_URL }/api/post/${ id }`);

    return {
        type: FETCH_POST,
        payload
    };
};

// endpoint to create a post instance on DB
export const newPost = (values) => {
    const payload = axios.post(`${ API_URL }/api/new-post`, values)
                         .then(res => res);

    return {
        type: NEW_POST,
        payload
    };
};

// delete a specific post
export const deletePost = (id) => {
    const payload = axios.delete(`${ API_URL }/api/post/${ id }`);

    return {
       type: DELETE_POST,
       payload
   };
};
