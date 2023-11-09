import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Featerproducts from '../Products/FeaterProducts/Featerproducts';
import Newproducts from '../Products/Newproducts/Newproducts';
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function Homepage() {
  useEffect(() => {
    AOS.init({ duration: 1700 });
  }, []);
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <Container data-aos="fade-down-right">
    <Row>
    <Col xs={12} sm={12} md={12}><Featerproducts /></Col>
  </Row>
  <Row>
    <Col xs={12} sm={12} md={12}><Newproducts /></Col>
  </Row>
  </Container>
  </motion.div>
  )
}

export default Homepage