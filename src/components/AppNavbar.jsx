import onelogo from "../assets/logo.svg"
import  {Navbar,Container,Nav,NavDropdown}  from "react-bootstrap";
const AppNavbar=()=>{
    return(
      <Navbar variant="dark" bg="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#home">
            <img
              alt="logo"
              src={onelogo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            One School
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-dark" />
        <Navbar.Collapse id="navbar-dark" className="justify-content-end">
          <Nav >
            <NavDropdown 
              id="nav-dropdown-dark"
              title="SAIFUNNISA KK"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#action/3.1">PROFILE</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">LOG OUT</NavDropdown.Item>
          
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}
export default AppNavbar;