import React , { useEffect } from "react";
import {useDispatch ,useSelector } from "react-redux";
import { getStudentGroup , getGroupById } from "../../store/actions/persons-actions";
import Cookies from "universal-cookie/es6";
import Select from 'react-select';

const TabsGroup = () => {
    
    const dispatch = useDispatch();
    const cookie = new Cookies();
    const group = useSelector(state => state.persons.groups); 
    const selectedGroup = useSelector(state => state.persons.group);

    const options = group.map(d => ({
        'value': d.id,
        'label': d.group_nickname
    }));

    useEffect(() => {
        const userInformation = cookie.get('user');
        dispatch(getStudentGroup(userInformation));
    }, []);

    const byIdGroup = (id) => {
        dispatch(getGroupById(id));
    }

    return (
        <div style={{padding: '1rem'}}>
            <div className="col-sm-3">
                <h6 className="mb-0">Выбрать группу :</h6>
            </div>
                <Select className="mt-2"
                    defaultValue={options[0]}
                    onChange={opt => { byIdGroup(opt.value) } }
                    options={options}
                />
            <hr />
                
            <div className="col-sm-3">
                <h6 className="mb-0">Институт/Факультет :</h6>
            </div>
            <div className="col-sm-8 text-secondary">
                <p>{selectedGroup?.department_name}</p>
            </div>
            <hr />
            <div className="col-sm-3">
                <h6 className="mb-0">Специальность :</h6>
            </div>
            <div className="col-sm-8 text-secondary">
                <p>{selectedGroup?.specialty_name}</p>
            </div>
            <hr />
            <div className="col-sm-2">
                <h6 className="mb-0">Курс :</h6>
            </div>
            <div className="col-sm-8 text-secondary">
                <p>{selectedGroup?.course}</p>
            </div>
            <hr />
            <div className="col-sm-3">
                <h6 className="mb-0">Форма обучения :</h6>
            </div>
            <div className="col-sm-8 text-secondary">
                <p>{selectedGroup?.form_name}</p>
            </div>
            <hr />
            <div className="col-sm-3">
                <h6 className="mb-0">Форма оплаты :</h6>
            </div>
            <div className="col-sm-8 text-secondary">
                <p>{selectedGroup?.basis}</p>
            </div>
            <hr />
            <div className="col-sm-4">
                <h6 className="mb-0">№ Зачетной книги :</h6>
            </div>
            <div className="col-sm-8 text-secondary">
                <p>{selectedGroup?.record_book}</p>
            </div>
            <hr />
            <div className="col-sm-4">
                <h6 className="mb-0">Образовательный уровень :</h6>
            </div>
            <div className="col-sm-8 text-secondary">
                <p>{selectedGroup?.level_name}</p>
            </div>
            <hr />
            <div className="col-sm-3">
                <h6 className="mb-0">Год поступления :</h6>
            </div>
            <div className="col-sm-8 text-secondary">
                <p>{selectedGroup?.group_date_start}</p>
            </div>
            <hr />
            <div className="col-sm-3">
                <h6 className="mb-0">Год окончания :</h6>
            </div>
            <div className="col-sm-8 text-secondary">
                <p>{selectedGroup?.group_date_end}</p>
            </div>
            <hr />
            <div className="col-sm-3">
                <h6 className="mb-0">Статус студента :</h6>
            </div>
            <div className="col-sm-8 text-secondary">
                {
                    (selectedGroup?.status === '1')
                        ? <p className="text-success">Обучается</p>
                        : <p className="text-danger">Выпущен</p>
                }
            </div>
            <hr />
        </div>
    )
   
}

export default TabsGroup;