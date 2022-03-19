import React from "react";
import { Container , Card , Image, Row, Tabs ,Tab } from "react-bootstrap";
import TabsProfile from "../components/profile/tabs-profile";
import TabsMarks from "../components/profile/tabs-marks";
import MainLayout from "../components/layouts/main-layout";
import "../styles/profile-page.scss";

const ProfilePage = () => {

    return (
        <MainLayout>
            <Container className="py-5 h-100">
                <Row>
                <div className="col-md-4 mb-3">
                    <Card>
                        <Card.Body>
                            <div className="d-flex flex-column align-items-center text-center">
                                <Image 
                                    width={150}
                                    alt="photo" 
                                    src="https://img-fotki.yandex.ru/get/114758/47375343.18/0_121882_ddc6e352_XL.jpg" />
                            </div>
                            <div className="mt-3 text-center">
                                <h5 className="fw-bold ">Джонотова Василиса Ивановна</h5>
                                <p className="text-secondary mb-1">
                                    Специальность: Наименование
                                </p>
                                <p className="text-secondary mb-1">
                                    Группа: 1 ДО
                                </p>
                                <p className="text-secondary mb-1">
                                    № зачетной книжки: 10825220007
                                </p>
                                <p className="text-secondary mb-1">
                                    Номер телефона: (8 800 555 3535)
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
                                    <TabsProfile />
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
               
               
            </Container>
        </MainLayout>
    )
}

export default ProfilePage;