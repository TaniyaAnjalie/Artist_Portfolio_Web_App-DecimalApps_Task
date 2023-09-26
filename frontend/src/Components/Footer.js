import React from 'react'

import {Container, Col, Row, Image} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import Logo from '../Assets/Logo.png';

const logo = {
    size: {
        width: "100px",
        height: "100px"
    },
}

function Footer() {
  return (
    <div>
      <Container>
        <Row>
            <Col>
                <div className='logo'>
                    <Link to = '/home'> <Image src={Logo} style={logo.size}/></Link>
                </div>
            </Col>

            <Col>
                <h5>Discover</h5>
            </Col>

            <Col>
                <h5>Contact</h5>
            </Col>
        </Row>

        <Row>
            <Col>
                <p>2023 All rights reserved.</p>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer
