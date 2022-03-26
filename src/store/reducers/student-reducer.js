const defaultState = {
    student: {},
}


const GET_STUDENT_BY_ID = 'GET_STUDENT_BY_ID';

export const studentReducer = (state = defaultState, action) => {
	switch (action.type) {
		case GET_STUDENT_BY_ID:
			return {...state, student: {...action.payload}};
		default:
			return state;
	}
}

export const getStudentByIdAction = (payload) => ({type: GET_STUDENT_BY_ID, payload })