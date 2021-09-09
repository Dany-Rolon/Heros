import { combineReducers } from "redux";
import { herosReducer } from './heroReducer';
import { userReducer } from './userReducer'
import { filterReducer } from './filtersReducer';

const reducers = combineReducers({
    heros: herosReducer,
    user: userReducer,
    filter: filterReducer
})

export default reducers