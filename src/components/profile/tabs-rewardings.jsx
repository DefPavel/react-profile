
import React , {useEffect, useState} from "react";
import {useDispatch ,useSelector } from "react-redux";
import { fetchUploadFile } from "../../store/actions/student-actions";
import Cookies from "universal-cookie/es6";
import {Form , Button} from 'react-bootstrap';
import {IoFolderOpenSharp} from "react-icons/io5";
import moment from "moment";

const TabsRewardings = () => {

    const [nameCertificate , setCertificate] = useState('');
    const dispatch = useDispatch();
    const cookie = new Cookies(); 

    const uploadFile = async (e) => {

        const files = e.files;
        console.log(e.files);

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
        <div>
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