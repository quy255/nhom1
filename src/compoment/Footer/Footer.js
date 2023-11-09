import React from 'react';
import "./Footer.css"
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer () {
  useEffect(() => {
    AOS.init({ duration: 1700 });
  }, []);
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <MDBFooter className='footer' data-aos="fade-down-right" >
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href=''className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='facebook-f' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='twitter' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='google' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='instagram' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='linkedin' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='github' />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
           
          <MDBCol md='2' lg='2' xl='2'    >
              <h6 className='text-uppercase fw-bold mb-4'>About</h6>
              <p>
                <a href='#!' className='text-reset'>
                Home
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Products
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Categori
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                 Brands
                </a>
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                Anniversary
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Congratulations
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                love
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                 Brithday
                </a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' >
              <h6 className=''>CATEGORIES</h6>
              <p>
                <a href='#!' className='text-reset'>
                Rose
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Chrysanthemum
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                lilies
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Sunflower
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p href="https://maps.app.goo.gl/BZWun5brVZcFBzhL7">
                <MDBIcon color='secondary' icon='home' className='me-2' />
                391a Nam Ky Khoi Nghia, Q3 ,TPHCM
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                ABCD@gmail.com
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> + 01 234 567 88
              </p>
              <p>
                
                <MDBIcon color='secondary' icon='print' className='me-3' /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center' >
        © 2021 Copyright:
        <a>
          Blooming 2023
        </a>
      </div>
    </MDBFooter>
    </motion.div>
  );
}