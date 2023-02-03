import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/logo.png'
import { Imagem } from './style';

function Header() {
  return (
    <Navbar className="sticky-sm-top" collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home"><Imagem src={logo} alt="" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#features">Soluções</Nav.Link>
          <Nav.Link href="#clientes">Clientes</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#preços">Preços</Nav.Link>
          <Nav.Link eventKey={2} href="#formulario">
            Contato
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}
export default Header;
