const defaultState = {
	user: {},
	error: {}
}

const SIGN_IN = "SIGN_IN";
const SIGN_IN_ERROR = "SIGN_IN_ERROR";

export const usersReducer = (state = defaultState, action) => {
	switch (action.type) {
		case SIGN_IN:
			return {...state, user: {...action.payload}};
		case SIGN_IN_ERROR:
			return {...state, error: {...action.payload}};
		default:
			return state;
	}
}

export const signInAction = (payload) => ({type: SIGN_IN, payload });
export const signInErrorAction = (payload) => ({type: SIGN_IN_ERROR, payload });
