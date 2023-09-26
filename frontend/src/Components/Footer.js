import React from 'react'

import {Container, Col, Row, Image} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import Logo from '../Assets/Logo.png';

const style = {
    footer: {
        paddingTop: "25px",
        paddingBottom: "1px",
    },
    logo: {
        width: "60%",
    },
    p: {
        color: "#A459D1",
        fontWeight: "500"
    },
    tagline: {
        fontSize: "1.5rem",
        color: "#A459D1",
        fontWeight: "500"
    },
    icon: {
        color: "#A459D1",
    },
    copyright: {
        textAlign: "center",
        color: "#A459D1"
    }
    
}

function Footer() {
  return (
    <footer style={style.footer}>
      <Container>
        <Row>
            <Col>
                <div style={style.logo}>
                    <Link to = '/home'> <Image src={Logo} style={style.logo}/></Link>
                </div>
            </Col>

            <Col>
                <div>
                    <p style={style.tagline}>Where Artistry <br/>Comes to Life</p>
                </div>
            </Col>
            <Col>
                <p><i class="fa-brands fa-facebook" style={style.icon}></i></p>
                <p><i class="fa-brands fa-instagram" style={style.icon}></i></p>
            </Col>
            <Col>
                <p style={style.p}>Gampaha, sri Lanka</p>
                <p style={style.p}>artwork@gmail.com</p>
                <p style={style.p}>+94 12 345 6789</p>
            </Col>

        </Row>

        <Row>
            <Col>
                <p style={style.copyright}>2023 All rights reserved.</p>
            </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
