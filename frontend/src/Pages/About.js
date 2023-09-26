import React from 'react'
import { Container } from 'react-bootstrap'

import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Artist from '../Components/Artist'


const style = {
  h1:{
    marginTop: "20px",
      textAlign: "center",
      color: "#F266AB"
  }

}


function About() {

  const artist = {
    name: 'John Doe',
    bio: 'John Doe is a talented artist with a passion for creating beautiful artworks.He specializes in abstract art and has exhibited his work in galleries around the world. John\'s passion for art began at a young age, and he draws inspiration from nature and everyday life. His paintings often feature bold colors and expressive brushwork, making them visually captivating and thought-provoking. John believes that art has the power to evoke emotions and spark conversations, and he hopes that his work can inspire others to see the beauty in the world around them.',
  };

  return (
    
    <div>
      <Header/>

      <Container>
        <div>
          <h1 style={style.h1}>Welcome to the {artist.name}'s Portfolio</h1>
          <Artist name={artist.name} bio={artist.bio} />
        </div>
      </Container>

      <Footer/>
    </div>
  )
}

export default About
