import { omit, mapKeys } from 'lodash';
import {
    POST_FETCH_ALL,
    POST_FETCH_ONE,
    POST_DELETE
} from '../actions/posts';

const posts = (state = {}, action) => {
    switch (action.type) {
        case POST_FETCH_ALL:
            return mapKeys(action.payload.data, 'shortid');

        case POST_FETCH_ONE:
            return {
                ...state,
                [action.payload.data.shortid]: action.payload.data
            };

        case POST_DELETE:
            return omit(state, action.payload);

        default:
            return state;
    }
};

export default posts;
