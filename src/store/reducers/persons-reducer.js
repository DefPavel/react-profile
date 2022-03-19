const defaultState = {
    persons: {},
	errors: {}
}

// Получить информацию о пресоне
const PERSONS_INFO = "PERSONS_INFO";
const PERSONS_ERROR = "PERSONS_ERROR";

export const personsReducer = (state = defaultState, action) => {
	switch (action.type) {
		case PERSONS_INFO:
			return {...state, user: {...action.payload}};
		case PERSONS_ERROR:
			return {...state, error: {...action.payload}};
		default:
			return state;
	}
}


export const getInfoByPerson = (payload) => ({type: PERSONS_INFO, payload });
export const errorByPerson = (payload) => ({type: PERSONS_ERROR, payload });