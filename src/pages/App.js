import React from "react";
import {Card, Container, Row} from "react-bootstrap";

import BaseLayout from "../components/layouts/BaseLayout";
import LinkButtons from "../components/main/LinkButtons";

const App = () => {
    return (
        <BaseLayout>
            <Container className="py-5">
                <Card className={'main-card shadow-lg'}>
                    <Card.Body>
                        <section className={'main-card__header'}>
                            <Row>
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div className="page-caption">
                                        <h1 className="page-title">
                                        Электронная информационно-<br/>образовательная среда ГОУ<br/> ВО ЛНР «ЛГПУ»
                                        </h1>
                                        <p className="page-subtitle">
                                            Данный сайт представляет собой интернет-расширение информационной<br/>
                                            системы ГОУ ВПО "Донбасская национальная академия строительства и архитектуры",<br/>
                                            созданное для студентов, их родителей и сотрудников.<br/>
                                        </p>
                                    </div>
                                </div>
                            </Row>
                            <Row>
                                <LinkButtons />
                            </Row>
                        </section>
                    </Card.Body>
                </Card>
            </Container>
        </BaseLayout>
    )
}

export default App;