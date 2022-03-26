import axios from "axios"
import {getCoursesByGroupAction} from "../reducers/courses-reducer";

export const fetchCoursesByGroup = (idPlan, idGroup) => {
    return async dispatch => {
        await axios.get('/api/education/education_plan/courses', {
            params: {
                idPlan,
                idGroup
            }
        })
        .then(resp => {
            dispatch(getCoursesByGroupAction(resp.data))
        })
    }
};