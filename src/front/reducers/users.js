import {
    USER_CREATE_SUCCESS,
    USER_CREATE_FAILURE,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILURE
} from '../actions/users';

const users = (state = {}, action) => {
    switch (action.type) {
        case USER_CREATE_SUCCESS:
            return {
                ...state,
                user: action.payload.data.success
            };

        case USER_CREATE_FAILURE:
            return {
                ...state,
                userCreateError: action.err.response.data.message
            };

        case USER_LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload
            };

        case USER_LOGIN_FAILURE:
            return {
                ...state,
                userLoginError: action.payload.response.data.message
            }

        default:
            return state;
    }
};

export default users;
