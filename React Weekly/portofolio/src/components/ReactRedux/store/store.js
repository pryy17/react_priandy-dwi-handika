import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import todoSlice from "./todoSlice"

const reducers = combineReducers({
    todo : todoSlice,
}) 

const persistConfig = {
    key : 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, reducers);
const store = configureStore({ reducer: persistedReducer });
const persistor = persistStore(store);

export {store, persistor};