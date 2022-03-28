import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllGroupsByStudent } from "../../store/actions/group-actions";
import { fetchCoursesByGroup } from "../../store/actions/courses-actions";
import Cookies from "universal-cookie/es6";

const TabsGroup = () => {
    
    const dispatch = useDispatch();
    const cookie = new Cookies();
    const userInformation = cookie.get('user');

    const group = useSelector(state => state.groups.groups); 
    const plans = useSelector(state => state.plans.plan);
    const [selectedGroup, setselectedGroup] = useState('');

    useEffect(() => {
        if(userInformation) {
            dispatch(fetchAllGroupsByStudent(userInformation.id_student));
            setselectedGroup(group[0]);
        }
    }, []); // on load page

    const courseByGroyp = (id_group) => {
        dispatch(fetchCoursesByGroup(plans.id, id_group));
        setselectedGroup(group[id_group]);
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
        <div style={{padding: '1rem'}}>
            <div className="col-sm-3 mt-2">
                <h6 className="mb-0">Выбрать группу :</h6>
            </div>
            <select className={'form-control'} onChange={e => courseByGroyp(e.target.value)} disabled={false}>
                        {parseGroups()}
            </select>
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