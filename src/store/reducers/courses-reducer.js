const defaultState = {
    groupCourses: {},
}

const GET_COURSES_BY_GROUP = 'GET_COURSES_BY_GROUP';

export const coursesReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_COURSES_BY_GROUP:
            return { ...state, groupCourses: action.payload }
        default:
            return state
    }
}

export const getCoursesByGroupAction = (payload) => ({type: GET_COURSES_BY_GROUP, payload })