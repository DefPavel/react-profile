import React , {useEffect} from "react";
import {useDispatch ,useSelector } from "react-redux";
import Cookies from "universal-cookie/es6";
import {Card , Image, Row, Tabs ,Tab } from "react-bootstrap";
import { fetchStudentById } from "../../store/actions/student-actions";
import TabsMarks from "./tabs-marks";
import TabsGroup from "./tabs-group";
import moment from "moment";

const TabsProfile = () => {

    const dispatch = useDispatch();
    const cookie = new Cookies();
    const student = useSelector(state => state.students.student);

    useEffect(() => {
        const userInformation = cookie.get('user');
        if(userInformation)
            dispatch(fetchStudentById(userInformation.id_student));
    }, []);
    
        const path = `/server-storage/${student?.photo_path}`;
        return (
            <Row>
            <div className="col-md-4 mb-3">
                        <Card>
                            <Card.Body>
                                <div className="d-flex flex-column align-items-center text-center">
                                {student?.photo_path && 
                                <Image width={150}
                                    alt="photo" 
                                    src={path} />
                                }
                                </div>
                                <div className="mt-3 text-center">
                                    <h5 className="fw-bold ">{student?.lastname} {student?.firstname} {student?.middlename}</h5>
                                    <p className="text-secondary mb-1">
                                        Email: {student?.email}
                                    </p>
                                    <p className="text-secondary mb-1">
                                        Дата рождения: { moment().format('DD.MM.YYYY') }
                                    </p>
                                    <p className="text-secondary mb-1">
                                        Номер телефона: ({student?.mobile_phone})
                                    </p>
                                    <p className="text-secondary mb-1">
                                        Город: {student?.place_of_birth}
                                    </p>
                                </div>
                            </Card.Body>
                        </Card>          
                    </div>
                    <div className="col-md-8">
                        <Card className="mb-3">
                            <Card.Body>
                                <Row>
                                <Tabs
                                    defaultActiveKey="first"
                                    transition={false}
                                    className="mb-3"
                                    >
                                    <Tab eventKey="first" title="Основная информация">
                                        <TabsGroup />
                                    </Tab>
                                    <Tab eventKey="second" title="Оценки">
                                        <TabsMarks />
                                    </Tab>
                                    <Tab eventKey="third" title="Награды" disabled>
                                        <p>Награды</p>
                                    </Tab>
                                    </Tabs>
                                    
                                </Row>
                            </Card.Body>
                        </Card>
                    </div>
            </Row>
        )
    }

export default TabsProfile;