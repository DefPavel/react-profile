import axios from "axios";
import {
        getInfoByPerson, 
        getInfoGroupByPerson, 
        getInfoGroupById, 
        getInfoMarksByStudent,
        errorByPerson
    } from "../reducers/persons-reducer";

export const getStudentInfo = (payload) => {
    return async dispatch => {
        await axios.get(`/api/portfolio/student/${payload.id_student}`)
        .then(resp => {
            dispatch(getInfoByPerson(resp.data))
        })
        .catch(err => dispatch(errorByPerson(err.response.data.resp)))
    }
}
export const getGroupById = (id_group) => {
    return async dispatch => {
        await axios.get(`/api/portfolio/group/${id_group}`)
        .then(resp => {
            dispatch(getInfoGroupById(resp.data))
        })
        .catch(err => console.log(err))
    }
}
export const getStudentGroup = (payload) => {
    return async dispatch => {
        await axios.get(`/api/portfolio/groups/${payload.id_student}`)
        .then(resp => {
            dispatch(getInfoGroupByPerson(resp.data))
        })
        .catch(err => console.log(err))
    }
}
export const getMarks = (payload) => {
    return async dispatch => {
        await axios.get(`/api/portfolio/marks/${payload.id_group}/${payload.id_student}`)
        .then(resp => {
            dispatch(getInfoMarksByStudent(resp.data))
        })
        .catch(err => console.log(err))
    }
}