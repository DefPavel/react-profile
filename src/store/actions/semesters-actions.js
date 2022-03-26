import axios from "axios";
import {getSemestersByCourseAction} from "../reducers/semesters-reducer";

export const fetchSemestersByCourse = (idCoursePlan, idGroup, withActive) => {
    return async dispatch => {
        await axios.get('/api/education/education_plan/semesters/byCourse', {
            params: {
                idCoursePlan,
                idGroup,
                withActive
            }
        })
        .then(resp => {
            dispatch(getSemestersByCourseAction(resp.data))
        })
    }
};