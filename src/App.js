import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Mainmenu from "./compoment/Mainmenu/Mainmenu"
import Footer from './compoment/Footer/Footer';

import { Route , Routes } from 'react-router-dom';
import Homepage from './compoment/Homepage/Homepage';
import ProductsDetail from './compoment/Products/ProductsDetail';
import Categori from './compoment/Categories/Categori';
import Brands from "./compoment/Brands/Brands";
import Produc from "./compoment/Products/Produc"
function App() {
  return (
    <Container fluid="md">
      <Row>
        <Col xs={12} sm={6} md={3}>header</Col>
      </Row>
      <Row>
        <Col xs={12} sm={6} md={3}>
          <Mainmenu />
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={6} md={3}>slideshow</Col>
      </Row>
     <Routes>
      <Route path='/' element={<Homepage />}></Route>
      <Route path='/products/:id' element={<Produc />}></Route>
      <Route path='/detail/:id' element={<ProductsDetail />}></Route>
      <Route path='/categories/:id' element={<Categori />}></Route>
      <Route path='/brands/:id' element={<Brands />}></Route>
     </Routes>
      <Row>
        <Col xs={12} sm={6} md={3}>
         <Footer />
        </Col>
      </Row>
    </Container>
  )
}

export default App;