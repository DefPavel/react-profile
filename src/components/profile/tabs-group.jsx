import React , {useEffect} from "react";
import {useDispatch ,useSelector } from "react-redux";
import { getStudentGroup } from "../../store/actions/persons-actions";


const TabsGroup = () => {

    const dispatch = useDispatch();
    const group = useSelector(state => state.persons.group);
    useEffect(() => {
        dispatch(getStudentGroup());
    }, 
    [dispatch]);

    if(group) {
        return (
            <div style={{padding: '1rem'}}>
            <div className="col-sm-3">
                <h6 className="mb-0">Институт/Факультет :</h6>
            </div>
            <div className="col-sm-8 text-secondary">
                <p>{group[0]?.department_name}</p>
            </div>
            <hr />
            <div className="col-sm-3">
                <h6 className="mb-0">Специальность :</h6>
            </div>
            <div className="col-sm-8 text-secondary">
                <p>{group[0]?.specialty_name}</p>
            </div>
            <hr />
            <div className="col-sm-2">
                <h6 className="mb-0">Группа :</h6>
            </div>
            <div className="col-sm-8 text-secondary">
                <p>{group[0]?.group_nickname}</p>
            </div>
            <hr />
            <div className="col-sm-2">
                <h6 className="mb-0">Курс :</h6>
            </div>
            <div className="col-sm-8 text-secondary">
                <p>{group[0]?.course}</p>
            </div>
            <hr />
            <div className="col-sm-3">
                <h6 className="mb-0">Форма обучения :</h6>
            </div>
            <div className="col-sm-8 text-secondary">
                <p>{group[0]?.form_name}</p>
            </div>
            <hr />
            <div className="col-sm-3">
                <h6 className="mb-0">Форма оплаты :</h6>
            </div>
            <div className="col-sm-8 text-secondary">
                <p>Бюджет</p>
            </div>
            <hr />
            <div className="col-sm-4">
                <h6 className="mb-0">№ Зачетной книги :</h6>
            </div>
            <div className="col-sm-8 text-secondary">
                <p>{group[0]?.record_book}</p>
            </div>
            <hr />
            <div className="col-sm-4">
                <h6 className="mb-0">Образовательный уровень :</h6>
            </div>
            <div className="col-sm-8 text-secondary">
                <p>{group[0]?.level_name}</p>
            </div>
            <hr />
            <div className="col-sm-3">
                <h6 className="mb-0">Год поступления :</h6>
            </div>
            <div className="col-sm-8 text-secondary">
                <p>{group[0]?.group_date_start}</p>
            </div>
            <hr />
            <div className="col-sm-3">
                <h6 className="mb-0">Год окончания :</h6>
            </div>
            <div className="col-sm-8 text-secondary">
                <p>{group[0]?.group_date_end}</p>
            </div>
            <hr />
            <div className="col-sm-3">
                <h6 className="mb-0">Статус студента :</h6>
            </div>
            <div className="col-sm-8 text-secondary">
                {
                    (group[0]?.status === '1')
                        ? <p className="text-success">Обучается</p>
                        : <p className="text-danger">Выпущен</p>
                }
            </div>
            <hr />
        </div>
        )
    }
   
}

export default TabsGroup;