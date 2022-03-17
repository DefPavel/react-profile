import React from "react";
import { Container , Row, Col, Image, Card } from "react-bootstrap";
import MainLayout from "../components/layouts/main-layout";
import LoginForm from "../components/login/login-form";
import "../styles/login-page.scss";

const LoginPage = () => {
    return (
        <MainLayout>
            <Container className="py-5 h-100">
                <Row className='d-flex justify-content-center align-items-center h-100"'>
                    <Col className='col-xl-10'>
                        <Card>
                            <Row className="g-0">
                                <div className="img-login col-md-6 col-lg-5 d-md-block">
                                </div>
                                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                    <div className="card-body p-4 p-lg-5 text-black">
                                        <LoginForm />
                                    </div>
                                </div>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </MainLayout>
    )
}

export default LoginPage;