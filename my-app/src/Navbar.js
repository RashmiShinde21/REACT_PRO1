import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function NavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="./Navbar">PRED</Navbar.Brand>
          <Nav className="me-auto">
            
            <Nav.Link href="./register">Signup</Nav.Link>
            <Nav.Link href="./login">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  
      
    </>
  );
}

export default NavBar;