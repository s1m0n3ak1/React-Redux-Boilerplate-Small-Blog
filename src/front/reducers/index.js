import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import posts from './posts';
import routing from './routing';

const rootReducer = combineReducers({
    form: formReducer,
    posts,
    routing
});

export default rootReducer;
