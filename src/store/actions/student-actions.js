import axios from "axios";
import { getStudentByIdAction } from "../reducers/student-reducer";
/**
 * Вернуть информацию о студенте по его Id
 */
export const fetchStudentById = (id_student) => {
    return async dispatch => {
        await axios.get(`/api/portfolio/student/${id_student}`)
        .then(resp => {
            dispatch(getStudentByIdAction(resp.data))
        });
    };
};

export const fetchUploadFile = (formData) => {
    return async () => {
        await axios.put(`/api/portfolio/student/files`, formData);
    };
};