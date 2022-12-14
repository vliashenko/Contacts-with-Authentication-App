import { configureStore } from "@reduxjs/toolkit";
import { 
    persistStore, 
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { authReducer } from "./auth"
import { contactsReducer } from "./contacts";

const middleware = (getDefaultMiddleware) =>
getDefaultMiddleware({
  serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  },
})

const authPersistConfig = {
    key: "auth",
    storage,
    whiteLlist: ["token"]
}

export const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authReducer),
        contacts: contactsReducer
    },
    middleware,
    devTools: process.env.NODE_ENV === "development"

})

export const persistor = persistStore(store)