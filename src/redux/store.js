import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
    FLUSH,
    PAUSE,
    PERSIST,
    persistReducer,
    persistStore,
    PURGE,
    REGISTER,
    REHYDRATE,
} from 'redux-persist'
import storage from 'redux-persist/es/storage' // localStorage (ESM build — avoids a Vite/CJS interop bug in 'lib/storage')
import cartReducer from './cartSlice'

const rootReducer = combineReducers({
    cart: cartReducer,
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'], // only persist the cart slice (items + wishlist)
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            // redux-persist dispatches non-serializable actions internally;
            // tell the serializability check to ignore them instead of
            // logging warnings for every app start.
            serializableCheck: {
                ignoredActions: [FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE],
            },
        }),
})

export const persistor = persistStore(store)