import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {usersReducer} from "./reducers/users-reducer";
import {studentReducer} from "./reducers/student-reducer";
import {groupsReducer} from "./reducers/groups-reducer";
import {planReducer} from "./reducers/plan-reducer";
import {coursesReducer} from "./reducers/courses-reducer";
import {semestersReducer} from "./reducers/semesters-reducer";
import {formControlReducer} from "./reducers/form-reducer";
import {marksReducer} from "./reducers/marks-reducer";

const rootReducer = combineReducers({
	users: usersReducer,
	students: studentReducer,
	groups: groupsReducer,
	plans: planReducer,
	courses: coursesReducer,
	semesters: semestersReducer,
	forms: formControlReducer,
	marks: marksReducer,

	
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
