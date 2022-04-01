import axios from "axios";
import { getDocumentsByStudentAction } from "../reducers/documents-reducer";

export const fetchAllDocuments = (idStudent, currentPage) => {
    return async dispatch => {
        await axios.get('/api/portfolio/certificates', {
            params: {
                idStudent,
                currentPage,
            }
        }) 
        .then(resp => {
            dispatch(getDocumentsByStudentAction(resp.data))
        })
    }
};