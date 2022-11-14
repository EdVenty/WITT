import { createSelector } from "@reduxjs/toolkit"
import { Room } from "./entities"

export const selectRooms = state => state.roomsReducer;
export const selectRoomById = createSelector(
    selectRooms,
    (rooms: Room[]) => (id: string) => rooms.find(x => x.id === id)
);

export const selectBoxes = state => state.boxesReducer;
export const selectItems = state => state.itemsReducer;