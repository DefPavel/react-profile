import axios from "axios";
import { getGroupByIdAction , getAllGroupsAction } from "../reducers/groups-reducer";

/**
 * 0. Получить все группы по Id Студента
 */
export const fetchAllGroupsByStudent = (id_student) => {
    return async dispatch => {
        await axios.get(`/api/portfolio/groups/${id_student}`)
            .then(resp => {
                dispatch(getAllGroupsAction(resp.data))
            })
    }
};

/**
 * 1. Получить группу по Id
 */
export const fetchGroupById = (id_group) => {
    return async dispatch => {
        await axios.get(`/api/portfolio/group/${id_group}`)
            .then(resp => {
                dispatch(getGroupByIdAction(resp.data))
            })
    }
};