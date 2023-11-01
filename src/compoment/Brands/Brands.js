import { Container, Row , Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import products from '../data.json'
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { Alert } from 'react-bootstrap';
function Brands() {
  const {id} = useParams();
  let items = products.filter((items) => items.brands.id == id);
  console.log(items);
  let b = products.filter((b) => b.brands.id == id);
  b = b[0];
  return (
    <Container>
      {b == null && (
        <Alert>
          <h1 className='text-center'>Updating Products...</h1>
        </Alert>
      )}
    <Row>
      <Col xs={12} sm={12} md={12}>
        {b != null && <h1>{b.brands.name} </h1>}
      </Col>
    </Row>
    <div >
    <Row>
      {items.map((items, index) => (
      <Col xs={12} sm={6} md={3} key={index} className='a2'>
      <Card >
      <Link to={`/detail/${items.id}`}>
    <Card.Img variant="top" src={items.img}  alt={items.name}/>
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

export default Brands