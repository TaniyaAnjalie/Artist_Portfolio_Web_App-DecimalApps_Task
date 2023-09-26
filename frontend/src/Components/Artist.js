import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

import Art from './Art'; 
import Art1 from '../Assets/Art_1.jpg'
import Art2 from '../Assets/Art_2.jpg'
import Art3 from '../Assets/Art_3.jpg'
import Art4 from '../Assets/Art_4.jpg'


const artistData = {
    name: 'Artist Name',
    bio: 'A brief bio about the artist...',
    artworks: [
      {
        imageSrc: Art1,
      },
      {
        imageSrc: Art2,
      },
      {
        imageSrc: Art3,
      },
      {
        imageSrc: Art4,
      },
    ],
};


const style = {
    h1: {
        color: "#A459D1"
    },
    p: {
        fontSize: "20px",
        marginBottom: "50px"
      }
}


function Artist({name, bio}) {
  return (

    <Container>
      <Row>
        <Col>
          <h1 style={style.h1}>{name}</h1>
          <p style={style.p}>{bio}</p>
        </Col>
      </Row>
      <Row>
        {artistData.artworks.map((artwork, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3}>
            <Art {...artwork} />
          </Col>
        ))}
      </Row>
    </Container>

  )
}

export default Artist
