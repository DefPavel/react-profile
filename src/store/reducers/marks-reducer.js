const defaultState = {
    marksByStudent: [],
}

const GET_MARKS = 'GET_MARKS';

export const marksReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_MARKS:
            return { ...state, marksByStudent: [...action.payload] }
        default:
            return state
    }
};

export const getMarksAction = (payload) => ({type: GET_MARKS, payload });