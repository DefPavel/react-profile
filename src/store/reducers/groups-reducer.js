const defaultState = {
    selectedGroup: {},
    groups: [],
};

const GET_GROUP_BY_ID = 'GET_GROUP_BY_ID';
const GET_ALL_GROUPS = 'GET_ALL_GROUPS';


export const groupsReducer = (state = defaultState, action) => { 
    switch (action.type) {
        case GET_GROUP_BY_ID:
            return { ...state, selectedGroup: action.payload }
        case GET_ALL_GROUPS:
            return {...state, groups: [...action.payload]}    
        default:
            return state  
    }  
};

export const getGroupByIdAction = (payload) => ({type: GET_GROUP_BY_ID, payload });
export const getAllGroupsAction = (payload) => ({type: GET_ALL_GROUPS, payload });