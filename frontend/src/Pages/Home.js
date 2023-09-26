import React from 'react'

import { Container, Row, Col } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Calendar from '../Components/Calendar';
import Art from '../Components/Art';

import Art1 from '../Assets/Art_1.jpg'
import Art2 from '../Assets/Art_2.jpg'
import Art3 from '../Assets/Art_3.jpg'
import Art4 from '../Assets/Art_4.jpg'
import Art5 from '../Assets/Art_5.jpg'

const Arts = [
  {
    title: 'Artwork 1',
    imageSrc: Art1,
    description: 'Description for Artwork 1',
  },
  {
    title: 'Artwork 2',
    imageSrc: Art2,
    description: 'Description for Artwork 2',
  },
  {
    title: 'Artwork 3',
    imageSrc: Art3,
    description: 'Description for Artwork 3',
  },
  {
    title: 'Artwork 4',
    imageSrc: Art4,
    description: 'Description for Artwork 4',
  },
  {
    title: 'Artwork 4',
    imageSrc: Art5,
    description: 'Description for Artwork 4',
  },
];


const style = {
  h1:{
    textAlign: "center",
    color: "#F266AB",
    marginTop: "30px",
    marginBottom: "25px"
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
