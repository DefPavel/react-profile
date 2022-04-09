
import React from "react";
import { Container, Navbar ,NavDropdown ,Nav } from "react-bootstrap";
import Cookies from "universal-cookie/es6";
import { IoPersonSharp, IoNewspaperSharp, IoFolderSharp, IoLogInSharp} from "react-icons/io5";

const iconProfile = (<span><IoPersonSharp/> Портофолио</span>)
const iconDirectory = (<span><IoNewspaperSharp/> Справочники</span>)
const iconMenu = (<span><IoFolderSharp/> Меню</span>)
const iconLogin = (<span><IoLogInSharp size={21}/> Авторизация</span>)
const cookies = new Cookies();

const removeToken = async () => {
    await cookies.remove('auth-token');
    return window.location.href = '/';
}


const HeaderAuth = () => {

    if(cookies.get('auth-token')) {

        const userInformation = cookies.get('user');
        const iconSign = (<span> Ваш профиль: {userInformation?.login}</span>)

        return (
            <Nav>
                <NavDropdown title={iconSign} id="collasible-nav-dropdown">
                    <NavDropdown.Item onClick={ () => removeToken() }>Выйти</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        )
    }
    return (
        <Nav>
            <Nav.Link href="/login">
                {iconLogin}
            </Nav.Link>
        </Nav>
    )
}
const NavBar = () => {
    return(
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container fluid="lg">
        <Navbar.Brand href="/">
            ЭИОС «ЛГПУ»
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse>
            <Nav className="me-auto">
                <Nav.Link href="/profile">
                {iconProfile}
                </Nav.Link>
                <NavDropdown title={iconDirectory} id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/2.1">Факультеты</NavDropdown.Item>
                    <NavDropdown.Item href="#action/2.2">Специальности</NavDropdown.Item>
                    <NavDropdown.Item href="#action/2.3">Группы</NavDropdown.Item>
                    <NavDropdown.Item href="#action/2.4">Кафедры</NavDropdown.Item>
                    <NavDropdown.Item href="#action/2.5">Преподаватели</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title={iconMenu} id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Расписание</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Оценки</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Журналы</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">Планы</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.5">Дистанционное обучение</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.6">Библиотека</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            
            <HeaderAuth />
        </Navbar.Collapse>
        </Container>
    </Navbar>

    )
}

export default NavBar;