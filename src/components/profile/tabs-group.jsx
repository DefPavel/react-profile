import React, { useEffect, useState } from "react";
import {Form} from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { fetchAllGroupsByStudent } from "../../store/actions/group-actions";
import Cookies from "universal-cookie/es6";

const TabsGroup = ({callbackGroup}) => {
    
    const dispatch = useDispatch();
    const cookie = new Cookies();
    const userInformation = cookie.get('user');

    const group = useSelector(state => state.groups.groups); 
    //const plans = useSelector(state => state.plans.plan);
    const [selectedGroup, setselectedGroup] = useState('');

    useEffect(() => {
        if(userInformation ) {
            dispatch(fetchAllGroupsByStudent(userInformation.id_student));
        }
    }, []); // on load page

    useEffect(() => {
        if (group.length > 0) setselectedGroup(group[0]);
    }, [group])


    const changeGroup = (id_group) => {
        setselectedGroup(group[id_group]);
        callbackGroup(group[id_group]);
    };

    const parseGroups = () => {
        const options = [];
        for (let index = 0; index < group.length; index++)
            options.push(
                <option key={group[index].id} value={group[index].id}>{group[index].group_nickname}</option>
            )

        return options;
    };

    return (
        <div className="row g-3">

            <Form.Group className="col-12">
                <Form.Label>Группа:</Form.Label>
                <Form.Select 
                    className={'form-control'} 
                    onChange={e => changeGroup(e.target.value)} disabled={false}>
                        {parseGroups()}
                </Form.Select>
            </Form.Group>

            <Form.Group className="col-12">
                <Form.Label>Институт/Факультет:</Form.Label>
                <Form.Control 
                    readOnly={true}
                    placeholder="Наименование Института/Факультета" 
                    value={selectedGroup?.department_name || ''}/>
            </Form.Group>

            <Form.Group className="col-12">
                <Form.Label>Специальность:</Form.Label>
                <Form.Control 
                    readOnly={true}
                    placeholder="Наименование Специальности" 
                    value={selectedGroup?.specialty_name || ''}/>
            </Form.Group>

            <Form.Group className="col-md-6">
                <Form.Label>Форма обучения:</Form.Label>
                <Form.Control 
                    readOnly={true}
                    placeholder="Форма обучения" 
                    value={selectedGroup?.form_name || ''}/>
            </Form.Group>

            <Form.Group className="col-md-6">
                <Form.Label>Форма оплаты:</Form.Label>
                <Form.Control
                    readOnly={true} 
                    placeholder="Форма оплаты"
                    value={selectedGroup?.basis || ''}/>
            </Form.Group>

            <Form.Group className="col-md-6">
                <Form.Label>№ Зачетной книги:</Form.Label>
                <Form.Control 
                    readOnly={true}
                    placeholder="Зачетная книга" 
                    value={selectedGroup?.record_book || ''}/>
            </Form.Group>

            <Form.Group className="col-md-6">
                <Form.Label>Образовательный уровень:</Form.Label>
                <Form.Control 
                    readOnly={true}
                    placeholder="Образовательный уровень" 
                    value={selectedGroup?.level_name || ''}/>
            </Form.Group>

            <Form.Group className="col-md-6">
                <Form.Label>Год поступления:</Form.Label>
                <Form.Control 
                    readOnly={true}
                    placeholder="Год поступления" 
                    value={selectedGroup?.group_date_start || ''}/>
            </Form.Group>

            <Form.Group className="col-md-6">
                <Form.Label>Год окончания:</Form.Label>
                <Form.Control 
                    readOnly={true}
                    placeholder="Год окончания" 
                    value={selectedGroup?.group_date_end || ''}/>
            </Form.Group>
        </div>
    )  
}

export default TabsGroup;