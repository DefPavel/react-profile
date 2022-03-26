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
            }
        })
        .then(resp => {
            dispatch(getPlanIdByGroupAction(resp.data))
        })
    }
};