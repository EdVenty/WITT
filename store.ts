import { applyMiddleware, createStore, Store } from 'redux'
import rootReducer from './reducer'
import { asyncStorageMiddleware } from './middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Box, Item, Room } from './entities';

// TODO: add preloaded state https://redux.js.org/tutorials/fundamentals/part-4-store#loading-initial-state

const middlewareEnhancer = applyMiddleware(asyncStorageMiddleware);


export const configureStoreAsync = () => {
    let preloadedState = {
        roomsReducer: [],
        boxesReducer: [],
        itemsReducer: []
    }
    return new Promise(async (resolve: (store: Store) => any) => {
        preloadedState.roomsReducer = (JSON.parse(await AsyncStorage.getItem('rooms')) ?? []) as Room[];
        preloadedState.boxesReducer = (JSON.parse(await AsyncStorage.getItem('boxes')) ?? []) as Box[];
        preloadedState.itemsReducer = (JSON.parse(await AsyncStorage.getItem('items')) ?? []) as Item[];
        const store = createStore(rootReducer, preloadedState, middlewareEnhancer);
        console.log('Store created.');
        console.log(store.getState());
        resolve(store);
    });
}