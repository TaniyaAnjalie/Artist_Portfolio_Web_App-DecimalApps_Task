import React from 'react'

import { Container, Row, Col } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Calendar from '../Components/Calendar';
import Art from '../Components/Art';


const Arts = [
  {
    title: 'Artwork 1',
    imageSrc: '',
    description: 'Description for Artwork 1',
  },
];


const style = {
  h1:{
    marginTop: "20px",
      textAlign: "center",
      color: "#F266AB"
  },

}
function Home() {

  return (
    <>
      <Header/>

      <Container>
        <Calendar />
      </Container>

      <Container>
        <div>
          <h1 style={style.h1}>Artist Portfolio</h1>

          <Row>
            {Arts.map((artwork, index) => (
              <Col key={index} xs={12} sm={6} md={4} lg={3}>
                <Art {...artwork} />
              </Col>
            ))}
          </Row>

        </div>
      </Container>

      <Footer/>
    </>
  )
}

export default Home
