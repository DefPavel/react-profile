
import React , {useEffect, useState} from "react";
import ReactPaginate from "react-paginate";
import {useDispatch ,useSelector } from "react-redux";
import {fetchUploadFile} from "../../store/actions/student-actions";
import {fetchAllDocuments} from "../../store/actions/documents-actions";
import Cookies from "universal-cookie/es6";
import {Form , Button, Table} from 'react-bootstrap';
import {IoFolderOpenSharp} from "react-icons/io5";

const TabsRewardings = () => {

    const [nameCertificate , setCertificate] = useState('');
    const dispatch = useDispatch();
    const cookie = new Cookies(); 
    const userInformation = cookie.get('user');
    const documents = useSelector(state => state.documents.documents);
    const totalPage = useSelector(state => state.documents.documents.pagination?.lastPage);

    useEffect(() => {
        if(userInformation) {
            dispatch(fetchAllDocuments(userInformation.id_student, 1));
        }
    }, []);


    const paginate = pageNumber => {
		pageNumber = pageNumber.selected + 1;
        if (pageNumber > 0 && pageNumber <= totalPage)
			dispatch(fetchAllDocuments(userInformation.id_student, pageNumber))
	}

    const uploadFile = async (e) => {

        const files = e.files;

        if(files.length > 0) {
            const userInformation = cookie.get('user');
            const file = files[0];
            const formData = new FormData();

            formData.append('name', nameCertificate);
            formData.append('file', file);
            formData.append('idStudent', userInformation.id_student);
    
            await dispatch(fetchUploadFile(formData));
            //e.target.files = null;
        }
    }

    return (
        <div className="row g-3">
            <Table responsive striped bordered >
                <thead>
                    <tr>
                        <td>#</td>
                        <td>Наименование</td>
                        <td>Статус</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        documents.data?.map((item , i) => {
                            return [
                                <tr key={i}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.status === true ? "проверено" : "не проверено"}</td>
                                </tr>
                            ]
                        })
                    }
                </tbody>
            </Table>
            <ReactPaginate style={{margin:0}}
                previousLabel={'<'}
                nextLabel={'>'}
                breakLabel={'...'}
                pageCount={totalPage}
                onPageChange={paginate}
                containerClassName={'pagination justify-content-center'}
                pageClassName={'page-item'}
                pageLinkClassName={'page-link'}
                previousClassName={'page-item'}
                previousLinkClassName={'page-link'}
                nextClassName={'page-item'}
                nextLinkClassName={'page-link'}
                breakClassName={'page-item'}
                breakLinkClassName={'page-link'}
                activeClassName={'active'}
            />
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="inputData">Введитие наименование документа</Form.Label>
                    <Form.Control
                        value={nameCertificate}
                        onChange={(e) => setCertificate(e.target.value)}
                        placeholder="Диплом победителя конкурса «Русский Медвежонок-2007»"
                        type="text"
                    />
                </Form.Group>          
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Прикрепить файл для подтверждения</Form.Label>
                    <Form.Control 
                        accept=".png, .jpg, .jpeg"
                        onChange={(e) => uploadFile(e.target)}
                        type="file"/>
                </Form.Group>
                    <Button 
                        //disabled={loading}
                        style={{width :'140px'}}
                        type="sumbit" 
                        variant="btn btn-dark btn-block" >
                        <IoFolderOpenSharp size={20}/>
                        <span>Отправить</span>
                    </Button>
            </Form>
            
        </div>
    )
}

export default TabsRewardings;