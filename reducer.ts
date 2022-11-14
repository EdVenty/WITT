import { combineReducers } from 'redux'
import boxesReducer from './reducers/boxesReducer';
import itemsReducer from './reducers/itemsReducer';
import roomsReducer from "./reducers/roomsReducer";

const rootReducer = combineReducers({
    roomsReducer,
    boxesReducer,
    itemsReducer
});

export default rootReducer;