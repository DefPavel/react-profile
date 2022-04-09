import React from "react";
import { Container , Row, Col, Card } from "react-bootstrap";
import BaseLayout from "../components/layouts/BaseLayout";
import LoginForm from "../components/login/LoginForm";
import "../styles/login-page.scss";

const Login = () => {
    return (
        <BaseLayout>
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
        </BaseLayout>
    )
}

export default Login;