import { Container } from "react-bootstrap";

import Company from "./img/1.png";
import CEO from "./img/2.png";
import "./About.css"
import Product from "./img/3.jpg";
import "./About.scss";
import { motion } from "framer-motion";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function AboutUs() {
    useEffect(() => {
        AOS.init({ duration: 1700 });
      }, []);
  return (
    <motion.div
      className="aboutus"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Container fluid="lg">
      <div data-aos="fade-down-right">
        <div className="aboutus-content">
          <div className="aboutus-title" data-aos="fade-right">
            <h1>BLOOMING PETALS - We are your companions</h1>
          </div>
          <div className="aboutus-company" data-aos="fade-up">
            <p className="aboutus-company-infor">
            Coming to the fresh flower shop, not only is it dazzling with the beauty
            of flowers, but each bouquet is a wonderful work that the artisan dedicatedly designs. Through skillful hands and an understanding of the meaning of each
            flower. Flowers, from a monotonous flower branch, have become lively, artistic and filled with meanings and emotions.
            That is the diversity of flowers as well as the diversity of the souls of flower artists.
            </p>
            <div className="aboutus-img-company" data-aos="zoom-in">
              <img className="img" src={Company} alt="company" />
            </div>
          </div>
          </div>
          <div className="aboutus-fouder" data-aos="fade-up">
            <div className="aboutus-img-ceo" data-aos="fade-right">
              <img className="img" src={CEO} alt="ceo" />
            </div>
            <p className="aboutus-ceo-infor">
            We are a flower shop with super attractive prices forcustomers. Owning a bouquet of fresh flowers for your partner will no longer be a luxury because the price is reasonable, each bouquet and type of flower willhave a similar and suitable price. Above all, you will be extremely surprised by the quality that comes from each flower and design.
            </p>
          </div>
          <div className="aboutus-product-featured" data-aos="fade-up">
            <p className="aboutus-product-infor">
            The birth of the flower ordering service has brought more conveniences tolife. We are always busy with worries and do not have time to express gratitude and send love and affection. Or sometimes give secret gifts to surprise yourloved ones. Understanding that, we are honored to become your companion, bringing you the most complete products.
            </p>
            <div className="aboutus-img-product" data-aos="fade-left">
              <img className="img" src={Product} alt="product" />
            </div>
          </div>
         
          
        </div>
      </Container>
      
    </motion.div>
  );
}

export default AboutUs;
