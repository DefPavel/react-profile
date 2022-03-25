import React , {useEffect} from "react";
import {useDispatch ,useSelector } from "react-redux";
import Cookies from "universal-cookie/es6";
import {Card , Image, Row, Tabs ,Tab } from "react-bootstrap";
import { getStudentInfo } from "../../store/actions/persons-actions";
import TabsMarks from "./tabs-marks";
import TabsGroup from "./tabs-group";
import moment from "moment";

const TabsProfile = () => {

    // Забрать id Студента
    const person = useSelector(state => state.persons.person);
    // Основная информация о студенте
    const dispatch = useDispatch();
    const cookie = new Cookies();
    useEffect(() => {
        const userInformation = cookie.get('user');
        dispatch(getStudentInfo(userInformation));
    });
    
        const path = 'http://localhost:8080/' + person?.photo_path;
        return (
            <Row>
            <div className="col-md-4 mb-3">
                        <Card>
                            <Card.Body>
                                <div className="d-flex flex-column align-items-center text-center">
                                    <Image 
                                        width={150}
                                        alt="photo" 
                                        src={path} />
                                </div>
                                <div className="mt-3 text-center">
                                    <h5 className="fw-bold ">{person?.lastname} {person?.firstname} {person?.middlename}</h5>
                                    <p className="text-secondary mb-1">
                                        Email: {person?.email}
                                    </p>
                                    <p className="text-secondary mb-1">
                                        Дата рождения: { moment().format('DD.MM.YYYY') }
                                    </p>
                                    <p className="text-secondary mb-1">
                                        Номер телефона: ({person?.mobile_phone})
                                    </p>
                                    <p className="text-secondary mb-1">
                                        Город: {person?.place_of_birth}
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