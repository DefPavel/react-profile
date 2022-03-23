import axios from "axios";
import {getInfoByPerson, getInfoGroupByPerson,  errorByPerson} from "../reducers/persons-reducer";

export const getStudentInfo = (payload) => {
    return async dispatch => {
        await axios.get(`/api/portfolio/student/${payload.id_student}`)
        .then(resp => {
            dispatch(getInfoByPerson(resp.data))
        })
        .catch(err => dispatch(errorByPerson(err.response.data.resp)))
    }
}
export const getStudentGroup = (payload) => {
    return async dispatch => {
        await axios.get(`/api/portfolio/group/${payload.id_student}`)
        .then(resp => {
            dispatch(getInfoGroupByPerson(resp.data))
        })
        .catch(err => console.log(err))
    }
}