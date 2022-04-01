const defaultState = {
    documents: [],
}

const GET_DOCUMENTS_BY_STUDENT = 'GET_DOCUMENTS_BY_STUDENT';

export const documentsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_DOCUMENTS_BY_STUDENT:
            return { ...state, documents: action.payload }
        default:
            return state
    }
}

export const getDocumentsByStudentAction = (payload) => ({type: GET_DOCUMENTS_BY_STUDENT, payload })