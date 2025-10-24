import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const NavigationBar = () => (
    <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
            <Navbar.Brand as ={Link} to="/"> Ticketera Indie</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className ="me-auto">
                    <Nav.Link as ={Link} to="/">Cartelera</Nav.Link>
                    <Nav.Link as ={Link} to="/checkout">Reservas</Nav.Link>
                    <Nav.Link as ={Link} to="/admin">Admin</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
);

export default NavigationBar;