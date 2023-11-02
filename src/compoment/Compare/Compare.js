
import Products from "../data.json";
//import { useState } from "react";
import { Col, Container, Row, Card, Button, Alert } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import Pagination from "../Pagination/Pagination";
import Scroll from '../Scroll/Scroll'


function Search() {
  const { fItem } = useParams();
  console.log(fItem);

  let items = Products.filter((item) => 
  {
     if (
      item.new.toLowerCase().includes(fItem.toLocaleLowerCase())
    ) {
      return item;
    } else if (item.price.toLowerCase().includes(fItem.toLocaleLowerCase())) {
      return item;
    } else if (
      item.brands.Name.toLowerCase().includes(fItem.toLocaleLowerCase())
    ) {
      return item;
    }
    else if (
      item.category.name.toLowerCase().includes(fItem.toLocaleLowerCase())
    ) {
      return item;
    }
  } );

  const PER_PAGE = 8;
  const [currentPage, setCurrentPage] = useState(0);
  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };
  const offSet = currentPage * PER_PAGE;
  const currentPageData = items.slice(offSet, offSet + PER_PAGE);
  const pageCount = Math.ceil(items.length / PER_PAGE);

  return (
    <Container>
      <Scroll/>
      {items.length === 0 && (
        <Row className="mt-5 mb-5">
          <Alert variant="danger">
            <h3>No suitable product found</h3>
          </Alert>
        </Row>
      )}

      <Row className="mt-3 ">
        {currentPageData.map((item) => (
          <Col xs={12} sm={6} md={4} lg={3} key={item.id}>
            <Card className="ml-3 mt-2 mb-3 product-card">
              <Card.Img variant="top" src={item.img} />
              <Card.Body>
                <Card.Title>
                  {item.name} {item.id}
                </Card.Title>

                <Card.Text>
                  <h6>{item.brands.name}</h6>
                </Card.Text>
                <Card.Text>
                  <h5>$ {item.price}</h5>
                </Card.Text>
                <Link to={`/detail/${item.id}`}>
                  <Button variant="primary">Detail...</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row>
        <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
      </Row>
    </Container>
  );
}

export default Search;
