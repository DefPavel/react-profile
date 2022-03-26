import axios from "axios";
import {getAllFormControlAction} from "../reducers/form-reducer";

export const fetchAllFormControl = () => {
    return async dispatch => {
        await axios.get('/api/education/education_plan/control/all')
            .then(resp => {
                dispatch(getAllFormControlAction(resp.data))
            })
    }
};