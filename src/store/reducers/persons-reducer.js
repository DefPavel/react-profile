const defaultState = {
    person: {},
	group: {},
	marks: [],
	groups: [],
	error: {}
}


const PERSONS_INFO = "PERSONS_INFO";
const GROUP_INFO = "GROUP_INFO";
const GROUP_ID = "GROUP_ID";
const PERSONS_ERROR = "PERSONS_ERROR";
const MARKS = "MARKS";
/**
 * УДАЛИТЬ
 */
export const personsReducer = (state = defaultState, action) => {
	switch (action.type) {
		case PERSONS_INFO:
			return {...state, person: {...action.payload}};
		case GROUP_INFO:
			return {...state, groups: [...action.payload]};
		case MARKS:
			return {...state, marks: [...action.payload]};
		case GROUP_ID:
			return {...state, group: {...action.payload}};
		case PERSONS_ERROR:
			return {...state, error: {...action.payload}};
		default:
			return state;
	}
}


export const getInfoByPerson = (payload) => ({type: PERSONS_INFO, payload });
export const getInfoGroupById = (payload) => ({type: GROUP_ID, payload });
export const getInfoMarksByStudent = (payload) => ({type: MARKS, payload });
export const getInfoGroupByPerson = (payload) => ({type: GROUP_INFO, payload });
export const errorByPerson = (payload) => ({type: PERSONS_ERROR, payload });