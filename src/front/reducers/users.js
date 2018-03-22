import {
    USER_CREATE,
    USER_LOGIN,
} from '../actions';

const users = (state = {}, action) => {
    switch (action.type) {
        case USER_CREATE:
            return {
                ...state,
                user: action.payload.data
            }

        case USER_LOGIN:
            return {
                ...state,
                user: action.payload.data
            };

        default:
            return state;
    }
};

export default users;
