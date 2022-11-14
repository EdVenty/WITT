import { Item, Room } from "../entities";
import { generateId } from "../snowflake";

const initialState: Item[] = [];

export default function itemsReducer(state = initialState, action) {
    switch(action.type){
        case "items/create":
            return [
                ...state, {
                    ...action.payload,
                    id: generateId()
                } as Item
            ];
        case "items/delete":
            return state.filter(x => x.id !== action.payload.id);
        case "items/edit": 
            return [
                ...state.filter(x => x.id !== action.payload.id), action.payload
            ];
        case "items/clear":
            return [];
        default:
            return state;
    }
}