import axios from "axios";
import { getPlanIdByGroupAction } from "../reducers/plan-reducer";
/**
 * 2. Получить Id Специальности и год начала обучения от Группы
 */
export const fetchPlanIdByGroup = (idSpecialty, yearAdmission) => {
    return async dispatch => {
        await axios.get('/api/education/education_plan/byGroup', {
            params: {
                idSpecialty,
                yearAdmission
            },
            /*headers: {
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbiI6InN0dWRlbnQiLCJpZF91c2VyIjoyLCJpZF9vcmciOjEsImlkX21vZHVsZSI6NH0.T5_tIfZe3SN6X26MwH-BuC7zVjehU6dUwvSrkAGjA_E'
            } */
        })
        .then(resp => {
            dispatch(getPlanIdByGroupAction(resp.data))
        })
    }
};