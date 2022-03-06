import { createStore } from "redux";
import usersReducers from "../reducers/usersReducers";

export const store = createStore(usersReducers);