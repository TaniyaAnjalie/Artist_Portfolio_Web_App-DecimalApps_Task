import React from 'react'

import { Container, Row, Col } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

import Header from '../Components/Header';
import Footer from '../Components/Footer';

function Home() {
  return (
    <>
      <Header/>

      <Container>
        <Row>
          <Col>
            hello
          </Col>
        </Row>
      </Container>
      
      <Footer/>
    </>
  )
}

export default Home
