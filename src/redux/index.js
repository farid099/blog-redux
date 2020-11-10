import {combineReducers} from "redux";
import fetchPostReducer from './posts/postReducers';

const rootReducer = combineReducers({
    fetchPostReducer
})

export default rootReducer;