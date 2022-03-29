import React from "react";
import {Card, Container, Row } from "react-bootstrap";

import MainLayout from "../components/layouts/main-layout";
import LinkButtons from "../components/main/link-buttons";
import "../styles/main-page.scss";

const MainPage = () => {
        return (
            <MainLayout>
              <Container className="py-5">
                <Card>
                  <Card.Body>
                  <div className="page-header">
                    <div className="container img-overlay">
                      <Row>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="page-caption">
                                    <h1 className="page-title">Электронная информационно-образовательная среда ГОУ ВО ЛНР «ЛГПУ»</h1>
                                    <p className="page-subtitle">
                                    Электронная информационно-образовательная среда (ЭИОС) — это организованная совокупность информационных и образовательных ресурсов,
                                    средств вычислительной техники, 
                                    информационных, телекоммуникационных технологий, аппаратно-программного и организационно-методического обеспечения,
                                    ориентированная на удовлетворение потребностей пользователей в информационных услугах и ресурсах образовательного характера.
                                    </p>
                                </div>
                          </div>
                      </Row>
                      
                      <Row>
                        <LinkButtons />
                      </Row>
                    </div>
                  </div>
                  </Card.Body>
                </Card>
              </Container>
            </MainLayout>
    )
}

export default MainPage;