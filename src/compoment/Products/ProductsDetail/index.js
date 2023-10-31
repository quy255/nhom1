import { Col, Container, Row } from "react-bootstrap";
import products from "../../data.json";
import { useParams } from "react-router-dom";

function ProductsDetail() {
    const { id } = useParams();
    let items = products.filter((items) => items.id == id);
    items = items[0];
  return (
      <Container>
        <Row>
          <Col xs={12} sm={12} md={6}>
          <img src={items.img} alt={items.name}></img>
          </Col>
        
        <Col xs={12} sm={12} md={6}>
          <h1>{items.name}</h1>
          <p>Price: {items.price}$</p>
          <h2>Products include:</h2>
          <p>{items.detail.d1}</p>
          <p>{items.detail.d2}</p>
          <p>{items.detail.d3}</p>
          <p>{items.detail.d4}</p>
          <p>{items.detail.d5}</p>
          <a href={items.download}>Download</a>
        </Col>
        </Row>
     </Container>
  )
}

export default ProductsDetail
