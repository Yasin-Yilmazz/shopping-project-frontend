import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="./">Shopping</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px", width: "85%" }}
            navbarScroll
          >
            <Nav.Link href="#action1" className="">
              <i className="fa-solid fa-house"></i> Home
            </Nav.Link>
            <Nav.Link href="#product" className="">
              <i class="fa-sharp fa-solid fa-cart-shopping"></i> Product
            </Nav.Link>

            <Form className="d-flex" style={{ marginLeft: "30%" }}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Nav>
          <Nav.Link href="#login" className="">
            <i className="fa-solid fa-user"></i> Login
          </Nav.Link>
          <Nav.Link href="#register" className="mx-3">
            <i className="fa-solid fa-user-plus"></i> Register
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
