import axios from "axios";
import { getMarksAction } from "../reducers/marks-reducer";


export const fetchMarksByStudent = (id_group, id_student, semester, form, course, id_plan) => {
    return async dispatch => {
        await axios.get(`/api/portfolio/marks` , {
            params: {
                id_group,
                id_student,
                semester,
                form,
                course,
                id_plan
            },
        })  
        .then(resp => {
            dispatch(getMarksAction(resp.data))
        })
    }
};