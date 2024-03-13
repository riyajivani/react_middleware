import { combineReducers } from 'redux'
import addReducer from './apiData/Reducer'

const rootReducer = combineReducers({
     addedData: addReducer,
});

export default rootReducer;
