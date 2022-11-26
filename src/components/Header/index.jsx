import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar className="sticky-sm-top" collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#features">Soluções</Nav.Link>
          <Nav.Link href="#pricing">Clientes</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">Preços</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Contato
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}
export default Header;
