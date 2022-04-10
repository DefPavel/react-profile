
import React , {useEffect, useState} from "react";
import ReactPaginate from "react-paginate";
import {useDispatch ,useSelector } from "react-redux";
import {fetchUploadFile} from "../../store/actions/student-actions";
import {fetchAllDocuments} from "../../store/actions/documents-actions";
import Cookies from "universal-cookie/es6";
import {Form , Button, Table ,Accordion} from 'react-bootstrap';
import { FileDropper } from "file-dropper";
import {IoImageSharp} from "react-icons/io5";

const TabRewardings = () => {

    const [nameCertificate , setNameCertificate] = useState('');
    const [dateCertificate , setDateCertificate] = useState('');
    const dispatch = useDispatch();
    const cookie = new Cookies(); 
    const userInformation = cookie.get('user');
    const documents = useSelector(state => state.documents.documents);
    const totalPage = useSelector(state => state.documents.documents.pagination?.lastPage);
    const [photo, setPhoto] = useState('');
    

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

    const uploadFile = async () => {

        if(photo) {
            const userInformation = cookie.get('user');
            const formData = new FormData();

            formData.append('name', nameCertificate);
            formData.append('date_issue', dateCertificate);
            formData.append('file', photo);
            formData.append('idStudent', userInformation.id_student);
    
            await dispatch(fetchUploadFile(formData));
            //e.target.files = null;
        }
    }

    return (
        <div className="row g-3">
               <Accordion>
                <Accordion.Item eventKey="0">
                <Accordion.Header>Список документов</Accordion.Header>
                    <Accordion.Body>
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
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <Form onSubmit={() => uploadFile()}>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="inputData">Введитие наименование документа</Form.Label>
                    <Form.Control
                        required
                        value={nameCertificate}
                        onChange={(e) => setNameCertificate(e.target.value)}
                        placeholder="Диплом победителя конкурса «Русский Медвежонок-2007»"
                        type="text"
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="inputData">Введитие дату получения документа</Form.Label>
                    <Form.Control
                        value={dateCertificate}
                        onChange={(e) => setDateCertificate(e.target.value)}
                        placeholder="Дата получения"
                        type="date"
                    />
                </Form.Group>
                <FileDropper 
                    acceptFiles={'image/jpeg'} 
                    callbackFile={(f) => setPhoto(f)} 
                    blockClasses={['width-file']}
                    validateSuccessIconComponent={<IoImageSharp size={24} style={{color: 'green'}} />}
                    validateWrongIconComponent={<IoImageSharp size={24} style={{color: 'red'}} /> }
                    fileIconComponent={<IoImageSharp size={24} /> }
                />
                <div className="d-flex justify-content-center mt-3">
                    <Button 
                        style={{width :'120px'}}
                        type="sumbit" 
                        variant="btn btn-dark btn-block" >
                        <span>Отправить</span>
                    </Button>
                </div>
                
            </Form>
         
            
        </div>
    )
}

export default TabRewardings;