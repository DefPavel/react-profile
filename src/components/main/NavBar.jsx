import React from "react";
import { Container, Navbar ,NavDropdown ,Nav } from "react-bootstrap";
import { IoPersonSharp, IoNewspaperSharp, IoFolderSharp, IoLogInSharp} from "react-icons/io5";
import Cookies from "universal-cookie/es6";

const NavBar = () => {
    const cookies = new Cookies();
    const IconProfile = (<span><IoPersonSharp/> Портофолио</span>)
    const IconDirectory = (<span><IoNewspaperSharp/> Справочники</span>)
    const IconMenu = (<span><IoFolderSharp/> Меню</span>)

    const AuthDropdown = (cookies) => {
        const userInformation = cookies.get('user');
        const authToken = cookies.get('auth-token');

        const IconSign = (<span> Ваш профиль: {userInformation?.login}</span>)
        const IconLogin = (<span><IoLogInSharp size={21}/> Авторизация</span>)

        const removeToken = async () => {
            await cookies.remove('auth-token');
            window.location.href = '/';
        }

        const ExitMenu = (
            <Nav>
                <NavDropdown title={IconSign} id="collasible-nav-dropdown">
                    <NavDropdown.Item onClick={() => removeToken()}>Выйти</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        );
        const LoginMenu = (
            <Nav>
                <Nav.Link href="/login">
                    {IconLogin}
                </Nav.Link>
            </Nav>
        );

        return authToken ? ExitMenu : LoginMenu;
    }

    return(
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container fluid="lg">
                <Navbar.Brand href="/"> ЭИОС «ЛГПУ» </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse>
                    <Nav className="me-auto">
                        <Nav.Link href="/profile">
                        {IconProfile}
                        </Nav.Link>
                        <NavDropdown title={IconDirectory} id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/2.1">Факультеты</NavDropdown.Item>
                            <NavDropdown.Item href="#action/2.2">Специальности</NavDropdown.Item>
                            <NavDropdown.Item href="#action/2.3">Группы</NavDropdown.Item>
                            <NavDropdown.Item href="#action/2.4">Кафедры</NavDropdown.Item>
                            <NavDropdown.Item href="#action/2.5">Преподаватели</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title={IconMenu} id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Расписание</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Оценки</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Журналы</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Планы</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.5">Дистанционное обучение</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.6">Библиотека</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    {AuthDropdown(cookies)}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;