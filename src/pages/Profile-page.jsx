import React from "react";
import { Container , Card , Image, Row, Nav ,Tab } from "react-bootstrap";
import TabsProfile from "../components/profile/tabs-profile";
import MainLayout from "../components/layouts/main-layout";
import "../styles/profile-page.scss";

const ProfilePage = () => {

    return (
        <MainLayout>
            <Container className="py-5 h-100">
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
                                Группа: 1 ДИА
                            </p>
                        </div>
                    </Card.Body>
                </Card>          
            </div>
            <div className="col-md-8">
                <Card className="mb-3">
                    <Card.Body>
                        <Row>
                            <Nav justify  variant="tabs" defaultActiveKey="/home">
                            <Nav.Item>
                                <Nav.Link href="/home">
                                    Основная информация
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="link-1">Оценки</Nav.Link>
                            </Nav.Item>
                            </Nav>
                            <Tab.Content>
                            <Tab.Pane eventKey="home">
                                 <TabsProfile />
                            </Tab.Pane>
                            </Tab.Content>
                            
                        </Row>



                    </Card.Body>

                </Card>

            </div>
               
            </Container>
        </MainLayout>
    )
}

export default ProfilePage;