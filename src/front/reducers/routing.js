import { LOCATION_CHANGE } from 'react-router-redux';

const routing = (state = null, action) => {
    switch (action.type) {
        case LOCATION_CHANGE:
            return {
                ...state,
                locationBeforeTransitions: action.payload
            };
        default:
            return state;
    }
}

export default routing;
