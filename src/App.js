import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
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
import Slideshow from './compoment/Slideshow/Slideshow';
import Produc from "./compoment/Products/Produc";

import ContactUs from './compoment/contact/contact';
import AboutUs from './compoment/AboutUS/About';
import Product from "./compoment/Products/ProductCompare"

function App() {
  return (
    <div>
      <Mainmenu />
      <Slideshow />
      
    <Container fluid="md" className='a'>
     <Routes >
      <Route path='/' element={<Homepage />}></Route>
      <Route path='/products/:id' element={<Produc />}></Route>
      <Route path='/detail/:id' element={<ProductsDetail />}></Route>
      <Route path='/categories/:id' element={<Categori />}></Route>
      <Route path='/brands/:id' element={<Brands />}></Route>
      <Route path='/contact-us/' element={<ContactUs />}></Route>
      <Route path='/about-us/' element={<AboutUs />}></Route>
      <Route path='/productcompare/' element={<Product />}></Route>
      
      
     </Routes>
    </Container>
    
    <Footer className="footer"/>
    </div>
  )
}

export default App;