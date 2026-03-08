import {legacy_createStore,compose, applyMiddleware} from "redux";
import{thunk} from "redux-thunk";

import {reducer as musicReducer} from "./Reducer";

const composeEnhancers=
type window === "object" && window.
_REDUX_DEVTOOL_EXTENSION_COMPOSE_
? window._REDUX_DEVTOOL_EXTENSION_COMPOSE_({

    // Specifi
})
:compose;

const enhancer=composeEnhancers(applyMiddleware(thunk));
export const myStore=legacy_createStore(musicReducer,
    enhancer);