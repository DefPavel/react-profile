const defaultState = {
    semestersCourse: {},
}

const GET_SEMESTERS_BY_COURSE = 'GET_SEMESTERS_BY_COURSE';

export const semestersReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_SEMESTERS_BY_COURSE:
            return { ...state, semestersCourse: action.payload }
        default:
            return state
    }
}

export const getSemestersByCourseAction = (payload) => ({type: GET_SEMESTERS_BY_COURSE, payload })