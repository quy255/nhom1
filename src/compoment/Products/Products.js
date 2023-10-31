
import { Container, Row , Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import products from '../data.json';
import { Link } from 'react-router-dom';
function Products() {
  return (
     <Container>
    <Row>
      <Col xs={12} sm={12} md={12}>
      <h1>Products</h1>
      </Col>
    </Row>
    <div className='a3'>
    <Row>
      {products.map((items, index) => (
      <Col xs={12} sm={6} md={3} key={index} className='a2'>
      <Card >
      <Link to={`/detail/${items.id}`}>
    <Card.Img variant="top" src={items.img} />
    </Link>
    <Card.Body>
    <Link to={`/detail/${items.id}`}>
      <Card.Title>{items.name}</Card.Title>
      </Link>
      <Card.Text>{items.price}
      </Card.Text>
      <Link to={`/detail/${items.id}`}>
      <Button variant="primary"> Detail</Button>
      </Link>
    </Card.Body>
  </Card>
  </Col>
  ))}
  </Row>
  </div>
  </Container>
  )
}

export default Products