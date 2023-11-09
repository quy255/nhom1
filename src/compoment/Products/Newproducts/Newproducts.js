import { Container, Row , Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import products from '../../data.json';
import { Link } from 'react-router-dom';
import "../FeaterProducts/pro.css"
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function Featerproducts() {
  useEffect(() => {
    AOS.init({ duration: 1700 });
  }, []);
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <Container className=''>
      <Row>
        <Col xs={12} sm={12} md={12}>
        <h1>New Products</h1>
        </Col>
      </Row>
      
      <Row>
        {products.filter((items) =>{
          if(items.new === 1){
            return items;
          }
          else{
            return null;
          }
        }).map((items, index) => (
        <Col xs={12} sm={6} md={3} key={index} className='a2'>
        <Card  className='boder01'>
        <Link to={`/detail/${items.id}`}>
      <Card.Img variant="top" data-aos="zoom-in" src={items.img} />
      </Link>
      <Card.Body data-aos="zoom-in">
      <Link to={`/detail/${items.id}`}>
        <Card.Title>{items.name}</Card.Title>
        </Link>
        <Card.Text>${items.price}
        </Card.Text>
        <Link to={`/detail/${items.id}`}>
        <Button variant="primary"> Detail</Button>
        </Link>
      </Card.Body>
    </Card>
    </Col>
    ))}
    </Row>
    
    </Container>
    </motion.div>
  )
}

export default Featerproducts