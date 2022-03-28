const defaultState = {
    plan: {}
}
const GET_PLAN_ID = 'GET_PLAN_ID';

export const planReducer = (state = defaultState, action) => {
	switch (action.type) {
		case GET_PLAN_ID:
			return {...state, plan: action.payload};
		default:
			return state;
	}
}

export const getPlanIdByGroupAction = (payload) => ({type: GET_PLAN_ID, payload })