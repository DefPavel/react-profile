import React from "react";
import MainLayout from './components/layouts/main-layout';
import './styles/main-page.scss';
import { Button, Card, Container, Row } from "react-bootstrap";
import { 
  IoPersonSharp,
  IoSchoolSharp,
  IoBookSharp,
  IoDocumentTextSharp,
  IoCalendarClearSharp,
  IoBarChartSharp,
  IoBriefcaseSharp,
  IoBookmarksSharp

} from "react-icons/io5";

const App = () => {
  return (
    <MainLayout>
      <Container className="mt-2">
        <Card>
          <Card.Body>
          <div className="page-header">
            <div className="container img-overlay">
              <Row>
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="page-caption">
                            <h1 className="page-title">Электронная информационно-образовательная среда</h1>
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
                <div className="d-flex justify-content-center flex-row flex-wrap bd-highlight mb-3">

                <Button variant="btn btn-light me-3 mb-2">
                  <IoPersonSharp size={20}/>
                  {' '}
                  Портфолио
                </Button>
                <Button variant="btn btn-light me-3 mb-2">
                  <IoSchoolSharp size={20}/>
                  {' '}
                  Дистанционное обучение
                </Button>
                <Button variant=" btn btn-light me-3 mb-2">
                  <IoBookmarksSharp size={20}/>
                  {' '}
                  Библиотека
                </Button>
                <Button variant=" btn btn-light me-3 mb-2">
                  <IoSchoolSharp size={20}/>
                  {' '}
                  Учебные планы
                </Button>
                <Button variant=" btn btn-light me-3 mb-2">
                  <IoSchoolSharp size={20}/>
                  {' '}
                  Расписание
                </Button>
                <Button variant=" btn btn-light me-3 mb-2">
                  <IoSchoolSharp size={20}/>
                  {' '}
                  Графики
                </Button>
                <Button variant=" btn btn-light me-3 mb-2">
                  <IoBriefcaseSharp size={20}/>
                  {' '}
                  Преподаватели
                </Button>
                <Button variant=" btn btn-light me-3 mb-2">
                  <IoBookSharp size={20}/>
                  {' '}
                  Журналы
                </Button>
                </div>
              </Row>
            </div>
        </div>
          </Card.Body>
        </Card>

       
      </Container>
    </MainLayout>
  
  )
}

export default App;