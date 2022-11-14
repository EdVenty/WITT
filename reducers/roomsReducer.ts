import { Room } from "../entities";
import { generateId } from "../snowflake";

const initialState: Room[] = [];

export default function roomsReducer(state = initialState, action) {
    switch(action.type){
        case "rooms/create":
            return [
                ...state, {
                    ...action.payload,
                    id: generateId()
                } as Room
            ];
        case "rooms/delete":
            return state.filter(x => x.id !== action.payload.id);
        case "rooms/edit": 
            return [
                ...state.filter(x => x.id !== action.payload.id), action.payload
            ];
        case "rooms/clear":
            return [];
        default:
            return state;
    }
}