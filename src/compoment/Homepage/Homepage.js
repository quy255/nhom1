import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Featerproducts from '../Products/FeaterProducts/Featerproducts';
import Newproducts from '../Products/Newproducts/Newproducts';

function Homepage() {
  return (
    <Container >
    <Row>
    <Col xs={12} sm={12} md={12}><Featerproducts /></Col>
  </Row>
  <Row>
    <Col xs={12} sm={12} md={12}><Newproducts /></Col>
  </Row>
  </Container>
  )
}

export default Homepage