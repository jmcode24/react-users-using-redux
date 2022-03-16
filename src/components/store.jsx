import { applyMiddleware, compose, createStore } from "redux";
import { getFirebase, reactReduxFirebase } from 'react-redux-firebase';
import { getFirestore, reduxFirestore} from 'redux-firestore';
import config from '../firebase/config';
import thunk from 'redux-thunk';
import usersReducers from "../reducers/usersReducers";

export const store = createStore(usersReducers,
    compose(
      applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
      reactReduxFirebase(config),
      reduxFirestore(config)
    )
  );