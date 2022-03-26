const defaultState = {
    formControlSemester: [],
};

const GET_FORMCONTROL_BY_SEMESTER = 'GET_FORMCONTROL_BY_SEMESTER';

export const formControlReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_FORMCONTROL_BY_SEMESTER:
            return { ...state, formControlSemester: action.payload }
        default:
            return state
    }
};

export const getFormControlBySemesterAction = (payload) => ({type: GET_FORMCONTROL_BY_SEMESTER, payload });