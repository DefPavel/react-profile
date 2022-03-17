import React from "react";
import {Button} from "react-bootstrap";
import { 
    IoPersonSharp,
    IoSchoolSharp,
    IoBookSharp,
    IoDocumentTextSharp,
    IoCalendarClearSharp,
    IoBarChartSharp,
    IoBriefcaseSharp,
    IoBookmarksSharp
  } from "react-icons/io5";

const LinkButtons = () => {
    return (
        <div className="d-flex justify-content-center flex-row flex-wrap bd-highlight mb-3">

                <Button variant="btn btn-light me-3 mb-2" onClick={() => window.location.href = '/profile'}>
                  <IoPersonSharp size={20}/>
                  {' '}
                  Портфолио
                </Button>
                <Button variant="btn btn-light me-3 mb-2" onClick={() => window.location.href = 'http://moodle.lgpu.org'}>
                  <IoSchoolSharp size={20}/>
                  {' '}
                  Дистанционное обучение
                </Button>
                <Button variant=" btn btn-light me-3 mb-2" onClick={() => window.location.href = 'https://www.iprbookshop.ru'}>
                  <IoBookmarksSharp size={20}/>
                  {' '}
                  Библиотека
                </Button>
                <Button variant=" btn btn-light me-3 mb-2">
                  <IoDocumentTextSharp size={20}/>
                  {' '}
                  Учебные планы
                </Button>
                <Button variant=" btn btn-light me-3 mb-2">
                  <IoCalendarClearSharp size={20}/>
                  {' '}
                  Расписание
                </Button>
                <Button variant=" btn btn-light me-3 mb-2">
                  <IoBarChartSharp size={20}/>
                  {' '}
                  Графики
                </Button>
                <Button variant=" btn btn-light me-3 mb-2">
                  <IoBriefcaseSharp size={20}/>
                  {' '}
                  Преподаватели
                </Button>
                <Button variant=" btn btn-light me-3 mb-2">
                  <IoBookSharp size={20}/>
                  {' '}
                  Журналы
                </Button>
        </div>
    )
}

export default LinkButtons;
