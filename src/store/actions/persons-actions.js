import axios from "axios";
import {getInfoByPerson, errorByPerson} from "../reducers/persons-reducer";

export const getStudentCard = (payload) => {
    return async dispatch => {
        await axios.get(`/api/portfolio/student/${1}`)
        .then(resp => {
            dispatch(getInfoByPerson(resp))
        })
        .catch(err => dispatch(errorByPerson(err.response.data)))
    }
}