const defaultState = {
    person: {},
	group: {},
	error: {}
}

// Получить информацию о пресоне
const PERSONS_INFO = "PERSONS_INFO";
const GROUP_INFO = "GROUP_INFO";
const PERSONS_ERROR = "PERSONS_ERROR";

export const personsReducer = (state = defaultState, action) => {
	switch (action.type) {
		case PERSONS_INFO:
			return {...state, person: {...action.payload}};
		case GROUP_INFO:
			return {...state, group: {...action.payload}};
		case PERSONS_ERROR:
			return {...state, error: {...action.payload}};
		default:
			return state;
	}
}


export const getInfoByPerson = (payload) => ({type: PERSONS_INFO, payload });
export const getInfoGroupByPerson = (payload) => ({type: GROUP_INFO, payload });
export const errorByPerson = (payload) => ({type: PERSONS_ERROR, payload });