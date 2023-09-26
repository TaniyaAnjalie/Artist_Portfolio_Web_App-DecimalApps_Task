import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Art from './Art'; 


const artistData = {
    name: 'Artist Name',
    bio: 'A brief bio about the artist...',
    artworks: [
      {
        title: 'Artwork 1',
        imageSrc: '',
        description: 'Description for Artwork 1',
      },
      {
        title: 'Artwork 2',
        imageSrc: '',
        description: 'Description for Artwork 2',
      },
    ],
};


function Artist() {
  return (

    <Container>
      <Row>
        <Col>
          <h1>{artistData.name}</h1>
          <p>{artistData.bio}</p>
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
