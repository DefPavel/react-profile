import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {usersReducer} from "./reducers/users-reducer";
import {personsReducer} from "./reducers/persons-reducer";


const rootReducer = combineReducers({
	users: usersReducer,
	persons: personsReducer
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
