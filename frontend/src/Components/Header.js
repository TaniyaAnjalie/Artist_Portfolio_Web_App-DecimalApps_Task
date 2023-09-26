import React from 'react'

import { Container, Row, Image, Nav } from 'react-bootstrap';

import Logo from '../Assets/Logo.png';

const logo = {
    size: {
        width: "100px",
        height: "100px"
    },
}

function Header() {
  return (
    <div>
      <Container>
            <Row>
                <div className='logo'>
                    <Image src={Logo} roundedCircle style={logo.size}/>
                </div>

                <div>
                    <Nav
                        activeKey="/home"
                        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>

                        <Nav.Item>
                            <Nav.Link href="/home">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="About">About</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </div>
            </Row>
        </Container>
    </div>
  )
}

export default Header
