import React, { useState } from "react";
import { Header, Grid, Item, Table, Label } from "semantic-ui-react";
import ProductCard from "./ProductCard";
import {  Row , Col, Container } from 'react-bootstrap';
import Pagination from "../../Pagination/Pagination"
import "./Pro.css"
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const style = {
  h1: {
    marginTop: "3em"
  },
  h2: {
    margin: "4em 0em 2em"
  },
  h3: {
    marginTop: "2em",
    padding: "2em 0em"
  },
  last: {
    marginBottom: "300px"
  }
};

function ProductComparison ({ products })  {
 
  const [selectedItems, setSelectedItems] = useState([]);

  const addToCompare = (item) => {
    setSelectedItems((selectedItems) => [...selectedItems, item]);
  };

  const removeFromCompare = (item) => {
    const filteredItems = selectedItems.filter(
      (product) => product.id !== item.id
    );
    setSelectedItems((selectedItems) => filteredItems);
  };
  const PER_PAGE = 8;
  const [currentPage,setcurrentPage] = useState(0);
  const handPageClick = ({selected: selecTedPage}) => {
    setcurrentPage(selecTedPage);
  };
  const offset = currentPage * PER_PAGE;
  const currentPageData = products.slice(offset,offset + PER_PAGE);
  const pageCount = Math.ceil(products.length / PER_PAGE);

  return (
   
    <Container data-aos="fade-down-right">
      <h1>Compare Item</h1>
      {selectedItems.length > 0 && (
        <Table definition>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell><Label color="red" ribbon>
                  name
                </Label></Table.HeaderCell>
              {selectedItems.map((el) => (
                <Table.HeaderCell key={el.id}>{el.name}</Table.HeaderCell>
              ))}
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>
                <Label color="orange" ribbon>
                  Price
                </Label>
              </Table.Cell>
              {selectedItems.map((el) => (
                <Table.Cell key={el.id}>{el.price}</Table.Cell>
              ))}
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Label color="teal" ribbon>
                  Description
                </Label>
              </Table.Cell>
              {selectedItems.map((el) => (
                <Table.Cell key={el.id}>{el.detail.d1}</Table.Cell>
              ))}
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Label color="pink" ribbon>
                  Brands
                </Label>
              </Table.Cell>
              {selectedItems.map((el) => (
                <Table.Cell key={el.id}>{el.brands.name}</Table.Cell>
              ))}
            </Table.Row>
          </Table.Body>
        </Table>
      )}
        <Row>
        
        
          {currentPageData.map((product) => (
            <Col xs={12} sm={6} md={6} lg={3} key={product.id} className="card1">
            <ProductCard
            
              className="Card"
              product={product}
              selected={selectedItems}
              addToCompare={addToCompare}
              removeFromCompare={removeFromCompare}
            />
            </Col>
          ))}
          
       
        
        </Row>
      <Row>
    <Col>
    <div className='card pagination'>
    <Pagination pageCount={pageCount} handPageClick={handPageClick}/>
    </div>
    </Col>
  </Row>
  </Container>
    
    
    
  );
};

export default ProductComparison;
