import { omit, mapKeys } from 'lodash';
import {
    FETCH_ALL,
    FETCH_POST,
    DELETE_POST
} from '../actions';

const posts = (state = {}, action) => {
    switch (action.type) {
        case FETCH_ALL:
            return mapKeys(action.payload.data, 'shortid');

        case FETCH_POST:
            return {
                ...state,
                [action.payload.data.shortid]: action.payload.data
            };

        case DELETE_POST:
            return omit(state, action.payload);

        default:
            return state;
    }
};

export default posts;
