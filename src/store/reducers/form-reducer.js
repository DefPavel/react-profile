const defaultState = {
    formControlSemester: [],
};

const GET_FORMCONTROL_BY_SEMESTER = 'GET_FORMCONTROL_BY_SEMESTER';
const GET_FORMCONTROL_BY_ALL = 'GET_FORMCONTROL_BY_ALL';

export const formControlReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_FORMCONTROL_BY_SEMESTER:
            return { ...state, formControlSemester: action.payload }
            case GET_FORMCONTROL_BY_ALL:
                return { ...state, formControlSemester: action.payload }
        default:
            return state
    }
};

export const getFormControlBySemesterAction = (payload) => ({type: GET_FORMCONTROL_BY_SEMESTER, payload });
export const getAllFormControlAction = (payload) => ({type: GET_FORMCONTROL_BY_ALL, payload });