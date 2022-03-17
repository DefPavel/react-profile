import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {usersReducer} from "./reducers/users-reducer";


const rootReducer = combineReducers({
	user: usersReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
