import React from "react";

const TabsProfile = () => {
    return (
        <div style={{padding: '1rem'}}>
        <div className="col-sm-3">
            <h6 className="mb-0">Ф.И.О :</h6>
        </div>
        <div className="col-sm-9 text-secondary">
            <p>Джонотова Василиса Ивановна</p>
        </div>
        <hr />
        <div className="col-sm-3">
            <h6 className="mb-0">Институт :</h6>
        </div>
        <div className="col-sm-9 text-secondary">
            <p>Институт педагогики и психологии</p>
        </div>
        <hr />
        <div className="col-sm-3">
            <h6 className="mb-0">Специальность :</h6>
        </div>
        <div className="col-sm-9 text-secondary">
            <p>Социальная психология</p>
        </div>
        <hr />
        <div className="col-sm-3">
            <h6 className="mb-0">Группа :</h6>
        </div>
        <div className="col-sm-9 text-secondary">
            <p>ДО</p>
        </div>
        <hr />
        <div className="col-sm-3">
            <h6 className="mb-0">Курс :</h6>
        </div>
        <div className="col-sm-9 text-secondary">
            <p>1</p>
        </div>
        <hr />
        <div className="col-sm-3">
            <h6 className="mb-0">Номер телефона :</h6>
        </div>
        <div className="col-sm-9 text-secondary">
            <p>8 800 555 3535</p>
        </div>
        <hr />
        </div>
      
    )
}

export default TabsProfile;