import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Categories from "../Categories/Categori.json"
import Brands from '../Brands/Brands.json';
import Products from '../Products/data.json';




function mainmenu() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#"></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/" >Homepage</Nav.Link>
            <NavDropdown title="Products" id="navbarScrollingDropdown"> 
            {Products.map((items , index ) =>(
              <NavDropdown.Item href={`/products/${items.id}`} key={index}>
                {items.name}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
           
            <NavDropdown title="Categori" id="navbarScrollingDropdown"> 
            {Categories.map((items , index ) =>(
              <NavDropdown.Item href={`/categories/${items.id}`} key={index}>
                {items.name}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            <NavDropdown title="Brands" id="navbarScrollingDropdown"> 
            {Brands.map((items ,index ) =>(
              <NavDropdown.Item href={`/brands/${items.id}`} key={index}>
                {items.name}
                </NavDropdown.Item>
              ))}
            </NavDropdown>

            <Nav.Link href="#" disabled>
             contact
            </Nav.Link> <Nav.Link href="#" disabled>
              About AS
            </Nav.Link>
            <Nav.Link href="#" disabled>
              Compare
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <input
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default mainmenu