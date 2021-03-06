import React , {useEffect , useState} from "react";
import {useDispatch ,useSelector } from "react-redux";
import Cookies from "universal-cookie/es6";
import {Card , Image, Row} from "react-bootstrap";
import { fetchStudentById } from "../../store/actions/student-actions";
import moment from "moment";
import TabsLayout from '../layouts/TabsLayout';
import TabMarks from "./TabMarks";
import TabGroup from "./TabGroup";
import TabsRewardings from './TabRewardings';

const TabProfile = () => {

    const dispatch = useDispatch();
    const cookie = new Cookies(); 
    const student = useSelector(state => state.students.student);
    const [tab, setTab] = useState(1);
    const [selectedGroup, setGroup] = useState({});

    useEffect(() => {
        const userInformation = cookie.get('user');
        if(userInformation)
            dispatch(fetchStudentById(userInformation.id_student));
    }, []);
    
    const getStatus = () => {
        if(selectedGroup)
            switch (selectedGroup?.status) {
                case "1": return <p className="text-success">Статус: Обучается</p>;
                case "2": return <p className="text-warning">Статус: Выпущен</p>;
                case "3": return <p className="text-danger">Статус: Отчислен</p>;
                case "4": return <p className="text-danger">Статус: Академ отпуск</p>;
                default: return <p>Нет информации</p>;
            }
    };
    
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
                                <span className="text-secondary mb-1"> 
                                { getStatus() }
                                </span>

                            </div>
                        </Card.Body>
                    </Card>          
                </div>
                <div className="col-md-8">
                    <Card className="mb-3">
                        <Card.Body>
                            <Row>
                            <TabsLayout
                                tabsArr={['Основное', 'Успеваемость', 'Достижения']}
                                selectedTab={(tabNumber) => setTab(tabNumber)}
                            />
                            {tab === 1 && <TabGroup callbackGroup={(g) => setGroup(g) }/> }
                            {tab === 2 &&  <TabMarks /> }
                            {tab === 3 &&  <TabsRewardings/> }
                            </Row>
                        </Card.Body>
                    </Card>
                </div>
        </Row>
    );
}

export default TabProfile;