import React, { useEffect, useState } from 'react';
import {Form} from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { fetchCoursesByGroup } from "../../store/actions/courses-actions";
import { fetchSemestersByCourse } from "../../store/actions/semesters-actions";
import { fetchFormControlSemester } from "../../store/actions/form-actions";
import { fetchPlanIdByGroup } from "../../store/actions/plan-actions";
import { fetchMarksByStudent } from "../../store/actions/marks-actions";
import { Table } from "react-bootstrap";
import Cookies from "universal-cookie/es6";

const TabsMarks = () => {

    const dispatch = useDispatch();
    const cookie = new Cookies();
    const userInformation = cookie.get('user');

    const group = useSelector(state => state.groups.groups); 
    const plans = useSelector(state => state.plans.plan);
    const courses = useSelector(state => state.courses.groupCourses);
    const semesters = useSelector(state => state.semesters.semestersCourse);
    const formControls = useSelector(state => state.forms.formControlSemester);
    const marks = useSelector(state => state.marks.marksByStudent);
    const [selectedCourse, setSelectedCourse] = useState('');

    useEffect(() => {
        if (group.length > 0)
            dispatch(fetchPlanIdByGroup(group[0].id_specialty, group[0].group_date_start));
    }, [group]); // view change group

    useEffect(() => {
        if (plans && plans.id)
            dispatch(fetchCoursesByGroup(plans.id, group[0].id))
    }, [plans]); // view change plan

    useEffect(() => {
        if (courses.length > 0) {
            dispatch(fetchSemestersByCourse(courses[0].idCoursePlan));
            setSelectedCourse(courses[0].idCoursePlan);
        }
    }, [courses]);

    useEffect(() => {
        if (semesters.length > 0) {
            let selectedSemester = semesters[0].name;
            selectedSemester = selectedSemester.split(' ')[1];
            dispatch(fetchFormControlSemester(plans.id, selectedSemester, courses[0].idCoursePlan));       
        }
    }, [semesters]);

    /*useEffect(() => {
        if (semesters.length > 0) {
            let selectedSemester = semesters[0].name;
            selectedSemester = selectedSemester.split(' ')[1];
            dispatch(fetchMarksByStudent(
                group[0].id,
                userInformation.id_student, 
                selectedSemester,
                formControls[0].id,
                courses[0].idCoursePlan,
                plans.id 
            ));
        }
    }, [semesters]);
    */
     
    const parseCourse = () => {
        const options = [];
        for (let index = 0; index < courses.length; index++) {
            options.push(
                <option 
                    key={courses[index].idCoursePlan} 
                    value={courses[index].idCoursePlan}
                >
                    {courses[index].name}
                </option>
            )
        }
        return options;
    };

    const parseSemesters = () => {
        const options = [];

        for (let i = 0; i < semesters.length; i++)
            options.push(
                <option 
                    key={semesters[i].id} 
                    value={semesters[i].name}
                >
                    {semesters[i].name}
                </option>
            )

        return options;
    };

    const parseFormControl = () => {
        const options = [];

        for (let i = 0; i < formControls.length; i++)
            options.push(
                <option 
                    key={formControls[i].id} 
                    value={formControls[i].id}
                >
                    {formControls[i].name}
                </option>
            )

        return options;
    };

    const semestersByCourse = (idCourse) => {
        // Выдать информацию на семестры
        dispatch(fetchSemestersByCourse(idCourse));

        if (semesters.length > 0) {
            let selectedSemester = semesters[0].name;
            selectedSemester = selectedSemester.split(' ')[1];

            dispatch(fetchFormControlSemester(plans.id, selectedSemester, idCourse));
        }
    };

    const controlBySemester = (semester) => {
        semester = semester.split(' ')[1];
        dispatch(fetchFormControlSemester(plans.id, semester, selectedCourse));
    };

    const marksByConrol = (form) => {
        let selectedSemester = semesters[0].name;
            selectedSemester = selectedSemester.split(' ')[1];
        dispatch(fetchMarksByStudent(
            group[0].id,
            userInformation.id_student, 
            selectedSemester,
            form,
            courses[0].idCoursePlan,
            plans.id 
        ));
    };


    return (
        <div className="row g-3" style={{padding: '1rem'}}>

            <Form.Group className="col-md-4">
                <Form.Label>Курс:</Form.Label>
                <Form.Select 
                    className={'form-control'} 
                    onChange={e => semestersByCourse(e.target.value)} 
                    disabled={false}>
                    {parseCourse()}
                </Form.Select>
            </Form.Group>

            <Form.Group className="col-md-4">
                <Form.Label>Семестр:</Form.Label>
                <Form.Select 
                    className={'form-control'} 
                    onChange={e => controlBySemester(e.target.value)} 
                    disabled={semesters.length === 0} >
                    {parseSemesters()}
                </Form.Select>
            </Form.Group>

            <Form.Group className="col-md-4">
                <Form.Label>Форма контроля:</Form.Label>
                <Form.Select 
                    className={'form-control'} 
                    onChange={e => marksByConrol(e.target.value)} 
                    disabled={formControls.length === 0} >
                    {parseFormControl()}
                </Form.Select>
            </Form.Group>

            <Table responsive striped bordered hover >
            <thead>
                <tr>
                <th>#</th>
                <th>Тип Предмета</th>
                <th>Предмет</th>
                <th>Семестр</th>
                <th>100-бал.оц.</th>
                <th>Экз.оц.</th>
                <th>Зачет оц.</th>
                </tr>
            </thead>
            <tbody>
                {
                     marks.map((item , i) => {
                        return [
                            <tr key={i}>
                            <td>{item.id_mark}</td>
                            <td>{item.form_control_name}</td>
                            <td>{item.subject_name}</td>
                            <td>{item.semester}</td>
                            <td>{item.ball_100}</td>
                            <td>{item.ball_ects}</td>
                            <td>{item.ball_5}</td>

                        </tr>
                        ]

                    })
                }
            </tbody>
        </Table>
        </div>
        
      
    )
}

export default TabsMarks;