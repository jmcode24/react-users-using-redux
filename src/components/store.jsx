import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import usersReducers from "../reducers/usersReducers";
import authReducer from "../reducers/authReducer";

const persistConfig = {
  key: "root",
  storage,
};

const reducers = combineReducers({
  users: usersReducers,
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };