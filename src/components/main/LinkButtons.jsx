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
    const addImageAttr = () => ({ size:20, className: 'me-3' })

    const linkArr = [
        {
            name: 'Портфолио',
            url: '/profile',
            icon: <IoPersonSharp {...addImageAttr()}/>,
        },
        {
            name: 'Moodle',
            url: 'http://moodle.lgpu.org',
            icon: <IoSchoolSharp {...addImageAttr()}/>,
        },
        {
            name: 'Библиотека',
            url: 'https://www.iprbookshop.ru',
            icon: <IoBookmarksSharp {...addImageAttr()}/>,
        },
        {
            name: 'Учебные планы',
            url: '',
            icon: <IoDocumentTextSharp {...addImageAttr()}/>,
        },
        {
            name: 'Расписание',
            url: '',
            icon: <IoCalendarClearSharp {...addImageAttr()}/>,
        },
        {
            name: 'Графики',
            url: '',
            icon: <IoBarChartSharp {...addImageAttr()}/>,
        },
        {
            name: 'Преподаватели',
            url: '',
            icon: <IoBriefcaseSharp {...addImageAttr()}/>,
        },
        {
            name: 'Журналы',
            url: '',
            icon: <IoBookSharp {...addImageAttr()}/>,
        },
    ];

    const getLinks = () => {
        return [...linkArr].map((obj, index) => {
            return (
                <Button
                    key={index}
                    variant="btn btn-light me-3 mb-2"
                    className={'d-flex justify-content-center align-items-center'}
                    onClick={() => window.location.href = obj.url}
                >
                    {obj.icon}
                    {obj.name}
                </Button>
            )
        })
    }


    return (
        <div className="d-flex justify-content-center flex-row flex-wrap bd-highlight mb-3">
            {getLinks()}
        </div>
    )
}

export default LinkButtons;
