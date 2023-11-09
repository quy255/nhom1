import { Col, Container, Row } from "react-bootstrap";
import products from "../../data.json";
import { useParams } from "react-router-dom";
import "./index.css"
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Button from "react-bootstrap";
function ProductsDetail() {
  useEffect(() => {
    AOS.init({ duration: 1700 });
  }, []);
    const { id } = useParams();
    let items = products.filter((items) => items.id == id);
    items = items[0];
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
      <Container className="a7">
        <Row>
          <Col xs={12} sm={12} md={6} className="detail1">
          <img src={items.img} data-aos="zoom-in" alt={items.name} ></img>
          </Col>
        
        <Col xs={12} sm={12} md={6} className="detail2" data-aos="zoom-in">
          
          <h2 className="detail3"> Name: {items.name}</h2>
          <p className="price">Price: {items.price}$</p>
          <h2 className="detail3">Products include:</h2>
          <p className="detail4">{items.detail.d1}</p>
          <p className="detail4">{items.detail.d2}</p>
          <p className="detail4">{items.detail.d3}</p>
          <p className="detail4">{items.detail.d4}</p>
          <p className="detail4">{items.detail.d5}</p>
          <p className="detail5">More information:
            <br></br>
            
          <a href={items.download} class="btn btn-primary">Download</a>
          </p>
        </Col>
        </Row>
     </Container>
     </motion.div>
  )
}

export default ProductsDetail
