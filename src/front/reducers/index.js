import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import posts from './posts';
import users from './users';
import routing from './routing';

const rootReducer = combineReducers({
    form: formReducer,
    users,
    posts,
    routing
});

export default rootReducer;
