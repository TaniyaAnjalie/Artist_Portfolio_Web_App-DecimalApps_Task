import React from 'react'

import { Container, Row, Col } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Calendar from '../Components/Calendar';
import Art from '../Components/Art';

function Home() {

  return (
    <>
      <Header/>

      <Container>
        <Calendar />
      </Container>

      <Container>
        <div>
          <h1>Artist Portfolio</h1>

          <div className="portfolio">
            {/* {Art.map((artwork, index) => (
              <Art key={index} {...artwork} />
            ))} */}
          </div>

        </div>
      </Container>

      <Footer/>
    </>
  )
}

export default Home
