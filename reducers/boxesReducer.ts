import { Box, Room } from "../entities";
import { generateId } from "../snowflake";

const initialState: Box[] = [];

export default function roomsReducer(state = initialState, action) {
    switch(action.type){
        case "boxes/create":
            return [
                ...state, {
                    ...action.payload,
                    id: generateId()
                } as Box
            ];
        case "boxes/delete":
            return state.filter(x => x.id !== action.payload.id);
        case "boxes/edit": 
            return [
                ...state.filter(x => x.id !== action.payload.id), action.payload
            ];
        case "boxes/clear":
            return [];
        default:
            return state;
    }
}