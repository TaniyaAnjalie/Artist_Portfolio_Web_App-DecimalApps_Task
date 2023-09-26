import React from 'react'
import { Container } from 'react-bootstrap'

import Artist from '../Components/Artist'


const style = {
  h1:{
    marginTop: "20px",
      textAlign: "center",
      color: "#F266AB"
  },

}


function About() {
  return (
    <div>
      <Container>
        <div>
          <h1 style={style.h1}>Artist Portfolio</h1>
          <Artist />
        </div>
      </Container>
    </div>
  )
}

export default About
