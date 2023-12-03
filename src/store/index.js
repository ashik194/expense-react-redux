import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { expenseSlice } from "./expenses/expense-slice";
import { authSlice } from "./auth/auth-slice";
import storage from "redux-persist/lib/storage";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'

const rootReducer = combineReducers({
    EXPENSE: expenseSlice.reducer,
    AUTH: authSlice.reducer
})

const persistConfig = {
    key: "root",
    storage,
    // blacklist: ["EXPENSE"],
    // whitelist: [""],
}

const persistedReducers = persistReducer(persistConfig, rootReducer);

const store = configureStore({reducer: persistedReducers,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

const persistorData = persistStore(store)

export {store, persistorData}