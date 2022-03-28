import axios from "axios";
import {getFormControlBySemesterAction ,getAllFormControlAction } from "../reducers/form-reducer";

export const fetchAllFormControl = () => {
    return async dispatch => {
        await axios.get('/api/education/education_plan/control/all')
            .then(resp => {
                dispatch(getAllFormControlAction(resp.data))
            })
    }
};

export const fetchFormControlSemester = (idPlan, semester, course) => {
    return async dispatch => {
        await axios.get('/api/education/education_plan/control/byGroupSemester', {
            params: {
                idPlan,
                semester,
                course
            }
        })
            .then(resp => {
                dispatch(getFormControlBySemesterAction(resp.data))
            })
    }
};