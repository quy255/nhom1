import { Container, Row , Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import products from '../data.json'
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { Alert } from 'react-bootstrap';
import Pagination from "../Pagination/Pagination"
import { useState } from 'react';
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function Brands() {
  useEffect(() => {
    AOS.init({ duration: 1700 });
  }, []);
  const {id} = useParams();
  let items = products.filter((items) => items.topic.id == id);
  console.log(items);
  let t = products.filter((c) => c.topic.id == id);
  t = t[0];
  const PER_PAGE = 4;
  const [currentPage,setcurrentPage] = useState(1);
  const handPageClick = ({selected: selecTedPage}) => {
    setcurrentPage(selecTedPage);
  };
  const offset = currentPage * PER_PAGE;
  const currentPageData = items.slice(offset,offset + PER_PAGE);
  const pageCount = Math.ceil(items.length / PER_PAGE);
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <Container>
    {t== null && (
        <Alert variant='danger'>
          <h1 className='text-center'>Updating Products...</h1>
        </Alert>
      )}
    <Row>
      <Col xs={12} sm={12} md={12}>
        {t != null && <h1 className='text left'>{t.topic.name} </h1>}
      </Col>
    </Row>
    <div >
    <Row>
      {currentPageData.map((items, index) => (
      <Col xs={12} sm={6} md={3} key={index} className='a2'>
      <Card  className='boder01'>
      <Link to={`/detail/${items.id}`}>
    <Card.Img variant="top" src={items.img} data-aos="fade-down-right" alt={items.name}/>
        </Link>
    <Card.Body data-aos="fade-down-right">
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
  <Row>
    <Col>
    <div className='card pagination'>
    <Pagination pageCount={pageCount} handPageClick={handPageClick}/>
    </div>
    </Col>
  </Row>
  </Container>
  </motion.div>
  )
}

export default Brands