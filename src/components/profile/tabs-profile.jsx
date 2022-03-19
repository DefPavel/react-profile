import React , {useEffect} from "react";
import {useDispatch } from "react-redux";
import { getStudentCard } from "../../store/actions/persons-actions";

const TabsProfile = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getStudentCard());
    }, 
    [dispatch]);

    return (
        <div style={{padding: '1rem'}}>
        <div className="col-sm-3">
            <h6 className="mb-0">Институт/Факультет :</h6>
        </div>
        <div className="col-sm-8 text-secondary">
            <p>Институт педагогики и психологии</p>
        </div>
        <hr />
        <div className="col-sm-3">
            <h6 className="mb-0">Специальность :</h6>
        </div>
        <div className="col-sm-8 text-secondary">
            <p>Социальная психология</p>
        </div>
        <hr />
        <div className="col-sm-2">
            <h6 className="mb-0">Группа :</h6>
        </div>
        <div className="col-sm-8 text-secondary">
            <p>ДО</p>
        </div>
        <hr />
        <div className="col-sm-2">
            <h6 className="mb-0">Курс :</h6>
        </div>
        <div className="col-sm-8 text-secondary">
            <p>1</p>
        </div>
        <hr />
        <div className="col-sm-3">
            <h6 className="mb-0">Форма обучения :</h6>
        </div>
        <div className="col-sm-8 text-secondary">
            <p>Очная</p>
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
            <h6 className="mb-0">Образовательный уровень :</h6>
        </div>
        <div className="col-sm-8 text-secondary">
            <p>Бакалавр</p>
        </div>
        <hr />
        <div className="col-sm-3">
            <h6 className="mb-0">Номер телефона :</h6>
        </div>
        <div className="col-sm-8 text-secondary">
            <p>8 800 555 3535</p>
        </div>
        <hr />
        </div>
      
    )
}

export default TabsProfile;