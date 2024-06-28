import {createStore, applyMiddleware, combineReducers} from "redux";
import languageReducer from "./languageReducer";
import thunkMiddleware from "redux-thunk";
import layoutsReducer from "./layoutsReducer";
import themeReducer from "./themeReducer";


const reducers = combineReducers({
    language: languageReducer,
    layouts: layoutsReducer,
    themes: themeReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;