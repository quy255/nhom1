import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Categories from "../Categories/Categori.json"
import Brands from '../Brands/Brands.json';
import Products from '../Products/data.json';

import"./Mainmenu.css"
import { IoMdSearch } from "react-icons/io";
import Logo from "../../Data/Logo/logo.png"
import { Link } from "react-router-dom";

function mainmenu() {
  
  return (
    <Navbar expand="lg" className="homepage1">
      <Container fluid>
        <Navbar.Brand href="/">
          <img src={Logo} alt='logo' className='logo'></img>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse  >
          
          <Nav className='mainmenu1'>
            <Nav.Link href="/" className='aaa'>Homepage</Nav.Link>
            <NavDropdown title="Products" id="navbarScrollingDropdown" className='aaa'> 
            {Products.map((items , index ) =>(
              <NavDropdown.Item href={`/products/${items.id}`} key={index}>
                {items.name}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
           
            <NavDropdown title="Categori" id="navbarScrollingDropdown" className='aaa'> 
            {Categories.map((items , index ) =>(
              <NavDropdown.Item href={`/categories/${items.id}`} key={index} >
                {items.name}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            <NavDropdown title="Brands" id="navbarScrollingDropdown" className='aaa'> 
            {Brands.map((items ,index ) =>(
              <NavDropdown.Item href={`/brands/${items.id}`} key={index}>
                {items.name}
                </NavDropdown.Item>
              ))}
            </NavDropdown>

            <Nav.Link as={Link} to={"/contact-us"} className='aaa'>
              <span className="aaa">Contact US</span>
            </Nav.Link> <Nav.Link as={Link} to={"/about-us"} className='aaa'>
              <span className="aaa">About US</span>
            </Nav.Link>
            <Nav.Link as={Link} to={"/productcompare"} className='Compare'>
              <span className="aaa">Compare</span>
            </Nav.Link>
          </Nav>
          <Form className="search1">
            <Form.Control
              type="search"
              placeholder="Search"
              className="search1"
              aria-label="Search"
              
            />
            <Link to={`/search`}>
              <Button variant="outline-success" className=''>
                <IoMdSearch className="search-icon" />
              </Button>
            </Link>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default mainmenu