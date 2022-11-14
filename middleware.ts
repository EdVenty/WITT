import AsyncStorage from "@react-native-async-storage/async-storage";

const saveRooms = async rooms => {
    await AsyncStorage.setItem("rooms", JSON.stringify(rooms));
}

const saveBoxes = async boxes => {
    await AsyncStorage.setItem("boxes", JSON.stringify(boxes));
}

const saveItems = async items => {
    await AsyncStorage.setItem("items", JSON.stringify(items));
}

export const asyncStorageMiddleware = storeAPI => next => action => {
    console.log('dispatching', action);
    console.log(storeAPI.getState());
    let result = next(action);
    console.log(result);
    console.log('next state', storeAPI.getState())

    saveRooms(storeAPI.getState().roomsReducer);
    saveBoxes(storeAPI.getState().boxesReducer);
    saveItems(storeAPI.getState().itemsReducer);

    return result
}