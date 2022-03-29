
import React , {useEffect} from "react";
import {Form} from 'react-bootstrap';

const TabsRewardings = () => {
    return (
        <div>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="inputData">Введитие наименование документа</Form.Label>
                <Form.Control
                    placeholder="Диплом победителя конкурса «Русский Медвежонок-2007»"
                    type="text"
                    id="inputData"
                />
            </Form.Group>          
             <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Прикрепить файл для подтверждения</Form.Label>
                <Form.Control type="file" />
            </Form.Group>
        </div>
    )
}

export default TabsRewardings;